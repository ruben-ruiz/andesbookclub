import React from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './util/refreshToken';

const clientId = '679046458711-521g8lfg0gq7gqrlubug21l6ekdbiank.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);

    axios({
      method: 'POST',
      url: '/users',
      data: { tokenId: res.tokenId },
    }).then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    refreshTokenSetup(res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={err => (console.log('fail', err))}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
