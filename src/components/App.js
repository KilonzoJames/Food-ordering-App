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
  const [quantities, setQuantities] = useState({});
  const [username, setUsername] = useState("");


useEffect(()=>{
  const url="https://my-json-server.typicode.com/KilonzoJames/Food-database/food";
  fetch(url).then(res=>res.json().then(data=>setFood(data)))}
  ,[])
useEffect(()=>{
  const url="https://my-json-server.typicode.com/KilonzoJames/Food-database/orders";
  fetch(url).then(res=>res.json().then(data=>setOrders(data)))}
  ,[])
useEffect(() => {
  fetch('https://my-json-server.typicode.com/KilonzoJames/Food-database/restaurant')
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
      <Route exact path="/" element={<Login username={username} setUsername={setUsername} />} />
      <Route path="/foodlist/:id" element={<Foodlist foods={foods} restaurants={restaurants} choices={choices} setChoices={setChoices} quantities={quantities} setQuantities={setQuantities} />} />
      <Route path="/foodchoice" element={<Foodchoice username={username} choices={choices} setChoices={setChoices} quantities={quantities} setQuantities={setQuantities} />} />
      <Route path="/orders" element={<OrderList orders={orders} setOrders={setOrders} restaurants={restaurants} />} />
      <Route path="/homepage" element={<HomePage username={username} restaurants={restaurants} setRestaurants={setRestaurants} />} />
    </Routes>
  );
}

export default App;
