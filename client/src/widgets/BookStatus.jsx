import React, { useState } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

const BookStatus = ({ className, deleteBook, index }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [status, setStatus] = useState('Available');

  const handleChange = (val) => {
    if (val === 'Remove') {
      deleteBook(index);
    } else {
      setStatus(val);
    }
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className={className}>
      <DropdownToggle caret>
        {status === 'Available' ? 'Add to Reading' : status}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => handleChange('Reading')}>Reading</DropdownItem>
        <DropdownItem onClick={() => handleChange('Completed')}>Completed</DropdownItem>
        <DropdownItem onClick={() => handleChange('Remove')}>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default BookStatus;
