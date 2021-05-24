import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Landing from './components/Landing';

// import axios from 'axios';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Landing />
      </div>
    );
  }
}

export default App;
