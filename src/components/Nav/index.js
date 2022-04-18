import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom"; 

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1 btn btn-dark ">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 btn btn-success">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h2 className="mt-3 m-3">
        <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
        FoodDeliv 
        </Link>
      </h2>
      <form className="form col-3 p-1">
            <input
              className=" form-control m-1 "
              type="search"
              placeholder=" Saisissez votre adresse de livraison"
              aria-label="Search"
            />
            <button className="btn btn-success m-1 " type="button">
              Voir les Restaurents
            </button>
    
          </form>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
