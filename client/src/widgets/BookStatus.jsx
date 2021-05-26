import React, { useState } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

const BookStatus = ({ className }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className={className}>
      <DropdownToggle caret>
        Add to Reading
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Add to Reading</DropdownItem>
        <DropdownItem>Currently Reading</DropdownItem>
        <DropdownItem>Completed</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default BookStatus;
