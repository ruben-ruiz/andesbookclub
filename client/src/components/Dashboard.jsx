import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizzesList from './QuizzesList';
import ReadingList from './ReadingList';
import CompletedList from './CompletedList';

const Dashboard = () => {
  const [books, updateBooks] = useState([]);

  const getBooks = () => {
    axios.get('/users/books')
      .then((res) => {
        console.log('users books: ', res.data);
        updateBooks(res.data);
      }).catch((err) => {
        console.log('error: ', err);
      });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="dashboard">
      <QuizzesList />
      <ReadingList
        updateBooks={updateBooks}
        readingBooks={books.filter((book) => !book.iscompleted)}
        books={books}
      />
      <CompletedList
        updateBooks={updateBooks}
        completedBooks={books.filter((book) => book.iscompleted)}
        books={books}
      />
    </div>
  );
};

export default Dashboard;
