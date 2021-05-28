import React from 'react';
import {
  Card, CardImg, Button,
} from 'reactstrap';
// import quizImg from '../assets/img/quiz.png';

const Quiz = ({ index, quiz, toggleQuiz }) => (
  <>
    <Card>
      <CardImg top width="100%" src={quiz.thumbnail} alt="Card image cap" />
      <Button
        type="button"
        onClick={() => {
          toggleQuiz(quiz.bookid);
        }}
        className="quiz-list-btn"
      >
        Take Quiz
      </Button>
    </Card>
  </>

);

export default Quiz;
