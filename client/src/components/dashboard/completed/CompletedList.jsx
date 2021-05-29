import React from 'react';
import Book from '../../../widgets/Book';
import Carousel from '../../../widgets/Carousel';

const CompletedList = ({ completedBooks, getBooks }) => (
  <div className="completed-list">
    <div id="dashboard-head">Completed Reading</div>
    {completedBooks.length > 0
      ? (
        <Carousel className="completed-section">
          { completedBooks.map((book, index) => (
            <Book
              status="Completed"
              key={index}
              book={book}
              index={index}
              getBooks={getBooks}
            />
          ))}
        </Carousel>
      )
      : <></>}
  </div>
);

export default CompletedList;
