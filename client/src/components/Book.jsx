import React from 'react';
import {
  Card, CardImg,
} from 'reactstrap';
import BookStatus from '../widgets/BookStatus';

const Book = ({ smallThumbnail, index, deleteBook }) => (
  <>
    <Card>
      <CardImg top width="100%" src={smallThumbnail} alt="Card image cap" />
      <BookStatus className="books-list-dropdown" index={index} deleteBook={deleteBook} />
    </Card>
  </>

);

export default Book;
