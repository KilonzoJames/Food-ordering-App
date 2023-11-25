import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faHome,
  faUser,
  faPhone,
  faShoppingCart,
  faSignOutAlt, } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'


function Foodchoice({username, choices, setChoices, quantities }) {
  const [tableId, setTableId] = useState("1")
  function handleCheckout(){
      postOrder()
      Swal.fire({
        title: `Thank you for your purchase,${username}!`,
        text:`Your order will be served at table ${tableId}`,
        imageUrl: 'https://images.unsplash.com/photo-1520869578617-557561d7b114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmVyJTIwdGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      setChoices([])  
    }
  const postOrder=(order)=>{
    const currentTimestamp = new Date().toISOString().split("T")[0]; // Get current timestamp in ISO format
    const url="https://food-app-server-nw3w.onrender.com/orders";
    const postData={
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
    },
    body: JSON.stringify({
        food_id: "",
        table_no: tableId,
        timestamp: currentTimestamp,
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
          <h1 style={{ color: "orange" }}>NextGen Food Court</h1>
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
                  <FontAwesomeIcon icon={faShoppingCart} beat size="1x" />
                  Shopping Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link d-none d-lg-flex" href="tel:+123456789">
                  <FontAwesomeIcon icon={faPhone} beat size="1x" className="me-1" />
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
