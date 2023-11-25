import '../stylesheet/App.css';
import Login from './Login';
import Foodlist from './Foodlist';
import Foodchoice from './Foodchoice';
import HomePage from './HomePage';
import OrderList from './OrderList';
import UserProfile from './UserProfile';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [foods, setFood] = useState([]);
  const [orders, setOrders] = useState([]);
  const [choices, setChoices] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const url = "https://food-app-server-nw3w.onrender.com/fooditems";
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched food data:", data); // Check the data being fetched
        setFood(data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };
    fetchFoodData();
  }, []);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const url = "https://food-app-server-nw3w.onrender.com/orders";
        const response = await fetch(url);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };
    fetchOrderData();
  }, []);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const url = "https://food-app-server-nw3w.onrender.com/restaurants";
        const response = await fetch(url);
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };
    fetchRestaurantData();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Login username={username} setUsername={setUsername} />} />
      <Route path="/userprofile" element={<UserProfile username={username}/>} /> 
      <Route path="/foodlist/:id" element={<Foodlist foods={foods} restaurants={restaurants} choices={choices} setChoices={setChoices} quantities={quantities} setQuantities={setQuantities} />} />
      <Route path="/foodchoice" element={<Foodchoice username={username} choices={choices} setChoices={setChoices} quantities={quantities} setQuantities={setQuantities} />} />
      <Route path="/orders" element={<OrderList orders={orders} setOrders={setOrders} restaurants={restaurants} />} />
      <Route path="/homepage" element={<HomePage username={username} restaurants={restaurants} setRestaurants={setRestaurants} />} />
    </Routes>
  );
}

export default App;
