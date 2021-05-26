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
              <span className='cm-rankNum'>0{index + 1}</span> &nbsp;&nbsp;&nbsp;
              <span className='cm-top-username'>{user.profileName}</span>
              <span className='cm-user-upvotes'>Upvotes: {user.upvotes}</span>
              <span className='cm-questions-submitted'>Questions Submitted: {user.questions.length}</span>
            </div>
          )}
        </div>
      </div>
    )
  }
};



export default TopRatedUsers;