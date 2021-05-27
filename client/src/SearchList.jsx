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
            ? <img className="book-image" src={book.volumeInfo.imageLinks.thumbnail} />
            : <img className="book-imgae" />
          }
          <div className="book-title">{book.volumeInfo.title}</div>
          <div className="book-author">{book.volumeInfo.authors}</div>
          <div className="book-author">{book.volumeInfo.publishedDate}</div>
          <div className="book-category">{book.volumeInfo.categories}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
