import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const OrderList = ({ orders, setOrders, restaurants }) => {
  function deleteBot(orderToDelete){
    const orderArray=orders.filter((order)=>orderToDelete.id!==order.id)
    console.log(orderArray.id)
    deleteMethod(orderArray)
    .then(() => {
      setOrders(orderArray);
    })
    }
  function deleteMethod(order){
      const url=`https://server-dvs6.onrender.com/orders/${order.id}`;
      const method={
        method: "DELETE"
      }
      return fetch(url, method)
      .then(data=>data)
    }


  const rowdata = orders.map((order) => {
    const restaurantForOrder = restaurants.find(
      (restaurant) => restaurant.id === order.restaurant_id
    );
    const restaurantName = restaurantForOrder ? restaurantForOrder.name : "N/A";
    return (
      <tr key={order.id}>
        <td>{restaurantName}</td>
        <td>{order.food_id}</td>
        <td>{order.table_no}</td>
        <td>{order.timestamp}</td>
        <td>
          <button onClick={()=>deleteBot(order)} className="btn btn-info"><FontAwesomeIcon icon={faTrash} fade size="lg" /></button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h2>Order History</h2>
      <table className="table table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">Restaurant Name</th>
            <th scope="col">Food ID</th>
            <th scope="col">Table Number</th>
            <th scope="col">Timestamp</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{rowdata}</tbody>
      </table>
      <div className="text-center">
        <NavLink to="/homepage" className="btn btn-primary">
          Home Page
        </NavLink>
      </div>
    </div>
  );
};

export default OrderList;
