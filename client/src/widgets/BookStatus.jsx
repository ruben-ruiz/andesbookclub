import React, { useState } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import axios from 'axios';

const BookStatus = ({ className, getBooks = () => { }, book, status, setCompletedReading = () => { } }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  book.bookId = book.bookId || book.bookid;
  const deleteBook = (book) => {
    axios.delete(`/users/books/remove/${book.bookId}`)
      .then((res) => {
        console.log('book deleted', res);
        getBooks();
      }).catch((err) => {
        console.log('error deleting book from userbooks', err);
      });
  };

  const handleChange = (val) => {
    if (status === 'available') {
      if (val === 'Reading') {
        axios.post(`/users/books/addReadingBook/${book.bookId}`)
          .then(() => {
            setCompletedReading(false);
          }).catch((err) => {
            console.log(err);
          });
      } else {
        axios.post(`/users/books/addCompletedBook/${book.bookId}`)
          .then(() => {
            setCompletedReading(true);
          }).catch((err) => {
            console.log(err);
          });
      }
    } else {
      let z = 0;
      if (val === 'Remove') {
        deleteBook(book);
        setCompletedReading('available');
      } else if (val === 'Reading') {
        axios.put(`/users/books/setReading/${book.bookId}`)
          .then((res) => {
            console.log('book added to reading list', res.data);
            setCompletedReading(false);
            getBooks();
          })
          .catch((error) => {
            console.log('there was an error in Reading put: ', error);
          });
      } else if (val === 'Completed') {
        axios.put(`/users/books/setCompleted/${book.bookId}`)
          .then((res) => {
            console.log('book added to completed list', res.data);
            setCompletedReading(true);
            getBooks();
          })
          .catch((error) => {
            console.log('there was an error in Completed put: ', error);
          });
      }
    }
  };
  console.log('status: ', status);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className={className}>
      <DropdownToggle caret>
        {status === 'available' ? 'Add to Reading' : status}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => handleChange('Reading')}>Reading</DropdownItem>
        <DropdownItem onClick={() => handleChange('Completed')}>Completed</DropdownItem>
        {status !== 'available' ? <DropdownItem onClick={() => handleChange('Remove')}>Delete</DropdownItem> : null}
      </DropdownMenu>
    </Dropdown>
  );
};

export default BookStatus;
