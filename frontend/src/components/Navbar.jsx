
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Navbar.css";


const Navbar = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate('/login');
  };

  return (
    <nav className='mynav'>
      <ul className='myul'>
        <li><Link to="/">Home</Link></li>
        {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
        {!isLoggedIn && <li><Link to="/register">Register</Link></li>}
        <li><Link to="/contact">Contact</Link></li>
        {isLoggedIn && <li><Link to="/welcome">Welcome</Link></li>}
        {isLoggedIn && <li><button onClick={handleLogout} style={{ backgroundColor:'red'}} >Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Navbar;


