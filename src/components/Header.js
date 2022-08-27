import React from 'react';
import './CSS/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header-container">
    <h1 className="title">BookStore CMS</h1>
    <nav className="nav-bar">
      <div className="nav-conatiner">
        <NavLink className="nav-link" to="/">Books</NavLink>
        <NavLink className="nav-link" to="/catagories">Catagories</NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
