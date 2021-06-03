import React, { useState } from 'react';
import { useGoogleLogout } from 'react-google-login';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const clientId = '836968365888-6tdvb8sji32an3pf99uds3v88p1g47sm.apps.googleusercontent.com';

function Logout({ checkLogin, userImage }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  let history = useHistory();

  const onSuccess = () => {
    axios.delete('/users/logout')
      .then((res) => {
        return checkLogin();
      }).then(() => {
        history.push('/');
      });
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess: onSuccess,
  });

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        <img className='profileImage' src={userImage} alt="Profile Image" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={signOut}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Logout;
