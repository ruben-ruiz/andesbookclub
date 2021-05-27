import React from 'react';
import { useState } from 'react';
import QuizzesList from './QuizzesList';
import ReadingList from './ReadingList';
import CompletedList from './CompletedList';
import QuizModal from './QuizModal';

function Dashboard() {
  const [modal, toggleModal] = useState(<></>);

  function closeQuiz(jsx) {
    toggleModal(jsx);
  }

  function toggleQuiz(book) {
    console.log(book);
    toggleModal(<QuizModal bookId={book.bookid} toggleQuiz={closeQuiz} />);
  }

  return (
    <div className="dashboard">
      {modal}
      <QuizzesList toggleQuiz={toggleQuiz} />
      <ReadingList />
      <CompletedList />
    </div>
  );
}

export default Dashboard;
