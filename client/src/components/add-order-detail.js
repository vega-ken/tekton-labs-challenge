import React, { Component } from 'react';
import AddOrderTesting from './add-order-testing';

import axios from 'axios';

class AddOrderDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: [],
      numberDishes: 1,
      dishPrice: ''
    };

    axios.get('/orders/getDishes').then(response => {
      console.log('respuesta del servidor nodejs');
      this.setState({
        dishes: response.data.dishes
      });
    });

    this.onNumberDishesChange = this.onNumberDishesChange.bind(this);
    this.onSelectingDish = this.onSelectingDish.bind(this);
    //this.showDishItems = this.showDishItems.bind(this);

    /*this.state.dishes.map(dish => {
      console.log(dish);
      return <p>plato</p>;
    });*/
  }

  onNumberDishesChange(event) {
    //console.log(event.target.value);
    this.setState({
      numberDishes: event.target.value
    });
  }

  onSelectingDish(event) {
    //console.log(event.target.value);
    // si el valor de este input es igual al de uno de los platos. entonces muestra su precio en el estado
    this.state.dishes.map(dish => {
      //console.log(dish.dishName);
      if (dish.dishName === event.target.value) {
        console.log('si está este plato');
        console.log('su precio es :', dish.dishPrice);
        this.setState({
          dishPrice: dish.dishPrice
        });
      }
      return 1; // evita el warning, pero no creo que sea buena practica. TODO : investigar
    });
  }

  /*showDishItems() {
    this.state.dishes.map(dish => {
      console.log(dish);
      return <p>plato</p>;
    });
  }*/

  render() {
    return (
      <div>
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
              value={this.state.numberDishes}
              onChange={this.onNumberDishesChange}
              required
            />
          </div>
        </div>

        <hr />

        <AddOrderTesting
          dishes={this.state.dishes}
          numberDishes={this.state.numberDishes}
        />

        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="dishName1">DishName Number #</label>
            <input
              type="text"
              className="form-control"
              id="dishName1"
              list="dishesAvailable"
              value={'' /*onChange={this.onSelectingDish}*/}
            />

            <datalist id="dishesAvailable">
              {/*{this.state.dishes
                ? this.state.dishes.map(dish => (
                    <option value={dish.dishName} key={dish._id} />
                  ))
                : null}*/}
            </datalist>
          </div>
          <div className="form-group col-4">
            <label htmlFor="dishPrice">Price</label>
            <input
              type="text"
              className="form-control"
              readOnly
              value={'' /*value={this.state.dishPrice}*/}
            />
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
      </div>
    );
  }
}

export default AddOrderDetail;
