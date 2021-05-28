import React, { useState, useEffect } from 'react';
import Book from './Book';
import Carousel from '../widgets/Carousel';

const CompletedList = ({ completedBooks, updateBooks, books }) => (
  <div className="completed-list">
    <h2>Completed Reading</h2>
    {completedBooks.length > 0
      ? (
        <Carousel className="completed-section">
          { completedBooks.map((book, index) => (
            <Book
              key={index}
              book={book}
              index={index}
              updateBooks={updateBooks}
            />
          ))}
        </Carousel>
      )
      : <></>}
  </div>
);

export default CompletedList;
