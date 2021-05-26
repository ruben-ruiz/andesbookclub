import React from 'react';
import Dashboard from './components/Dashboard';
// import Login from './Login';
// import Logout from './Logout';
import Landing from './components/Landing';

// import axios from 'axios';
// import BookInfo from './components/bookInfo';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Landing />
        <Dashboard />
      </>
    );
  }
}

export default App;
