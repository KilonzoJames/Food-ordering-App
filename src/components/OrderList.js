import React from 'react'

function OrderList({orders, setOrders}) {
const rowdata=orders.map(order=>
        (
          <>
              <tr key={order.id}>
              <td>{order.food_id}</td>
              <td>{order.table_no}</td>
              <td>{order.timestamp}</td>
              <td>{order.restaurant_id}</td>
              <td>
              <button className='btn btn-info'>Delete</button>
              </td>
              </tr>
          </>
        ))
  return (
            <table className="table">
            <thead>
            <a href="/" className="nav-link text-primary">Home-Page</a> 
            <tr>
                <th scope="col">#</th>
                <th scope="col">Table Number</th>
                <th scope="col">Timestamp</th>
                <th scope="col">Restaurant_id</th>
            </tr>
            </thead>
            <tbody>
            {rowdata}
            </tbody>
        </table>
        )
}

export default OrderList
