import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    // Navigation for the app. react-router is used to determine which page to show
    return (
      <nav className="navbar">
        <Link to="/">
          <i className="bi bi-collection-play"/>
          Player
        </Link>
        <Link to="/upload">
          <i className="bi bi-upload"/>
          Upload
        </Link>
        <Link to="/settings">
          <i className="bi bi-gear"/>
          Settings
        </Link>
      </nav>
    );
}

export default Navigation;
