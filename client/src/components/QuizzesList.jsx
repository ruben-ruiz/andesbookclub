import React from 'react';
import Carousel from '../widgets/Carousel';
import Quiz from './Quiz';

const QuizzesList = ({ quizzes, updateQuizzes, toggleQuiz}) => (
  <div className="quizzes-list">
    <h2>Pending Quizzes</h2>
    {quizzes
      ? (
        <Carousel className="quizzes-section">
          { quizzes.map((quiz, index) => (
            <Quiz
              key={index}
              quiz={quiz}
              index={index}
              updateQuizzes={updateQuizzes}
              toggleQuiz={toggleQuiz}
            />
          ))}
        </Carousel>
      )
      : <></>}
  </div>
);

export default QuizzesList;
