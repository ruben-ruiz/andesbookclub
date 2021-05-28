import React from 'react';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import axios from 'axios';

class SubmitQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmitQuestion = this.onSubmitQuestion.bind(this);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
  }

  onSubmitQuestion() {
    const {
      answerOne, answerTwo, answerThree, answerFour, correctAnswer, question,
    } = this.state;
    const { bookId, toggle } = this.props;
    const data = [answerOne, answerTwo, answerThree, answerFour, correctAnswer, question, bookId];
    axios.post('/questions', data)
      .then((response) => {
        console.log(response);
        toggle();
      });
  }

  onChangeAnswer(event) {
    const { name } = event.target;
    const val = event.target.value;
    this.setState({
      [name]: val,
    });
  }

  render() {
    return (
      <div>
        <h3>Submit a question you think will test other reader&apos;s comprehension</h3>
        <Form>
          <FormGroup>
            <Label>Question: (Limit 500 characters)</Label>
            <Input
              type="textarea"
              name="question"
              id="exampleText"
              onChange={this.onChangeAnswer}
            />
          </FormGroup>
          <FormGroup>
            <Label>Answer 1:</Label>
            <Input
              type="text"
              name="answerOne"
              onChange={this.onChangeAnswer}
            />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2:</Label>
            <Input
              type="text"
              name="answerTwo"
              onChange={this.onChangeAnswer}
            />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3:</Label>
            <Input
              type="text"
              name="answerThree"
              onChange={this.onChangeAnswer}
            />
          </FormGroup>
          <FormGroup>
            <Label>Answer 4:</Label>
            <Input
              type="text"
              name="answerFour"
              onChange={this.onChangeAnswer}
            />
          </FormGroup>
          <FormGroup tag="fieldset">
            <Label>Select the correct answer:</Label>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="correctAnswer" value="1" onChange={this.onChangeAnswer} />
                {' '}
                1
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="correctAnswer" value="2" onChange={this.onChangeAnswer} />
                {' '}
                2
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="correctAnswer" value="3" onChange={this.onChangeAnswer} />
                {' '}
                3
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="correctAnswer" value="4" onChange={this.onChangeAnswer} />
                {' '}
                4
              </Label>
            </FormGroup>
          </FormGroup>
          <Button color="primary" onClick={this.onSubmitQuestion}>Submit</Button>
          <Button color="secondary">Cancel</Button>
        </Form>
      </div>
    );
  }
}

export default SubmitQuestion;
