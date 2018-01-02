import React, { Component } from 'react';
import axios from 'axios';

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      dishes: []
    };

    axios.get('/orders/getOrders').then(response => {
      console.log(response.data.orders);
      this.setState({
        orders: response.data.orders
      });
    });

    axios.get('/orders/getDishes').then(response => {
      console.log(response.data.dishes);
      this.setState({
        dishes: response.data.dishes
      });
    });
  }

  render() {
    let items = [];

    for (let i = 0; i < this.state.orders.length; i++) {
      items.push(
        <div className="card card-body mb-2" key={i}>
          <div className="row">
            <h3 className="mr-auto ml-2">Order #{i + 1}</h3>
            <h5 className="ml-auto mt-2 mr-2">
              Date : {this.state.orders[i].date /*.toDateString()*/}
            </h5>
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
                  <label className="form-check-label" htmlFor="inlineRadio1">
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
                  <label className="form-check-label" htmlFor="inlineRadio2">
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
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    Completed
                  </label>
                </div>
              </div>
            </div>
          </form>

          <div className="row">
            <p className="col">
              Client Name: {this.state.orders[i].clientName}
            </p>
            <p className="col">Total Owed: {this.state.orders[i].totalOwed}</p>
          </div>

          <div className="row">
            <h5 className="col">Order details</h5>

            {/*<p className="col">Dish: {this.state.orders[i].detailsOrder}</p>
            <p className="col">Price: {this.state.orders[i].detailsOrder}</p>*/}
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-10 mx-auto">
            <div className="card card-body">
              <h3 className="text-center">Orders</h3>
              {items}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
