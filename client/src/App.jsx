import React from 'react';
import ReadingList from './components/ReadingList';
import Search from './Search';

// import Login from './Login';
// import Logout from './Logout';
import axios from 'axios';

import Landing from './components/Landing';

import BookInfo from './components/bookInfo';

// eslint-disable-next-line react/prefer-stateless-function

const App = () => (
  <div>
    <Search />
    <Landing />
  </div>
);

export default App;
