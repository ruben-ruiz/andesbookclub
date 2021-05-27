import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  Input,
  Form,
  FormGroup,
  Button,
} from 'reactstrap';
import Search from '../Search';
import Logout from '../Logout.jsx';
import Login from '../Login';

function Navigation() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [search, setSearch] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('book search result', search);
  };

  return (
    <Navbar expand="md">
      <NavbarBrand href="/" className="navbar-general-brand">Ande&apos;s Bookclub</NavbarBrand>
      <Form onSubmit={(e) => handleSubmit(e)} className="search-form">
        <FormGroup>
          <Search />
        </FormGroup>
      </Form>
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
