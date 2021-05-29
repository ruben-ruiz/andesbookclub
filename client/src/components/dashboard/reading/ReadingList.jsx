import React from 'react';
import Book from '../../../widgets/Book';
import Carousel from '../../../widgets/Carousel';

const ReadingList = ({ readingBooks, getBooks }) => (
  <div className="reading-list">
    <div id="dashboard-head">Currently Reading</div>
    {readingBooks.length > 0
      ? (
        <Carousel className="reading-section">
          { readingBooks.map((book, index) => (
            <Book
              status="Reading"
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

export default ReadingList;
