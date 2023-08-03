import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const HomePage = ({ username, restaurants, setRestaurants }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <h1>{username!=="" ? `${username}, Welcome to the Food Court!` : "Welcome to the Food Court!"}</h1>
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <NavLink to="/" className='navLinkStyle'>Log-Out</NavLink>
        </nav>
      <div className="mb-3 d-flex align-items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control form-control-sm me-5"
          placeholder="Search for restaurants..."
          aria-label="Search for restaurants"
        />
        <NavLink to="/foodchoice" className="cart-icon">
          View Cart
          <FontAwesomeIcon icon={faShoppingCart} beat size="2x" />
        </NavLink>
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
  );
};

export default HomePage;
