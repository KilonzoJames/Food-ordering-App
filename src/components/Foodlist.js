import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Foodlist({ foods, choices, setChoices }) {
  const [hint, setHint] = React.useState("");
  const { id } = useParams();
  const filteredFoods = foods.filter((food) => food.restaurant_id === parseInt(id));

  const allFoods = filteredFoods.map((food) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={food.id}>
      <div className="card border-primary mb-4">
        <img
          className="card-img-top"
          src={food.image}
          alt={food.food}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{food.food}</h5>
          <p className="card-text">Price: {food.price}</p>
          <p className="card-text">Restaurant Name: {food.restaurant_id}</p>
          <button
            onClick={addToCart}
            id={food.id}
            type="button"
            className="btn btn-primary"
          >
            Add to Cart
          </button>
          <button type="button" className="btn btn-info">
            <NavLink to="/foodchoice" className="nav-link text-light">
              View Cart
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  ));

  function addToCart(event) {
    const foodId = parseInt(event.target.id);
    const selectedFood = filteredFoods.find((food) => food.id === foodId);
    const isFoodAlreadyAdded = choices.some((food) => food.id === foodId);
    !isFoodAlreadyAdded
      ? setChoices([...choices, selectedFood])
      : console.log("Already in favourites");
    event.target.classList.add("clicked");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Food List</h2>
        </div>
        <div className="col-md-4">
          <input
            type="search"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
            className="form-control mb-3"
            placeholder="Search for food..."
          />
        </div>
      </div>
      <div className="row">{allFoods}</div>
    </div>
  );
}

export default Foodlist;
