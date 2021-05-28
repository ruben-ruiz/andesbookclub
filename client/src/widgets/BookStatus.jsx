import React, { useState } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import axios from 'axios';

const BookStatus = ({ className, getBooks, book, status }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const deleteBook = (book) => {
    axios.delete(`/users/books/${book.bookid}`)
      .then((res)=> {
        console.log('book deleted', res);
        getBooks();
      }).catch((err) => {
        console.log('error deleting book from userbooks', err);
      });
  };

  const handleChange = (val) => {
    if (val === 'Remove') {
      deleteBook(book);
    } else if (val === 'Reading' && status !== 'Reading') {
      axios.put(`/users/books/reading/${book.bookid}`)
        .then((res) => {
          console.log('book added to reading list', res.data);
        })
        .catch((error) => {
          console.log('there was an error in Reading put: ', error);
        });
    } else if (val === 'Completed' && status !== 'Completed') {
      axios.put(`/users/books/completed/${book.bookid}`)
        .then((res) => {
          console.log('book added to completed list', res.data);
        })
        .catch((error) => {
          console.log('there was an error in Completed put: ', error);
        });
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
        {status !== 'available' ? <DropdownItem onClick={() => handleChange('Remove')}>Delete</DropdownItem> : null }
      </DropdownMenu>
    </Dropdown>
  );
};

export default BookStatus;
