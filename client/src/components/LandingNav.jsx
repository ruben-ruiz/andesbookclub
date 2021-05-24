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
  NavbarText,
  Button
} from 'reactstrap';

function LandingNav() {
  return (
    <Navbar className="nav-general" fixed="top">
      <div className="nav-general-content">
        <NavbarBrand className="nav-general-brand">Ande&apos;s Bookclub</NavbarBrand>
        <form onSubmit={() => { }} className="nav-general-form">
          <input type="text" placeholder="Search" className="nav-general-form-input" />
        </form>
        <div className="nav-option">
          <a className="nav-option-item">About</a>
          <a className="nav-option-item">Mission</a>
          <Button className="nav-option-signin">Sign In</Button>
        </div>
      </div>
    </Navbar>
  );
}

export default LandingNav;
