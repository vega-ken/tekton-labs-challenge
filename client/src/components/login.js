import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              {/*<img className="logo" src="/img/logo.png" alt="logo" />*/}
              <h3 className="text-center">Account Login</h3>
              <form method="post" action="/users/login">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
const Login = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h3>Login Form</h3>
          </div>
        </div>
      </div>
    </div>
  );
};*/

export default Login;
