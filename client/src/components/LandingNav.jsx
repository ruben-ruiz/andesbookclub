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
import Login from '../Login';
import Logout from '../Logout';
import Search from '../Search';

function LandingNav() {
  return (
    <Navbar className="nav-general" fixed="top">
      <div className="nav-general-content">
        <NavbarBrand className="nav-general-brand">Andes Bookclub</NavbarBrand>
        <Search />
        <div className="nav-option">
          <a className="nav-option-item">About</a>
          <a className="nav-option-item">Mission</a>
          <Login />
        </div>
      </div>
    </Navbar>
  );
}

export default LandingNav;

// import React from ‘react’;
// import Login from ‘../Login.jsx’;
// import Logout from ‘../Logout.jsx’;
// function LandingNav() {
//   return (
//     <div className=“nav landing”>
//       <h2 className=“nav-logo”>Andes Bookclub</h2>
//       <form onSubmit={() => { }}>
//         <input type=“text” placeholder=“Search” />
//       </form>
//       <a className=“nav-option”>About</a>
//       <a className=“nav-option”>Mission</a><br/>
//       <Login />
//       <Logout />
//     </div>
//   );
// }
// export default LandingNav;
