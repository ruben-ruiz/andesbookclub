import React, {useState} from 'react';

import React from 'react';
import ReadingList from './components/ReadingList';

// import Login from './Login';
// import Logout from './Logout';
import axios from 'axios';

import Landing from './components/Landing';
import CommunityMetrics from './components/CommunityMetrics';

import BookInfo from './components/bookInfo';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <CommunityMetrics />
      </div>
    );
  }
}

export default App;
