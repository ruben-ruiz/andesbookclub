import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import CommunityMetrics from './components/CommunityMetrics';
import Navbar from './components/Navbar';

import BookInfo from './components/bookInfo';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/metrics">
          <CommunityMetrics />
        </Route>
        <Route path="/bookInfo">
          <BookInfo />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </>
  );
}

export default App;
