import React from 'react';

class UserStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stats = this.props.userStats
    return(
    <div className='user-stats'>
      <h5>Stats</h5>
      <span>Books Read: {stats[0]}</span> <br/>
      <span>Total Quizzes Taken: {stats[1]}</span> <br/>
      <span>Average Score: {stats[2]}</span> <br/>
      <span>Worse Performed Test: {stats[3]}</span> <br/>
      <span>Total Questions Submitted: {stats[4]}</span> <br/>
      <span>Top Question Submitted: {stats[5]}</span> <br/>
    </div>
    )
  }
}

export default UserStats;