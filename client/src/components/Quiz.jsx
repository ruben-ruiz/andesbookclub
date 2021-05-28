import React from 'react';
import {
  Card, CardImg, Button
} from 'reactstrap';
import quizImg from '../assets/img/quiz.png';

const Quiz = ({ index, title, deleteQuiz, quiz, book, toggleQuiz }) => (
  <>
    <Card>
      <CardImg top width="100%" src={quizImg} alt="Card image cap" />
      <Button
        type="button"
        onClick={() => {
          toggleQuiz(book);
        }}
      >
        Take Quiz
      </Button>
    </Card>
  </>

);

export default Quiz;
