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
  const [userImage, setUserImage] = useState('');

  const checkLogin = () => (
    axios.get('/isLoggedIn')
      .then((res) => (
        res.data
      ))
      .then((loggedIn) => {
        if (loggedIn) {
          axios.get('/users/image')
            .then((res) => {
              const userImg = res.data[0] ? res.data[0].profilephoto : '';
              console.log('image is:', userImg);
              setLoggedIn(loggedIn);
              setUserImage(userImg);
            });
        } else {
          setLoggedIn(loggedIn);
          setUserImage('');
        }
      })
      .catch((err) => console.log(err))
  );

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
          <NavLink
            onClick={() => (
              !isLoggedIn ? alert('Please login first to see your dashboard 😊') : null
            )}
            href={isLoggedIn ? "/dashboard" : null}
          >
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/metrics">Metrics</NavLink>
        </NavItem>
        { isLoggedIn
          ? <Logout userImage={userImage} checkLogin={checkLogin} />
          : <Login checkLogin={checkLogin} />}
      </Nav>
    </Navbar>
  );
}

export default Navigation;
