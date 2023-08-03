import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = ({ username, restaurants, setRestaurants }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <h1>{username}, Welcome to the Food Court!</h1>
      <div className="mb-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
          placeholder="Search for restaurants..."
          aria-label="Search for restaurants"
        />
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
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
                <NavLink to={`/foodlist/${restaurant.id}`} className="btn btn-primary">
                  View Menu
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
