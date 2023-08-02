import React from 'react'

function OrderList({orders, setOrders, restaurants}) {
// const firstColumn=restaurants.map(restaurant=>
//     (<td key={restaurant.id}>{restaurant.name}</td>
//     ))
// console.log(firstColumn)
const rowdata=orders.map(order=>{
    const restaurantForOrder = restaurants.find(
        restaurant => restaurant.id === order.restaurant_id
      );
      const restaurantName = restaurantForOrder ? restaurantForOrder.name : "N/A";
        return(
          <>
              <tr key={order.id}>
              <td>{restaurantName}</td>
              <td>{order.food_id}</td>
              <td>{order.table_no}</td>
              <td>{order.timestamp}</td>
              <td>
              <button className='btn btn-info'>Delete</button>
              </td>
              </tr>
          </>
        )})
  return (
            <table className="table">
            <thead>
            <a href="/" className="nav-link text-primary">Home-Page</a> 
            <tr>
                <th scope="col">Restaurant_Name</th>
                <th scope="col">Food_id</th>
                <th scope="col">Table Number</th>
                <th scope="col">Timestamp</th>
            </tr>
            </thead>
            <tbody>
            {rowdata}
            </tbody>
        </table>
        )
}

export default OrderList
