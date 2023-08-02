import React from 'react';
import { NavLink } from 'react-router-dom';

function Foodchoice({ choices, setChoices, quantities, setQuantities }) {
  console.log(choices);
  function calculateTotalPrice () {
    return choices.reduce ( (total, choice) => {
      const price = parseInt (String(choice.price).slice (0, String(choice.price).length - 1));
      const quantity = quantities[choice.id] || 0;
      return total + price * quantity;
    }, 0);
  }
  

  const allChoices = choices.map((choice) => (
    <div className="card col-2 border border-primary" key={choice.id}>
      <div className="image">
        <img
          className="card-img-top"
          src={choice.image}
          alt={choice.food}
        />
      </div>
    
      <div className="content">
        <div className="header">Food: {choice.food}</div>
        <div className="meta">
          <span className="date">Price: {choice.price}</span>
        </div>
        <div className="description">Restaurant_id: {choice.restaurant_id}</div>
        <div className="quantity">Quantity: {quantities[choice.id] || 0}</div>
      </div>
      <button
        onClick={() => removeFood(choice)}
        id={choice.id}
        type="button"
        className="btn btn-primary"
      >
        Remove
      </button>
    </div>
  ));

  function removeFood(foodToRemove) {
    console.log(foodToRemove.id);
    const newCart = choices.filter((choice) => foodToRemove.id !== choice.id);
    setChoices(newCart);
  }

  return (
    <div className="col-12 bg-light">
      <div className="row">
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/foodlist">Food List</NavLink>
        <NavLink to="/orders">Order List</NavLink>
        {allChoices}
        <button
          type="submit"
          className="center-button btn btn-success btn-width-50"
          onClick={() => {
            alert('Thank you for your purchase!');
            window.location.reload();
          }}
        >
          $ {calculateTotalPrice()}
          <br />
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Foodchoice;
