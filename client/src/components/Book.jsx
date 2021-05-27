import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, CardImg,
} from 'reactstrap';
import axios from 'axios';
import BookStatus from '../widgets/BookStatus';

const Book = ({ book, index, updateBooks, books }) => {
  const history = useHistory();

  const deleteBook = (index) => {
    const newBooks = readingBooks.slice();
    axios.delete(`/users/books/${readingBooks[index].bookId}`)
      .then((res)=> {
        console.log('book deleted', res);
      }).catch((err) => {
        console.log('error deleting book from userbooks', err);
      });
    newBooks.splice(index, 1);
    updateBooks(newBooks);
  };

  return (
    <>
      <Card onClick={() => { history.push(`/bookInfo/${book.bookid}`); }}>
        <CardImg top width="100%" src={book.thumbnail} alt="Card image cap" />
        <BookStatus className="books-list-dropdown" index={index} updateBooks={updateBooks} />
      </Card>
    </>
  );
};

export default Book;
