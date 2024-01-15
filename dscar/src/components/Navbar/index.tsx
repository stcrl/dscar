import './style.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light  navbar-expand-md main-nav bg-primary">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <br />
          <h3>Carros Top</h3>
          <br />
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscar-navbar"
          aria-controls="dscar-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="nbutton"
        >
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="dscar-navbar"
        >
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
