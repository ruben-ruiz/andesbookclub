import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Search from './components/search/Search';
import Landing from './components/landing/Landing';
import CommunityMetrics from './components/metrics/CommunityMetrics';
import Navbar from './widgets/Navbar';
import Footer from './widgets/Footer';
import BookInfo from './components/info/bookInfo';

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
    <Footer />
  </>
);

export default App;
