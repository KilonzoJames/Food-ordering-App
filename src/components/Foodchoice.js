import React from 'react';
import { NavLink } from 'react-router-dom';

function Foodchoice({ choices, setChoices, quantities, setQuantities }) {
  console.log(choices);
  function calculateTotalPrice() {
    return choices.reduce((total, choice) => {
      const price = parseFloat(choice.price);
      const quantity = quantities[choice.id] || 0;
      return total + price * quantity;
    }, 0);
  }

  const allChoices = choices.map((choice) => (
    <div className="card border border-primary col-sm-6 col-md-4 col-lg-3 m-2" key={choice.id}>
      <div className="card border-primary mb-4">
        <img
          className="card-img-top"
          src={choice.image}
          alt={choice.food}
          style={{ height: "200px", objectFit: "cover" }}
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
        className="btn btn-primary m-2"
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
    <div className="container">
      <div className="row">
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <NavLink to="/homepage" className='navLinkStyle'>Home Page </NavLink>
        <NavLink to="/orders"  className="navLinkStyle">History</NavLink>
        </nav>
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
