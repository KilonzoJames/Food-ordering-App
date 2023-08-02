import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/restaurant')
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error);
      });
  }, []);
  
  console.log(restaurants);

  // Filter the restaurants based on the search term
  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <h1>Welcome to the Food Court!</h1>
      <div>
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row row-cols-5 gy-4">
        {filteredRestaurants.map((restaurant) => (
          <div className="col" key={restaurant.id}>
            <div className="card border-primary" style={{ height: '100%' }}>
              <img
                className="card-img-top"
                src={restaurant.image}
                alt={restaurant.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h2 className="card-title">{restaurant.name}</h2>
                  <p className="card-text">{restaurant.description}</p>
                </div>
                <div className="d-grid">
                  <NavLink to={`/foodlist`} className="btn btn-primary">
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
