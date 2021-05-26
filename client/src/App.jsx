import React from 'react';
// import Login from './Login';
// import Logout from './Logout';
import Landing from './components/Landing';
import QuizModal from './components/QuizModal';

// import axios from 'axios';
// import BookInfo from './components/bookInfo';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Landing /> */}
        <QuizModal />
      </div>
    );
  }
}

export default App;
