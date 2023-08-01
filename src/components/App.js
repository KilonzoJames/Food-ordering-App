import '../stylesheet/App.css';
import Login from './Login';
import Foodlist from './Foodlist';
import Foodchoice from './Foodchoice';
import OrderList from './OrderList';
import { Route, Routes } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

function App() {
  const [foods, setFood] = useState([])
  const [choices, setChoices]=useState([])
useEffect(()=>{
  const url=" http://localhost:4000/food";
  fetch(url).then(res=>res.json().then(data=>setFood(data)))}
  ,[])

  return (
    <Routes>
      <Route 
      exact path='/' 
      element={<Login/>}/>     
      <Route  
      path='/foodlist' 
      element={<Foodlist foods={foods} setFood={setFood} />}/> 
      <Route  
      path='/foodchoice' 
      element={<Foodchoice choices={choices} setChoices={setChoices} />}/> 
       <Route  
      path='/orders' 
      element={<OrderList/>}/> 
    </Routes>
  );
}

export default App;
