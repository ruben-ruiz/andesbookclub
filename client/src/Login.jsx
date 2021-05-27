import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './util/refreshToken';

const clientId = '679046458711-521g8lfg0gq7gqrlubug21l6ekdbiank.apps.googleusercontent.com';

function Login( { checkLogin }) {
  let history = useHistory();

  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    axios({
      method: 'POST',
      url: '/users/login',
      data: { tokenId: res.tokenId },
    }).then((res) => {
      checkLogin();
      console.log('login response', res);
      history.push('/dashboard');
    }).catch((err) => {
      console.log(err);
    });
    refreshTokenSetup(res);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={err => (console.log('fail', err))}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
        />
    </>
  );
}

export default Login;
