import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './util/refreshToken';

const clientId = '679046458711-521g8lfg0gq7gqrlubug21l6ekdbiank.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj)

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('[Login failed] res:', res);
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={err => (console.log('fail', err))}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login;



