import React from 'react';

const NavBar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul className="navbar-menu">
      <li><a href="/">Home</a></li>
      <li><a href="/App">Calculator</a></li>
      <li><a href="/Quotes">Quotes</a></li>
    </ul>
  </nav>
);

export default NavBar;
