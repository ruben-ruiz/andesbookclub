import React from 'react';
import {
  Card, CardImg, CardBody, CardTitle,
} from 'reactstrap';
import quizImg from '../assets/img/quiz.png';

const Quiz = ({ index, title, deleteQuiz, quiz, book, toggleQuiz }) => (
  <>
    <Card>
      <CardImg top width="100%" src={quizImg} alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <button
          type="button"
          onClick={() => {
            toggleQuiz(book);
          }}>
          Take Quiz
          </button>
      </CardBody>
      {/* <QuizStatus className="Quizs-list-dropdown" index={index} deleteQuiz={deleteQuiz} /> */}
    </Card>
  </>

);

export default Quiz;
