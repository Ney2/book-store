import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Header.css';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-white header-container">
    <h1 className="bg-white header">BookStore CMS</h1>
    <nav className="bg-white nav-bar">
      <div className="bg-white nav-conatiner">
        <NavLink className="bg-white nav-link active" to="/">BOOKS</NavLink>
        <NavLink className="bg-white nav-link" to="/catagories">CATAGORIES</NavLink>
      </div>
      <FaUser className="userIcon" />
    </nav>
  </header>
);

export default Header;
