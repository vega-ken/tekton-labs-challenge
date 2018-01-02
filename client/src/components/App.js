import React, { Component } from 'react';

import Header from './header';
import Login from './login';
import Register from './register';
import AddOrder from './add-order';
import Order from './order';
import About from './about';
import Home from './home';

import { BrowserRouter, Route } from 'react-router-dom';

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
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
