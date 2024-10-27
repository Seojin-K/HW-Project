import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Calendar">Calendar</Link></li>
          <li><Link to="/Features">Features</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;