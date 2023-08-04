import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faHome,
  faUser,
  faPhone,
  faShoppingCart,
  faSignOutAlt, } from "@fortawesome/free-solid-svg-icons";

function Foodchoice({username, choices, setChoices, quantities, setQuantities }) {
  const [tableId, setTableId] = useState("1")
  function handleCheckout(){
      postOrder()
      alert(`Thank you for your purchase,${username}! Your order will be served at table ${tableId}`);
      window.location.reload();
  }
  const postOrder=(order)=>{
    const url="https://server-dvs6.onrender.com/orders";
    const postData={
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
    },
    body: JSON.stringify({
        food_id: "",
        table_no: tableId,
        timestamp: "",
        restaurant_id: ""
    })};
   return fetch(url, postData)
   .then(response => response.json())
   .then(response => console.log(response))
}

  function calculateTotalPrice() {
    return choices.reduce((total, choice) => {
      const price = parseFloat(choice.price);
      const quantity = quantities[choice.id] || 0;
      return total + price * quantity;
    }, 0);
  }
  const roundedNumber = calculateTotalPrice().toFixed(2);
  const roundedNumberAsNumber = parseFloat(roundedNumber);

  
const allChoices = choices.map((choice) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={choice.id}>
    <div className="card border-primary mb-4">
      <img
        className="card-img-top"
        src={choice.image}
        alt={choice.food}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">Food: {choice.food}</h5>
        <p className="card-text">Price: {choice.price}</p>
        <p className="card-text">Restaurant: {choice.restaurant_name}</p> {/* Modified line */}
        <p className="card-text">Quantity: {quantities[choice.id]}</p>
        {/* Delete Icon with Retained Functionality */}
        <button
          onClick={() => removeFood(choice)}
          id={choice.id}
          type="button"
          className="btn btn-primary"
        >
          <FontAwesomeIcon icon={faTrash} fade size="lg" />
        </button>
      </div>
    </div>
  </div>
));


  function removeFood(foodToRemove) {
    const newCart = choices.filter((choice) => foodToRemove.id !== choice.id);
    setChoices(newCart);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
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
                <a className="nav-link d-none d-lg-flex" href="tel:+123456789">
                  <FontAwesomeIcon icon={faPhone} className="me-1" />
                  Contact
                </a>
                <a
                  className="nav-link d-lg-none"
                  href="tel:+123456789"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FontAwesomeIcon icon={faPhone} className="me-1" />
                  <span>Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-1 d-lg-none" />
                  Log-Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          {allChoices}
          <div className="col-md-12">
            <div className="input-group mb-3">
              <label className="input-group-text">Book Table</label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                value={tableId}
                onChange={(e) => setTableId(e.target.value)}
              >
                <option value>Choose table no...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br />
              <button
                type="submit"
                className="center-button btn btn-info btn-sm m-2"
                onClick={handleCheckout}
              >
                ORDER (KSH {roundedNumberAsNumber})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-5 fixed-bottom">
        &copy; {new Date().getFullYear()} Food Court. All rights reserved.
      </footer>
    </div>

    
  );
}

export default Foodchoice;
