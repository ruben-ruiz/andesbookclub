import React from 'react';

class UserStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className='user-stats'>
      <h5>Stats</h5>
      <span>Books Read:</span> <br/>
      <span>Total Quizzes Taken:</span> <br/>
      <span>Average Score</span> <br/>
      <span>Worse Performed Test: </span>
      <span>Total Questions Submitted: </span>
      <span>Top Question Submitted: </span>
    </div>
    )
  }
}

export default UserStats;