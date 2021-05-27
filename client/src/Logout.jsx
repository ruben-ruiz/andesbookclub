import React from 'react';
import { GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const clientId = '679046458711-521g8lfg0gq7gqrlubug21l6ekdbiank.apps.googleusercontent.com';

function Logout( { checkLogin } ) {
  let history = useHistory();

  const onSuccess = () => {
    axios.delete('/users/logout')
      .then((res) => {
        console.log(res.data);
        checkLogin();
        // alert(`${res.data} ✌`);
      });
    history.push('/');
    // window.location.reload();
  };

  return (
    <>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </>
  );
}

export default Logout;