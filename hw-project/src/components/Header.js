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
          <div className="start-here"><li>
          <Link to="/Calendar" className="start-button">
            Start Here.
          </Link>
          </li></div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;