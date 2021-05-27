import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Login from '../Login.jsx';
import Logout from '../Logout.jsx';

function Navigation() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const checkLogin = () => {
    axios.get('/isLoggedIn')
    .then(res => {
      console.log('checkedLogginData: ', res.data);
      setLoggedIn(res.data);
    })
    .catch(err => console.log(err));
  };
  useEffect(() => {
    checkLogin();
  }, []);

  // const che = () => {
  //   checkLogin();
  // };
  console.log('isLoggedIn: ', isLoggedIn);
  return (
    <Navbar className="nav-general" expand="md">
      <NavbarBrand href="/" className="navbar-general-brand">Ande&apos;s Bookclub</NavbarBrand>
      <form onSubmit={() => { }} className="nav-general-form">
        <input type="text" placeholder="Search" className="nav-general-form-input" />
      </form>
      <Nav>
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
