import React from 'react';
import QuizzesList from './QuizzesList';
import ReadingList from './ReadingList';
import CompletedList from './CompletedList';

const Dashboard = () => (
  <div className="dashboard">
    <QuizzesList />
    <ReadingList />
    <CompletedList />
  </div>
);

export default Dashboard;
