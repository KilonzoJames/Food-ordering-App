import React from 'react'
import { NavLink } from 'react-router-dom'

function Foodlist({foods,setFood}) {
console.log(foods)
    const allFoods=foods.map((food)=>
    (
        <div class="ui card m-3">
            <div class="image">
                <img src="https://image.shutterstock.com/image-photo/tasty-french-fries-on-cutting-260nw-273398612.jpg" alt='Logo'/>
                </div>
                <div class="content">
                    <div class="header">{food.food}</div>
                    <div class="meta"><span class="date">{food.price}</span></div>
                    <div class="description">{food.restaurant_id}</div></div>
                    <button type="button" class="btn btn-primary">Primary</button>
                    <button type="button" class="btn btn-info">Primary</button>
                    <button type="button" class="btn btn-secondary">Primary</button>
                    <div class="extra content">
                    {/* <a><i aria-hidden="true" class="user icon"></i>22 Friends</a> */}
                    </div></div>
      )
    )

  return  (
    <div className='col-12 border border-primary bg-success'>
      <div className='row'>
        <nav className='foodchoices'>
            <NavLink to="/login">Login Page</NavLink> 
            <NavLink to="/foodchoice">Food choices</NavLink> 
        </nav>
        {allFoods}
      </div>
    </div>
  )
 
}

export default Foodlist