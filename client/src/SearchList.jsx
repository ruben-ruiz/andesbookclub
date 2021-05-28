import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchList = (props) => {
  const data = props;
  const books = data.items;
  const history = useHistory();

  return (
    <div className="search-result">
      {books.map((book) => (
        <div className="book-each" key={book.id} onClick={() => { history.push(`/bookInfo/${book.id}`); }}>
          {
          book.volumeInfo.imageLinks
            ? <img className="book-image" src={book.volumeInfo.imageLinks.thumbnail} />
            : <img className="book-imgae" />
          }
          <div className="book-text-info">
            <div className="book-title">{book.volumeInfo.title}</div>
            <div className="book-author">{book.volumeInfo.authors}</div>
            <div className="book-published">{book.volumeInfo.publishedDate.slice(0, 4)}</div>
            <div className="book-category">Category: {book.volumeInfo.categories}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
