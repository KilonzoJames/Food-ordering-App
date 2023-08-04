import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSignOut,faHome,
  faUser,
  faPhone,
  faShoppingCart,
  faSignOutAlt, } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const UserProfile = ({ username }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container">
          <h1 style={{ color: "tan" }}>NextGen Food Court</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage">
                  <FontAwesomeIcon icon={faHome} className="me-1 d-lg-none" />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/userprofile">
                  <FontAwesomeIcon icon={faUser} className="me-1 d-lg-none" />
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/foodchoice">
                  <FontAwesomeIcon icon={faShoppingCart} className="me-1 d-lg-none" />
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link d-none d-lg-flex" href="tel:+123456789">
                  <FontAwesomeIcon icon={faPhone} className="me-1" />
                  Contact
                </a>
                <a
                  className="nav-link d-lg-none"
                  href="tel:+123456789"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FontAwesomeIcon icon={faPhone} className="me-1" />
                  <span>Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-1 d-lg-none" />
                  Log-Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <div className="container mt-5">
      <h1 className="text-center">User Profile</h1>

      {/* Image Section */}
      <div className="d-flex justify-content-center align-items-center my-4">
        <label htmlFor="imageInput" className="image-placeholder">
          <div className="card">
            {selectedImage ? (
              <img src={selectedImage} alt="Selected" className="img-thumbnail card-img-top" />
            ) : (
              <div className="card-body d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPlus} className="plus-icon" />
              </div>
            )}
          </div>
        </label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          className="d-none"
        />
      </div>

      {/* Username */}
      <div className="text-center mb-4">
        <h3>{username}</h3>
      </div>

      {/* Contact Section */}
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              className="form-control"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-center mt-4">
        <NavLink to="/orders">
        <button type="button" className="btn btn-primary me-2">Order History</button>
        </NavLink>
        <button type="button" className="btn btn-danger">
          <FontAwesomeIcon icon={faSignOut} className="me-1" />
          Logout
        </button>
      </div>
    </div>

    {/* Footer */}
    <footer className="bg-dark text-light text-center py-3 mt-5 fixed-bottom">
        &copy; {new Date().getFullYear()} Food Court. All rights reserved.
      </footer>
  </div>
  );
};

export default UserProfile;
