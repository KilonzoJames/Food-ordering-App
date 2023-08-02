import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length >= 4 && password.length >= 4) {
      console.log('Logged in as:', username);
    } else {
      setError('Username and password must be at least 4 characters long.');
    }
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
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <NavLink to="/foodlist">Submit</NavLink>
        </button>
      </form>
    </div>
  </>
  );
};

export default Login;
