import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizzesList from './QuizzesList';
import ReadingList from './ReadingList';
import LineGraph from '../LineGraph';
import CompletedList from './CompletedList';
import QuizModal from './QuizModal';

const Dashboard = () => {
  const [books, updateBooks] = useState([]);
  const [quizzes, updateQuizzes] = useState([]);
  const [modal, toggleModal] = useState(<></>);

  const getBooks = () => {
    axios.get('/users/books')
      .then((res) => {
        console.log('users books: ', res.data);
        updateBooks(res.data);
      }).catch((err) => {
        console.log('error: ', err);
      });
  };

  const getQuizzes = () => {
    axios.get('/users/quizzes')
      .then((res) => {
        console.log('users quizzes: ', res.data);
        updateQuizzes(res.data);
      }).catch((err) => {
        console.log('error: ', err);
      });
  };
  function closeQuiz(jsx) {
    toggleModal(jsx);
  }

  function toggleQuiz(book) {
    console.log(book);
    toggleModal(<QuizModal bookId={book.bookid} toggleQuiz={closeQuiz} />);
  }

  useEffect(() => {
    getBooks();
    getQuizzes();
  }, []);

  return (
    <div className="dashboard">
      <QuizzesList quizzes={quizzes} updateQuizzes={updateQuizzes} toggleQuiz={toggleQuiz} />
      {modal}
      <LineGraph />
      <ReadingList
        getBooks={getBooks}
        readingBooks={books.filter((book) => !book.iscompleted)}
        books={books}
      />
      <CompletedList
        getBooks={getBooks}
        completedBooks={books.filter((book) => book.iscompleted)}
        books={books}
      />
    </div>
  );
};

export default Dashboard;
