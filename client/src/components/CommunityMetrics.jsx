import React from 'react';
import TopRatedQuestions from './TopRatedQuestions.jsx';
import TopRatedUsers from './TopRatedUsers.jsx';
import fakeUsers from '../../fakeUsers.json'
import fakeQuestions from '../../fakeQuestions.json'
import axios from 'axios';


class CommunityMetrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      questions: []
    }
    this.getUsers = this.getUsers.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // this.getData();
    this.setState({
      users: fakeUsers,
      questions: fakeQuestions
    })
  }

  getUsers() {
    return new Promise ((resolve, reject) => {
      axios.get('/users')
      .then((res) => resolve(res))
      .catch((err) => reject(err));
    })
  }

  getQuestions() {
    return new Promise ((resolve, reject) => {
      axios.get('/questions')
      .then((res) => resolve(res))
      .catch((err) => reject(err))
    })
  }

  getData() {
    Promise.all([
      this.getUsers(),
      this.getQuestions()
    ]).then(responses => {
      this.setState({
        users: responses[0],
        questions: responses[1]
      })
    }).catch(err => {
      console.log(err);
    })
  }


  render() {
    return(
      <div>
        <TopRatedQuestions questions={this.state.questions}/>

        <TopRatedUsers users={this.state.users}/>
      </div>
    )
  }
};

export default CommunityMetrics;