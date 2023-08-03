import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = ({username, setUsername}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleChange(event){
    const { value } = event.target;
    setUsername(value);
    console.log(value);  
}

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length >= 4 && password.length >= 4) {
      console.log('Logged in as:', username);
    } else {
      setError('Username and password must be at least 4 characters long.');
    };
  };

  return (
    <>
    <h1 id="login-text">Welcome to Nextgen Food Court</h1>
    <div className="login-box">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={username.name}
            required
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={password}
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
