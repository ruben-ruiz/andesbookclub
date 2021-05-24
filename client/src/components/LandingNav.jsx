import React from 'react';

function LandingNav() {
  return (
    <div className="nav landing">
      <h2 className="nav-logo">Andes Bookclub</h2>
      <form onSubmit={() => { }}>
        <input type="text" placeholder="Search" />
      </form>
      <a className="nav-option">About</a>
      <a className="nav-option">Mission</a>
      <button type="button" className="nav-signin">Sign In</button>
    </div>
  );
}

export default LandingNav;
