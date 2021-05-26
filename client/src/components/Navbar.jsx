import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function Navigation() {
  return (
    <div className="nav">
      <Navbar className="nav-general" fixed="top">
        <div className="nav-general-content">
          <NavbarBrand className="navbar-general-brand">Ande&apos;s Bookclub</NavbarBrand>
          <form onSubmit={() => { }} className="nav-general-form">
            <input type="text" placeholder="Search" className="nav-general-form-input" />
          </form>
          <div className="nav-option">
            <a className="nav-option-item">Dashboard</a>
            <a className="nav-option-item">Metrics</a>
            {/* <Button className="nav-option-item">Sign In</Button> */}
          </div>
        </div>
      </Navbar>
      {/* <h2 className="nav-logo">Andes Bookclub</h2>
      <form onSubmit={() => { }}>
        <input type="text" placeholder="Search" />
      </form>
      <a className="nav-option">Dashboard</a>
      <a className="nav-option">Metrics</a>
      <a href="#"><img src="https://img.icons8.com/windows/64/000000/user-male-circle.png" /></a>
      <button type="button" className="nav-signin">Sign In</button>
      <button type="button" className="nav-getstarted">Get Started</button> */}
    </div>
  );
}

export default Navigation;
