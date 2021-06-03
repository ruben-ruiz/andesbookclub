import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../util/refreshToken';

const clientId = '836968365888-6tdvb8sji32an3pf99uds3v88p1g47sm.apps.googleusercontent.com';

function Login( { checkLogin, setUserImage }) {
  let history = useHistory();

  const onSuccess = (res) => {
    axios({
      method: 'POST',
      url: '/users/login',
      data: { tokenId: res.tokenId },
    }).then((res) => {
      checkLogin();
      history.push('/dashboard');
    }).catch((err) => {
      console.log(err);
    });
    refreshTokenSetup(res);
  };

  const inStyle = {
    width: '4rem',
    outline: 'none',
    color: 'white',
    background: 'none',
    fontSize: '1.5rem',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <>
      <GoogleLogin
        className="google-auth"
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={err => (console.log('fail', err))}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <button onClick={renderProps.onClick} style={inStyle}>Login</button>
        )}
        isSignedIn={true}
        />
    </>
  );
}

export default Login;
