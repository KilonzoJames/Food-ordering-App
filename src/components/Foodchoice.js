import React from "react";
import { NavLink } from "react-router-dom";

function Foodchoice({ choices, setChoices }) {
  const allChoices = choices.map((choice) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={choice.id}>
      <div className="card border-primary mb-4">
        <img
          className="card-img-top"
          src="https://tastesbetterfromscratch.com/wp-content/uploads/2023/04/Hershey-Chocolate-Cake-8-2-500x500.jpg"
          alt="Logo"
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Food: {choice.food}</h5>
          <p className="card-text">Price: {choice.price}</p>
          <p className="card-text">Restaurant_id: {choice.restaurant_id}</p>
          <button
            onClick={() => removeFood(choice)}
            id={choice.id}
            type="button"
            className="btn btn-primary"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  ));

  function removeFood(foodToRemove) {
    const newCart = choices.filter((choice) => foodToRemove.id !== choice.id);
    setChoices(newCart);
  }

  const totalPrice = choices.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Your Food Choices</h2>
        </div>
        <div className="col-md-4">
          <button
            type="submit"
            className="btn btn-success btn-width-100"
            onClick={() => {
              alert("Thank you for your purchase!");
              window.location.reload();
            }}
          >
            $ {totalPrice} - Checkout
          </button>
        </div>
      </div>
      <div className="row">{allChoices}</div>
      <div className="text-center mt-4">
        <NavLink to="/" className="btn btn-primary">
          Home Page
        </NavLink>
        <NavLink to="/foodlist" className="btn btn-primary mx-2">
          Food List
        </NavLink>
        <NavLink to="/orders" className="btn btn-primary">
          Order List
        </NavLink>
      </div>
    </div>
  );
}

export default Foodchoice;
