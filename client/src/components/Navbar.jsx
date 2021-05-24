import React from 'react';

function Navbar() {
  return (
    <div className="nav">
      <h2 className="nav-logo">Andes Bookclub</h2>
      <form onSubmit={() => { }}>
        <input type="text" placeholder="Search" />
      </form>
      <a className="nav-option">Dashboard</a>
      <a className="nav-option">Metrics</a>
      <a href="#"><img src="https://img.icons8.com/windows/64/000000/user-male-circle.png" /></a>
      <button type="button" className="nav-signin">Sign In</button>
      <button type="button" className="nav-getstarted">Get Started</button>
    </div>
  );
}

export default Navbar;
