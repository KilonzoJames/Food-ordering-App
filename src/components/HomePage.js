import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

const HomePage = ({ username, restaurants, setRestaurants }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      {/* Navigation Bar */}
        <Navbar/>
      {/* Main Content */}
      <div className="container mt-5 pt-1">
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
            className="form-control form-control-sm me-5"
            placeholder="Search for restaurants..."
            aria-label="Search for restaurants"
          />
          
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4">
          {filteredRestaurants.map((restaurant) => (
            <div className="col" key={restaurant.id}>
              <div className="card border-primary h-100">
                <img
                  className="card-img-top"
                  src={restaurant.image}
                  alt={restaurant.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h2 className="card-title">{restaurant.name}</h2>
                  <p className="card-text">{restaurant.description}</p>
                  <div className="d-grid">
                    <NavLink to={`/foodlist/${restaurant.id}`} className="btn btn-primary">
                      <FontAwesomeIcon icon={faBookOpen} className="me-2" />
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
