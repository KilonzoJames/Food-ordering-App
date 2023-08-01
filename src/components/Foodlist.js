import React from 'react'
import { NavLink } from 'react-router-dom'

function Foodlist({foods,setFood}) {
console.log(foods)
    const allFoods=foods.map((food)=>
    (
        <div class="ui card m-2">
            <div class="image">
                <img src="https://tastesbetterfromscratch.com/wp-content/uploads/2023/04/Hershey-Chocolate-Cake-8-2-500x500.jpg" alt='Logo'/>
                </div>
                <div class="content">
                    <div class="header">{food.food}</div>
                    <div class="meta"><span class="date">{food.price}</span></div>
                    <div class="description">{food.restaurant_id}</div></div>
                    <button type="button" class="btn btn-primary">Add to Cart</button>
                    <button type="button" class="btn btn-info">Primary</button>
                    <div class="extra content">
                    {/* <a><i aria-hidden="true" class="user icon"></i>22 Friends</a> */}
                    </div></div>
      )
    )

  return  (
    <div className='col-12 border border-primary bg-success'>
      <div className='row'>
        <nav className='foodchoices'>
            <NavLink to="/">Login Page</NavLink> 
            <NavLink to="/foodchoice">Food choices</NavLink> 
        </nav>
        {allFoods}
      </div>
    </div>
  )
 
}

export default Foodlist