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
import Login from '../Login';
import Logout from '../Logout';

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
    <Navbar className="nav-general" expand="md">
      <NavbarBrand href="/" className="navbar-general-brand">Ande&apos;s Bookclub</NavbarBrand>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <InputGroup>
            <Input type="text" placeholder="Search books..." name="search" onChange={(e) => setSearch(e.target.value)} />
            <InputGroupAddon addonType="append">
              <Button type="submit">Search</Button>
            </InputGroupAddon>
          </InputGroup>
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
