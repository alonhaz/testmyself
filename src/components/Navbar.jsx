// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/home" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#f0f0f0' },
  link: { textDecoration: 'none', color: 'black', fontSize: '18px' },
  button: { padding: '5px 10px', fontSize: '16px' },
};

export default Navbar;
