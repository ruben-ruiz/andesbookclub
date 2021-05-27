import React from 'react';
import axios from 'axios';
import TopRatedQuestions from './TopRatedQuestions';
import TopRatedUsers from './TopRatedUsers';
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
  }

  componentDidMount() {
    this.getData();
    console.log('users', this.state.users);
    console.log('questions', this.state.questions);
    this.setState({
      questions: fakeQuestions
    })
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
        <TopRatedQuestions questions={this.state.questions} />

        <TopRatedUsers users={this.state.users} />
      </div>
    );
  }
}

export default CommunityMetrics;
