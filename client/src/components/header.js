import React from 'react';

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          React App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="/register" className="nav-link">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  // you can access values passed to this component with props
};

export default Header;
