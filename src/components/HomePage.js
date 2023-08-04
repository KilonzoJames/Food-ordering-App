import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faPhone,
  faShoppingCart,
  faBookOpen,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = ({ username, restaurants, setRestaurants }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
      <div className="container">
        <h1 style={{ color: "tan" }}>NextGen Food Court</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/homepage">
                <FontAwesomeIcon icon={faHome} className="me-1 d-lg-none" />
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/userprofile">
                <FontAwesomeIcon icon={faUser} className="me-1 d-lg-none" />
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/foodchoice">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="me-1 d-lg-none"
                />
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link d-none d-lg-flex" href="tel:+123456789">
                <FontAwesomeIcon icon={faPhone} className="me-1" />
                Contact
              </a>
              <a
                className="nav-link d-lg-none"
                href="tel:+123456789"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FontAwesomeIcon icon={faPhone} className="me-1" />
                <span>Contact</span>
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="me-1 d-lg-none"
                />
                Log-Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      {/* Main Content */}
      <div className="container my-4">
        <h1 className="mt-4">
          {username !== ""
            ? `${username}, Welcome to the Food Court!`
            : "Welcome to the Food Court!"}
        </h1>
        <div className="mb-3 d-flex align-items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control form-control-sm me-3"
            placeholder="Search for restaurants..."
            aria-label="Search for restaurants"
          />
          
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 gy-4">
          {filteredRestaurants.map((restaurant) => (
            <div className="col" key={restaurant.id}>
              <div className="card border-primary h-100">
                <img
                  className="card-img-top"
                  src={restaurant.image}
                  alt={restaurant.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h2 className="card-title">{restaurant.name}</h2>
                  <p className="card-text">{restaurant.description}</p>
                  <div className="d-grid">
                    <NavLink to={`/foodlist/${restaurant.id}`} className="btn btn-primary">
                      <FontAwesomeIcon icon={faBookOpen} className="me-1" />
                      View Menu
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        &copy; {new Date().getFullYear()} Food Court. All rights reserved.
      </footer>

    </div>
  );
};

export default HomePage;
