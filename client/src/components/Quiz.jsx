import React from 'react';
import {
  Card, CardImg, Button
} from 'reactstrap';
import quizImg from '../assets/img/quiz.png';

const Quiz = ({ index, title, deleteQuiz }) => (
  <>
    <Card>
      <CardImg top width="100%" src={quizImg} alt="Card image cap" />
      {/* <QuizStatus className="Quizs-list-dropdown" index={index} deleteQuiz={deleteQuiz} /> */}
    </Card>
  </>

);

export default Quiz;
