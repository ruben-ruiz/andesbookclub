import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, CardImg,
} from 'reactstrap';
import BookStatus from '../widgets/BookStatus';

const Book = ({
  book, index, getBooks, books, status,
}) => {
  const history = useHistory();

  return (
    <>
      <Card>
        <CardImg top width="100%" src={book.thumbnail} alt="Card image cap" onClick={() => { history.push(`/bookInfo/${book.bookid}`); }} />
        <BookStatus status={status} className="books-list-dropdown" book={book} getBooks={getBooks} />
      </Card>
    </>
  );
};

export default Book;
