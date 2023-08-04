import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
          <p className="card-text">Restaurant_id: {choice.restaurant_id}</p>
          <p className="card-text">Quantity: {quantities[choice.id] || 0}</p>
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
    <div className="container">
      <div className="row">
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <NavLink to="/homepage" className="btn btn-primary m-2">Main Page </NavLink>
        <NavLink to="/orders"  className="btn btn-primary m-2">History</NavLink>
        </nav>
        {allChoices}
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
          <br/>
          <button
          type="submit"
          className="center-button btn btn-info btn-sm m-2"
          onClick={handleCheckout}
        >
          CHECKOUT(KSH {roundedNumberAsNumber})
        </button>
      </div>
          </div>
    </div>
  );
}

export default Foodchoice
