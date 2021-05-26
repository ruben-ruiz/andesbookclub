import React, { useState, useEffect } from 'react';

function QuizView(props) {
  const set = {
    questionId: 1,
    questionBody: 'Who invented Chips and Guac?',
    answer1: 'a',
    answer2: 'b',
    answer3: 'c',
    answer4: 'd',
    correctAnswer: 1,
    relevance: 50,
    isReported: false,
  };

  const responseBody = {
    questionId: set.questionId,
    userId: 1,
    id: 1,
    answeredAt: new Date(),
    isCorrect: false,
    userRating: 0,
  };

  const choices = [];

  Object.keys(set).forEach(item => {
    if (item.includes('answer')) {
      choices.push(set[item]);
    }
  });

  return (
    <div className="quiz-prompt">
      <p className="quiz-question">
        Question 1
      </p>
      <div className="question-vote">
        <button
          type="button"
          className="question-vote-choice"
          onClick={() => {
            if (responseBody.userRating === 1) {
              responseBody.userRating = 0;
              return;
            }
            responseBody.userRating = 1;
          }}>
          Upvote
        </button>
        <button
          type="button"
          className="question-vote-choice"
          onClick={() => {
            if (responseBody.userRating === -1) {
              responseBody.userRating = 0;
              return;
            }
            responseBody.userRating = -1;
          }}>
          Downvote
        </button>
      </div>

      <form className="answers" onSubmit={(e) => { }}>
        {
          choices.map((a, i) => {
            return <button id={i + 1} key={i + 1} type="button" className="quiz-answer" onClick={(e) => {
              responseBody.isCorrect = set.correctAnswer === parseInt(e.target.id);
            }}>answer</button>;
          })
        }
      </form>

      <div className="quiz-menu">
        <button type="button" className="quiz-menu-btn">Back</button>
        <button type="button" className="quiz-menu-btn">Submit</button>
        <button type="button" className="quiz-menu-btn">Next</button>
      </div>
    </div>
  );
}

export default QuizView;
