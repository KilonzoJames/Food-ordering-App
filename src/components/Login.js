import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = ({username, setUsername}) => {
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setUsername(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length >= 4 && password.length >= 4) {
      // Save the username and perform any action here
      console.log('Form submitted!');
      // Redirect to the homepage
      navigate('/homepage');
        alert(username !== ""
      ? `${username}, Welcome to the Food Court!`
      : "Welcome to the Food Court!"
    );
    } else {
      console.log('Username and password should have at least 4 characters.');
  }
  };

  return (
    <div className="login-page">
      <h1 id="login-text" style={{ color: "black" }}>WELCOME TO NEXTGEN FOOD COURT</h1>
      <div className="login-box">
        <h2 style={{ color: "white" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Username"
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <label>Password</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <NavLink to="/homepage">Submit</NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
