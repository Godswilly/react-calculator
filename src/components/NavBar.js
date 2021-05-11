import React from 'react';

const NavBar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul className="navbar-menu">
      <li>Home</li>
      <li>App</li>
      <li>Quotes</li>
      <li><a href="/">Home</a></li>
      <li><a href="/App">App</a></li>
      <li><a href="/Quotes">Quotes</a></li>
    </ul>
  </nav>
);

export default NavBar;
