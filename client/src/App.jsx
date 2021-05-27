import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
// import Login from './Login';
// import Logout from './Logout';

import Landing from './components/Landing';
import QuizModal from './components/QuizModal';
import CommunityMetrics from './components/CommunityMetrics';

import BookInfo from './components/bookInfo';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      // <Switch>
      //   <Route path="/dashboard">
      //     <Dashboard />
      //   </Route>
      //   <Route path="/metrics">
      //     <CommunityMetrics />
      //   </Route>
      //   <Route path="/book/:id/info">
      //     <BookInfo />
      //   </Route>
      //   <Route path="/">
      //     <Landing />
      //   </Route>
      // </Switch>
      <BookInfo />
    );
  }
}

export default App;
