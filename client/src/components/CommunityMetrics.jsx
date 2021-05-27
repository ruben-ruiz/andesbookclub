import React from 'react';
import axios from 'axios';
import TopRatedQuestions from './TopRatedQuestions';
import TopRatedUsers from './TopRatedUsers';
import UserStats from './UserStats';
// import fakeUsers from '../../fakeUsers.json'
// import fakeQuestions from '../../fakeQuestions.json'

class CommunityMetrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      questions: [],
    };

    this.getUsers = this.getUsers.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getData = this.getData.bind(this);
    this.getUserStats = this.getUserStats.bind(this);
  }

  componentDidMount() {
    this.getData();
    console.log('users', this.state.users);
    console.log('questions', this.state.questions);
<<<<<<< HEAD
    this.getUserStats();

=======
>>>>>>> main
  }

  getUsers() {
    return new Promise ((resolve, reject) => {
      axios.get('/questions/topusers')
      .then((res) => resolve(res))
      .catch((err) => reject(err));
    })
  }

  getQuestions() {
    return new Promise ((resolve, reject) => {
      axios.get('/questions/topquestions')
      .then((res) => resolve(res))
      .catch((err) => reject(err))
    })
  }

  getUserStats() {
    // return new Promise((resolve, reject) => {
    //   axios.get('users/userstats')
    //   .then((res) => resolve(res))
    //   .catch((err) => reject(err))
    // })

    axios.get('users/userstats').then((res) => console.log('userId', res))
  }

  getData() {
    Promise.all([
      this.getUsers(),
      this.getQuestions(),
    ]).then((responses) => {
      console.log('responses', responses);
      this.setState({
        users: responses[0].data,
        questions: responses[1].data,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <UserStats/>
        <TopRatedQuestions questions={this.state.questions} />

        <TopRatedUsers users={this.state.users} />
      </div>
    );
  }
}

export default CommunityMetrics;
