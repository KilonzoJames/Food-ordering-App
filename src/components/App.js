import '../stylesheet/App.css';
import Login from './Login';
import Foodlist from './Foodlist';
import Foodchoice from './Foodchoice';
import { Route, Routes } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

function App() {
  const [food, setFood] = useState()
useEffect(()=>{
  const url=" http://localhost:4000/food";
  fetch(url).then(res=>res.json().then(data=>setFood(data)))}
  ,[])

  return (
    <Routes>
      <Route exact path='/' element={<Login/>}/>     
      <Route  path='/foodlist' element={<Foodlist food={food} setFood={setFood} />}/> 
      <Route  path='/foodchoice' element={<Foodchoice/>}/> 
    </Routes>
  );
}

export default App;
