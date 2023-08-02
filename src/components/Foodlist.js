import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Search from './Search';

function Foodlist({ foods, choices, setChoices }) {
  const [hint, setHint] = useState('');
  const { id } = useParams();

  // Filter the foods based on the selected restaurant ID
  const filteredFoods = foods.filter((food) => food.restaurant_id === parseInt(id));

  function addToCart(event) {
    const foodId = parseInt(event.target.id);
    const selectedFood = foods.find((food) => food.id === foodId);
    const isFoodAlreadyAdded = choices.some((food) => food.id === foodId);
    !isFoodAlreadyAdded
      ? setChoices([...choices, selectedFood])
      : console.log('Already in favourites');
    event.target.classList.add('clicked');
  }

  const allFoods = filteredFoods.map((food) => (
    <div className="card col-2 border border-primary" key={food.id}>
      <div className="image">
        <img
          src={food.image}
          alt={food.food}
          style={{ width: '100%', height: '250px', objectFit: 'cover' }}
        />
      </div>
      <div className="content">
        <div className="header">Food: {food.food}</div>
        <div className="meta">
          <span className="date">Price: {food.price}</span>
        </div>
        <div className="description">Restaurant_id: {food.restaurant_id}</div>
      </div>
      <button onClick={addToCart} id={food.id} type="button" className="btn btn-primary">
        Add to Cart
      </button>
      <button type="button" className="btn btn-info">
        <NavLink to="/foodchoice" className="nav-link text-light">
          View Cart
        </NavLink>
      </button>
    </div>
  ));

  return (
    <div className="col-12 bg-light">
      <div className="row">
        <nav className="align-items-center justifd-flex y-content-center">
          <NavLink to="/homepage" className="nav-link text-primary">
            Home Page
          </NavLink>
        </nav>
        <Search hint={hint} setHint={setHint} />
        <div className="food-list">{allFoods}</div>
      </div>
    </div>
  );
}

export default Foodlist;
