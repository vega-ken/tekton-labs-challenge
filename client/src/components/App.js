import React, { Component } from 'react';

import Header from './header';
//import Login from './login';
import Register from './register';
import AddOrder from './add-order';

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
        <Register />
        <AddOrder />
      </div>
    );
  }
}

export default App;
