import React, { Component } from 'react';
import axios from 'axios';

class AddOrder extends Component {
  constructor(props) {
    super(props);

    //vista para el usuario tipo cajero.

    // aqui se necesitan recibir la lista de platos con sus precios respectivos. de modo que el cajero pueda llenar el form rapidamente
    // los precios se rellenaran una vez se haya escrito el nombre de un plato
    // aun no estoy seguro de como se realiza esto, pero sé que se puede hacer.

    // agregue el input numero de platos para facilitar el proceso
    // debe haber un equivalente al ngFor aqui en React para poder renderizar varias veces el form que indica el plato y su precio

    // puede que este componente contenga otro que cambie por el numero de platos escogidos.
    // con map y el numero seguro que se puede renderizar varias veces ese componente
    // ademas ese componente tiene que conseguir los platos y sus respectivos precios

    this.state = {
      dishes: []
    };

    // consigue los platos de la BD
    axios.get('/orders/getDishes').then(response => {
      console.log('respuesta del servidor nodejs');
      console.log(response.data.dishes);
      this.setState({
        dishes: response.data.dishes
      });
      console.log(this.state.dishes);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <h3 className="text-center">Add Order</h3>
              <form method="post" action="/orders/add">
                <div className="form-group">
                  <label htmlFor="clientName">Client Name</label>
                  <input
                    type="text"
                    name="clientName"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentType"
                    id="inlineRadio1"
                    value="card"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Tarjeta
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentType"
                    id="inlineRadio2"
                    value="cash"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Efectivo
                  </label>
                </div>

                <div className="form-group row mt-3">
                  <label htmlFor="dishNumber" className="col-8 col-form-label">
                    Number of dishes:
                  </label>
                  <div className="col-4">
                    <input
                      type="Number"
                      min="1"
                      name="dishNumber"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <hr />

                <div className="form-row">
                  <div className="form-group col-8">
                    <label htmlFor="dishName1">DishName Number #</label>
                    <input
                      type="text"
                      className="form-control"
                      id="dishName1"
                      list="dishesAvailable"
                    />

                    <datalist id="dishesAvailable2">
                      <option value="Lomo Saltado" />
                      <option value="Pure con Pollo al Horno" />
                      <option value="Arroz con Pollo" />
                      <option value="Arroz Chaufa" />
                      <option value="Arroz con Mariscos" />
                    </datalist>

                    <datalist id="dishesAvailable">
                      {this.state.dishes
                        ? this.state.dishes.map(dish => (
                            <option value={dish.dishName} key={dish._id} />
                          ))
                        : null}
                    </datalist>
                  </div>
                  <div className="form-group col-4">
                    <label htmlFor="dishPrice">Price</label>
                    <input type="text" className="form-control" readOnly />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-8">
                    <label htmlFor="dishName2">DishName Number #</label>
                    <input
                      type="text"
                      className="form-control"
                      id="dishName2"
                      list="dishesAvailable"
                    />
                  </div>
                  <div className="form-group col-4">
                    <label htmlFor="dishPrice">Price</label>
                    <input type="text" className="form-control" readOnly />
                  </div>
                </div>

                <hr />

                <div className="form-group row">
                  <label htmlFor="totalOwed" className="col-8 col-form-label">
                    Total Owed:
                  </label>
                  <div className="col-4">
                    <input
                      type="Number"
                      className="form-control"
                      id="totalOwed"
                      readOnly
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddOrder;
