import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'
import { useState } from 'react'

function Foodlist({foods,setFood}) {
    const [hint, setHint] = useState("")

    const allFoods=foods.map((food)=>
    (
        <div className="ui card m-2 border border-primary">
            <div className="image">
                <img src="https://tastesbetterfromscratch.com/wp-content/uploads/2023/04/Hershey-Chocolate-Cake-8-2-500x500.jpg" alt='Logo'/>
            </div>
            <div className="content">
                <div className="header">{food.food}</div>
                <div className="meta"><span className="date">{food.price}</span></div>
                <div className="description">{food.restaurant_id}</div>
            </div>
            <button type="button" className="btn btn-primary">Add to Cart</button>
            <button type="button" className="btn btn-warning">Checkout</button>
        </div>
      )
    )

  return  (
    <div className='col-12 bg-light'>
      <div className='row'>
        <nav className='foodchoices'>
            <NavLink to="/" className="nav-link text-primary">Login Page</NavLink> 
            <NavLink to="/foodchoice" className="nav-link text-primary">Food choices</NavLink> 
        </nav>
        <Search hint={hint} setHint={setHint}/>
        {allFoods}
      </div>
    </div>
  )
 
}

export default Foodlist