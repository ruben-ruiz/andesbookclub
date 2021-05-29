import React from 'react';
import axios from 'axios';
import TopRatedQuestions from './TopRatedQuestions';
import TopRatedUsers from './TopRatedUsers';
import UserStats from './UserStats';

class CommunityMetrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      questions: [],
      userStats: [0, 0, 0, 'N/A', 0, 'N/A'],
      isLoggedIn: false,
    };

    this.getUsers = this.getUsers.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getData = this.getData.bind(this);
    this.getUserBooks = this.getUserBooks.bind(this);
    this.getUserQuestions = this.getUserQuestions.bind(this);
    this.getTopQuestion = this.getTopQuestion.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentDidMount() {
    this.getData();
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

  getUserInfo() {
    return axios.get('/isLoggedIn')
      .then((res) => {
        const loggedIn = res.data;
        if (loggedIn) {
          return Promise.all([
            this.getUserBooks(),
            this.getUserQuestions(),
            this.getTopQuestion()]);
        }
        return [false, false, false];
      });
  }

  getUserBooks() {
    return new Promise((resolve, reject) => {
      axios.get('users/userstats')
      .then((res) => resolve(res))
      .catch((err) => reject(err))
    })
  }

  getUserQuestions() {
    return new Promise((resolve, reject) => {
      axios.get('users/userstats/questions')
      .then((res) => resolve(res))
      .catch((err) => reject(err))
    })
  }

  getTopQuestion() {
    return new Promise((resolve, reject) => {
      axios.get('users/userstats/topquestion')
      .then((res) => resolve(res))
      .catch((err) => reject(err))
    })
  }

  getData() {
    Promise.all([
      this.getUsers(),
      this.getQuestions(),
      this.getUserInfo(),
    ]).then((responses) => {
      console.log('responses', responses);
      this.setState({
        users: responses[0].data,
        questions: responses[1].data,
        userStats: responses[2][1] === false ? [0, 0, 0, 'N/A', 0, 'N/A'] : [Number(responses[2][0].data[0].count), 0, 0, 'N/A', Number(responses[2][1].data[0].count), responses[2][2].data[0] ? responses[2][2].data[0].questionbody : 'No questions contributed'],
        isLoggedIn: !!responses[2][1],
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        { this.state.isLoggedIn ? <UserStats userStats={this.state.userStats}/> : null }

        <TopRatedQuestions questions={this.state.questions} />

        <TopRatedUsers users={this.state.users} />
      </div>
    );
  }
}

export default CommunityMetrics;
