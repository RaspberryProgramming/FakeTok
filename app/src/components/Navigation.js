import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <nav class="navbar">
        <Link to="/">
          <i class="bi bi-collection-play"/>
          Player
        </Link>
        <Link to="/upload">
          <i class="bi bi-upload"/>
          Settings
        </Link>
        <Link to="/settings">
          <i class="bi bi-gear"/>
          Settings
        </Link>
      </nav>
    );
}

export default Navigation;
