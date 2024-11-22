import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="navbar-links">
          <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
          <div><Link to="/contact">Contact</Link></div>
          <input type="search" />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;