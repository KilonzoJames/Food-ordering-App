import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'
import { useState } from 'react'

function Foodlist({foods, choices, setChoices}) {
    const [hint, setHint] = useState("")

    function addToCart(event){
      const foodId = parseInt(event.target.id);
      const selectedFood=foods.find((food) =>food.id===foodId)
      const isFoodAlreadyAdded = choices.some((food) => food.id === foodId);
      !isFoodAlreadyAdded?
      setChoices([...choices, selectedFood]):console.log('Already in favourites');
      event.target.classList.add("clicked");
    }

    const allFoods=foods.map((food)=>
    (
        <div className="card col-2  border border-primary" key={food.id}>
            <div className="image">
                <img className='card-img-top' src="https://tastesbetterfromscratch.com/wp-content/uploads/2023/04/Hershey-Chocolate-Cake-8-2-500x500.jpg" alt='Logo'/>
            </div>
            <div className="content">
                <div className="header">Food: {food.food}</div>
                <div className="meta"><span className="date">Price: {food.price}</span></div>
                <div className="description">Restaurant_id: {food.restaurant_id}</div>
            </div>
            <button 
            onClick={addToCart}
            id={food.id}
            type="button" 
            className="btn btn-primary"
            >Add to Cart</button>
            <button 
            type="button" 
            className="btn btn-info"
            >
            <NavLink to="/foodchoice" className="nav-link text-light">View Cart</NavLink> 
            </button>
        </div>
      )
    )

  return  (
    <div className='col-12 bg-light'>
      <div className='row'>
        <nav className="align-items-center justifd-flex y-content-center">
            <NavLink to="/" className="nav-link text-primary">Login Page</NavLink> 
        </nav>
        <Search hint={hint} setHint={setHint}/>
        {allFoods}
      </div>
    </div>
  )
 
}

export default Foodlist