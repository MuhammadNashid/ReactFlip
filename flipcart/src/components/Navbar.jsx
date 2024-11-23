import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = ({setSearch}) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-links">
          <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
          <div><Link to="/contact">Contact</Link></div>
          <input type="search" placeholder='Search Here' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;