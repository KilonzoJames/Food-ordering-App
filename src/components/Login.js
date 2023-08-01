import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  function handleSubmit(event) {
    console.log("object");
  }

  return (
    <>
      <h1>Welcome to Nextgen Food Court</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
              <form style={{ minWidth: '500px', maxWidth: '800px', }}>
                <div className="mb-3">
                  <label 
                  htmlFor="name" 
                  className="form-label">
                  Username
                  </label>
                  <input 
                  placeholder="Enter username"
                  type="name" 
                  className="form-control"
                  />
                </div>
                
                <div className="mb-3">
                  <label 
                  htmlFor="exampleInputPassword1" 
                  className="form-label">
                  Password
                  </label>
                  <input 
                  type="password" 
                  placeholder="Enter password"
                  className="form-control"
                  />
                </div>

                <div className="mb-3 form-check">
                  <input 
                  type="checkbox" 
                  className="form-check-input" />
                  <label 
                  className="form-check-label" 
                  htmlFor="exampleCheck1">
                  Check me out
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}>
                  <NavLink to="/foodlist" className="nav-link text-white">Submit</NavLink>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;