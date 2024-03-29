import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Topbar = ({ cart, user }) => {
  console.log("User", user.userName);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <a className="navbar-brand" href="#">
        Ally React - {user.userName}
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
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              {/* <a href="/cart" className="nav-link"> */}
              Cart<sup>{cart.length}</sup>
              {/* </a> */}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (store) => ({
  cart: store.prodReducer.cart,
  user: store.userReducer,
});

export default connect(mapStateToProps, null)(Topbar);
