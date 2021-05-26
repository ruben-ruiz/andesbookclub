import React, {useState} from 'react';
// import Login from './Login';
// import Logout from './Logout';
import axios from 'axios';

import Landing from './components/Landing';

import BookInfo from './components/bookInfo';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => {
  const [isclick, setClick] = useState(false);

  return (
    <div onClick={() => {
      console.log('click');
      axios.get('/click')
        .then((res) => {
          console.log(res.data);
        });
      setClick(true);
    }}
    >
      <Landing />
      { isclick ? <BookInfo /> : null}
    </div>
  );
}

export default App;
