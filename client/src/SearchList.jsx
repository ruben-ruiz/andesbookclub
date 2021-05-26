import React from 'react';

const SearchList = (props) => {
  const data = props;
  const books = data.items;

  return (
    <div id="search-result">
      {books.map((book) => (
        <div id="book-each" key={book.id}>
          {
          book.volumeInfo.imageLinks
            ? <img id="book-image" src={book.volumeInfo.imageLinks.thumbnail} />
            : <img id="book-imgae" />
          }
          <div id="book-title">{book.volumeInfo.title}</div>
          <div id="book-author">{book.volumeInfo.authors}</div>
          <div id="book-author">{book.volumeInfo.publishedDate}</div>
          <div id="book-category">{book.volumeInfo.categories}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
