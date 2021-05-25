import React from 'react';

class TopRatedUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h3 id='Top-Rated-Users-Heading' className='metrics-Heading'>Top Rated Users</h3>
        <div className='top-rated-users'>
          {users.map((user, index) =>
            <div className='top-rated-user'>
              0{index + 1}: {user.profileName} <span>Upvotes: {user.upvotes}</span> <span>Questions Submitted: {user.questions.length}</span>
            </div>
          )}
        </div>
      </div>
    )
  }
};



export default TopRatedUsers;