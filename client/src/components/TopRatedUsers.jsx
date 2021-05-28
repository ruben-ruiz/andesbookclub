import React from 'react';

class TopRatedUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h3 id='Top-Rated-Users-Heading' className='metrics-heading'>Top Rated Users</h3>
        <div className='top-rated-users'>
          {this.props.users.map((user, index) =>
            <div className='cm-top-rated-user' key={index}>
              <div className='cm-rankNum'>0{index + 1}</div> &nbsp;&nbsp;&nbsp;
              <div className='cm-top-username'>{user.profilename}</div>
              <div className='cm-user-upvotes'>Upvotes: {user.sum}</div>
              <div className='cm-questions-submitted'>Questions Submitted: {user.count}</div>
            </div>
          )}
        </div>
      </div>
    )
  }
};



export default TopRatedUsers;