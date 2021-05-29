import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logout from './Logout';
import Login from './Login';
import logo from '../assets/img/logo.png';

function Navigation() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const checkLogin = () => {
    axios.get('/isLoggedIn')
      .then((res) => {
        setLoggedIn(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <Navbar expand="md">
      <div className="company">
        <img className="logo" src={logo} alt="mountain-logo" />
        <NavbarBrand href="/" className="navbar-general-brand">Ande&apos;s Bookclub</NavbarBrand>
      </div>
      <Nav>
        <NavItem>
          <NavLink href="/search">Search Books</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/metrics">Metrics</NavLink>
        </NavItem>
        { isLoggedIn ? <Logout checkLogin={checkLogin} /> : <Login checkLogin={checkLogin} /> }
      </Nav>
    </Navbar>
  );
}

export default Navigation;
