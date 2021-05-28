import React from 'react';
import QuizzesList from './QuizzesList';
import ReadingList from './ReadingList';
import LineGraph from '../LineGraph';
import CompletedList from './CompletedList';

const Dashboard = () => (
  <div className="dashboard">
    <QuizzesList />
    <LineGraph />
    <ReadingList />
    <CompletedList />
  </div>
);

export default Dashboard;
