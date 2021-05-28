import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Search from './Search';
import Landing from './components/Landing';
import CommunityMetrics from './components/CommunityMetrics';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import BookInfo from './components/bookInfo';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/metrics">
        <CommunityMetrics />
      </Route>
      <Route path="/bookInfo/:bookid" component={BookInfo} />
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </>
);

export default App;
