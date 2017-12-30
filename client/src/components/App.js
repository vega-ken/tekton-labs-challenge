import React, { Component } from 'react';

import Header from './header';
import Login from './login';
import Register from './register';
import AddOrder from './add-order';
import Order from './order';

import { BrowserRouter, Route } from 'react-router-dom';

//Aun no entiendo bien como se eligen ciertos componentes dependiendo de la ruta en la que te encuentras
// por eso estoy poniendo varias vistas en la misma ruta principal

//en base al rol del usuario se mostrara una distinta vista al final

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/add-order" component={AddOrder} />
            <Route path="/manage-orders" component={Order} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
