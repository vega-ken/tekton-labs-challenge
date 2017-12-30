import React, { Component } from 'react';

class Order extends Component {
  //vista para el usuario chef

  //este componente deberia hacer un fetch a una ruta del servidor nodejs para conseguir las ordenes.

  //luego guardar esa informacion en el state para luego renderizarla
  // recuerda poner un valor de "cargando..." antes de mostrar las ordenes
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-10 mx-auto">
            <div className="card card-body">
              {/* renderizar este componente por el numero de ordenes que haya */}
              <h3 className="text-center">Orders</h3>
              <div className="card card-body">
                <div className="row">
                  <h3 className="mr-auto ml-2">Order #1</h3>
                  <h5 className="ml-auto mt-2 mr-2">Date : 01/02/18</h5>
                </div>
                <form method="post" action="/orders/add">
                  <div className="form-group row">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-3 col-form-label pt-0"
                    >
                      Order state:
                    </label>
                    <div className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentType"
                          id="inlineRadio1"
                          value="comanded"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Comanded
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentType"
                          id="inlineRadio2"
                          value="process"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          In process
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentType"
                          id="inlineRadio3"
                          value="completed"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio3"
                        >
                          Completed
                        </label>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="row">
                  <p className="col">Client Name: John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
