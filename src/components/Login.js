import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = ({username, setUsername}) => {
  const [password, setPassword] = useState('');

  function handleChange(event){
    const { value } = event.target;
    setUsername(value);
    console.log(value); 
}

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <h1 id="login-text">Welcome to Nextgen Food Court</h1>
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder='Enter your username'
            value={username.name}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={password}
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
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
  </>
  );
};

export default Login;
