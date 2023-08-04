import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCheck, faFilter, faHome, faUser, faShoppingCart, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Foodlist({ foods, choices, setChoices, quantities, setQuantities }) {
  const [hint, setHint] = React.useState("");
  const [addedToCart, setAddedToCart] = React.useState(false);
  const [selectedFilterOption, setSelectedFilterOption] = React.useState("All");
  const { id } = useParams();
  const filteredFoods = foods.filter((food) => food.restaurant_id === parseInt(id));
  const filteredFoodsWithSearch = filteredFoods.filter((food) =>
    food.food?.toLowerCase().includes(hint.toLowerCase())
  );

  // Get unique origins from the food data
  const uniqueOrigins = Array.from(new Set(foods.map((food) => food.origin)));

  // Add "food" after each origin for filter options
  const filterOptions = ["All", ...uniqueOrigins.map((origin) => `${origin} food`)];

  function handleFilterOptionClick(option) {
    setSelectedFilterOption(option);
  }

  const filteredFoodsWithSearchAndFilter = filteredFoodsWithSearch.filter((food) => {
    if (selectedFilterOption === "All") {
      return true;
    } else {
      const selectedOrigin = selectedFilterOption.replace(" food", "");
      return food.origin === selectedOrigin;
    }
  });

  const allFoods = filteredFoodsWithSearchAndFilter.map((food) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={food.id}>
      <div className="card border-primary mb-4">
        <img
          className="card-img-top"
          src={food.image}
          alt={food.food}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">{food.food}</h5>
          <p className="card-text">Price: {food.price}</p>
          <p className="card-text">Restaurant Name: {food.restaurant_id}</p>
          <div className="quantity d-flex align-items-center">
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
      setQuantities({ ...quantities, [selectedFood.id]: 1 });
    }

    setAddedToCart(true);
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
      [foodId]: Math.max((prevQuantities[foodId] || 0) + value, 1),
    }));
  }

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
        <div className="container">
          <h1 style={{ color: "tan" }}>NextGen Food Court</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage">
                  <FontAwesomeIcon icon={faHome} className="me-1 d-lg-none" />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/userprofile">
                  <FontAwesomeIcon icon={faUser} className="me-1 d-lg-none" />
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/foodchoice">
                  <FontAwesomeIcon icon={faShoppingCart} className="me-1 d-lg-none" />
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-1 d-lg-none"  />
                  Log-Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-2 pt-1">
        <h2 className=" class-text mt-5">Menu</h2>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="input-group">
            <input
              type="text"
              value={hint}
              onChange={(e) => setHint(e.target.value)}
              className="form-control"
              placeholder="Search for food..."
              aria-label="Search for food"
            />
            <div className="input-group-append">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faFilter} />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  {filterOptions.map((option, index) => (
                    <button
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleFilterOptionClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">{allFoods}</div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        &copy; {new Date().getFullYear()} Food Court. All rights reserved.
      </footer>
    </div>
  );
}

export default Foodlist;
