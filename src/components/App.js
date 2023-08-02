import '../stylesheet/App.css';
import Login from './Login';
import Foodlist from './Foodlist';
import Foodchoice from './Foodchoice';
import HomePage from './HomePage';
import OrderList from './OrderList';
import { Route, Routes } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

function App() {
  const [foods, setFood] = useState([])
  const [orders, setOrders] = useState([])
  const [choices, setChoices]=useState([])
  const [restaurants, setRestaurants] = useState([]);

useEffect(()=>{
  const url=" http://localhost:4000/food";
  fetch(url).then(res=>res.json().then(data=>setFood(data)))}
  ,[])
useEffect(()=>{
  const url=" http://localhost:4000/orders";
  fetch(url).then(res=>res.json().then(data=>setOrders(data)))}
  ,[])
useEffect(() => {
  fetch('http://localhost:4000/restaurant')
  .then((response) => response.json())
  .then((data) => {
    setRestaurants(data);
      })
  .catch((error) => {
    console.error('Error fetching restaurants:', error);
  });
  }, []);

  return (
    <Routes>
      <Route 
      exact path='/' 
      element={<Login/>}/>     
      <Route  
      path='/foodlist' 
      element={<Foodlist foods={foods} choices={choices} setChoices={setChoices} />}/> 
      <Route  
      path='/foodchoice' 
      element={<Foodchoice choices={choices} setChoices={setChoices} />}/> 
       <Route  
      path='/orders' 
      element={<OrderList orders={orders} setOrders={setOrders} restaurants={restaurants}/>}/> 
      <Route path="/homepage" 
      element={<HomePage restaurants={restaurants} setRestaurants={setRestaurants}/>} />
    </Routes>
  );
}

export default App;
