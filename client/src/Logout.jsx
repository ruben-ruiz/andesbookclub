import React from 'react';
import { GoogleLogout } from 'react-google-login';
import axios from 'axios';

const clientId = '679046458711-521g8lfg0gq7gqrlubug21l6ekdbiank.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    axios.delete('/users/logout')
      .then((res) => {
        console.log(res.data);
        alert(`${res.data} ✌`);
      });
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;