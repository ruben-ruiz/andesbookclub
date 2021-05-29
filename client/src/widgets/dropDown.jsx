import React, { useState } from 'react';
import {
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

const dropDown = () => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Status:
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Read Later</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Currently Reading</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Finished</DropdownItem>
        <DropdownItem divider />
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default dropDown;
