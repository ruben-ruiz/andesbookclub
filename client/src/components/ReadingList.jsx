import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import Carousel from '../widgets/Carousel';

const ReadingList = ({ readingBooks, updateBooks, books }) => (
  <div className="reading-list">
    <h2>Currently Reading</h2>
    {readingBooks.length > 0
      ? (
        <Carousel className="reading-section">
          { readingBooks.map((book, index) => (
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

export default ReadingList;
