import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  function handleSubmit(event) {
    console.log("object");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              <NavLink to="/foodlist" className="nav-link text-white">Submit</NavLink>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
