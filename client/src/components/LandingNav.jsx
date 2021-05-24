import React from 'react';
import Login from '../Login.jsx';
import Logout from '../Logout.jsx';

function LandingNav() {
  return (
    <div className="nav landing">
      <h2 className="nav-logo">Andes Bookclub</h2>
      <form onSubmit={() => { }}>
        <input type="text" placeholder="Search" />
      </form>
      <a className="nav-option">About</a>
      <a className="nav-option">Mission</a><br/>
      <Login />
      <Logout />
    </div>
  );
}

export default LandingNav;
