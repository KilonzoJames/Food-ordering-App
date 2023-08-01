import React from 'react'
import { NavLink } from 'react-router-dom'


function Foodchoice({choices, setChoices}) {
  console.log(choices)
  const allChoices=choices.map((choice)=>
    (
        <div className="card col-2  border border-primary" key={choice.id}>
            <div className="image">
                <img className='card-img-top' src="https://tastesbetterfromscratch.com/wp-content/uploads/2023/04/Hershey-Chocolate-Cake-8-2-500x500.jpg" alt='Logo'/>
            </div>
            <div className="content">
                <div className="header">Food: {choice.food}</div>
                <div className="meta"><span className="date">Price: {choice.price}</span></div>
                <div className="description">Restaurant_id: {choice.restaurant_id}</div>
            </div>
            <button 
            onClick={()=>removeFood(choice)}
            id={choice.id}
            type="button" 
            className="btn btn-primary"
            >Remove</button>
        </div>
      )
    )

    function removeFood(foodToRemove){
      console.log(foodToRemove.id)
      const newCart=choices.filter((choice)=>foodToRemove.id!==choice.id)
      setChoices(newCart);
    }

    const totalPrice = choices.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className='col-12 bg-light'>
      <div className='row'>
        <NavLink to="/">Login Page</NavLink> 
        <NavLink to="/foodlist">Food List</NavLink> 
        {allChoices}
        <button 
        type="button" 
        className="center-button btn btn-success btn-width-50"
        >$ {totalPrice}
        <br/>
        Checkout</button>
      </div>
    </div>
  )
}

export default Foodchoice