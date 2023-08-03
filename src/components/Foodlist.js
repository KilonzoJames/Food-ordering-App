import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faPlus, faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";

function Foodlist({ foods, choices, setChoices, quantities, setQuantities }) {
  const [hint, setHint] = React.useState("");
  const [addedToCart, setAddedToCart] = React.useState(false); // Track whether the button is clicked or not
  const { id } = useParams();
  const filteredFoods = foods.filter((food) => food.restaurant_id === parseInt(id));
  const filteredFoodsWithSearch = filteredFoods.filter((food) =>
    food.food.toLowerCase().includes(hint.toLowerCase())
  );

  const allFoods = filteredFoodsWithSearch.map((food) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={food.id}>
      <div className="card border-primary mb-4">
        <img
          className="card-img-top"
          src={food.image}
          alt={food.food}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column align-items-center"> {/* Added flexbox class */}
          <h5 className="card-title">{food.food}</h5>
          <p className="card-text">Price: {food.price}</p>
          <p className="card-text">Restaurant Name: {food.restaurant_id}</p>
          <div className="quantity d-flex align-items-center"> {/* Added flexbox class */}
            <button onClick={() => changeQuantity(food.id, -1)}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{quantities[food.id] || 1}</span>
            <button onClick={() => changeQuantity(food.id, 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button
            onClick={() => addToCart(food)}
            type="button"
            className={`btn btn-primary ${addedToCart && isFoodAddedToCart(food) ? "added" : ""}`}
          >
            {addedToCart && isFoodAddedToCart(food) ? <FontAwesomeIcon icon={faCheck} /> : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  ));

  function addToCart(selectedFood) {
    const isFoodAlreadyAdded = choices.some((food) => food.id === selectedFood.id);
  
    if (!isFoodAlreadyAdded) {
      setChoices([...choices, selectedFood]);
      setQuantities({ ...quantities, [selectedFood.id]: 1 }); // Set default quantity to 1 for new items
    }
  
    setAddedToCart(true); // Set the addedToCart state to true when the button is clicked
  
    // Reset the "Add to Cart" button back to its original state after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  }
  

  function isFoodAddedToCart(selectedFood) {
    return choices.some((food) => food.id === selectedFood.id);
  }

  function changeQuantity(foodId, value) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [foodId]: Math.max((prevQuantities[foodId] || 0) + value, 1), // Ensure quantity is at least 1
    }));
  }

  return (
    <div className="container">
      <h1>Food List</h1>
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <NavLink to="/homepage" className='navLinkStyle'>Go Back</NavLink>
      </nav>
      <div className="mb-3 d-flex align-items-center">
        <input
          type="text"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
          className="form-control form-control-sm me-5"
          placeholder="Search for food..."
          aria-label="Search for food"
        />
        <NavLink to="/foodchoice" className="cart-icon">
          View Cart
          <FontAwesomeIcon icon={faShoppingCart} beat size="2x" />
        </NavLink>
      </div>
      <div className="row">{allFoods}</div>
    </div>
  );
}

export default Foodlist;
