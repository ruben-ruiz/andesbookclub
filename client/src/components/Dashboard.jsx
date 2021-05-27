import React from 'react';
import ReadingList from './ReadingList';
import CompletedList from './CompletedList';

const Dashboard = () => (
  <div className="dashboard">
    <ReadingList />
    <CompletedList />
  </div>
);

export default Dashboard;
