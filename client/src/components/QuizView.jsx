import React, { useState, useEffect } from 'react';

function QuizView(props) {
  let { set, prev, next, list } = props;

  if (!Object.keys(set).length) {
    set = list[0];
  }

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
          <img src="https://img.icons8.com/ios/44/000000/good-quality--v1.png" />
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
          <img src="https://img.icons8.com/ios/44/000000/poor-quality.png" />
        </button>
      </div>
      <p className="quiz-question">
        {set.questionBody}
      </p>

      <form className="answers" onSubmit={(e) => { }}>
        {
          choices.map((answer, i) => {
            return <button id={i + 1} key={i + 1} type="button" className="quiz-answer" onClick={(e) => {
              responseBody.isCorrect = set.correctAnswer === parseInt(e.target.id)
              responseBody.answeredAt = new Date();
              console.log(responseBody);
            }}>{answer}</button>;
          })
        }
      </form>

      <div className="quiz-menu">
        <button type="button" className="quiz-menu-btn" onClick={() => prev(set)}>Back</button>
        <button type="button" className="quiz-menu-btn">Submit</button>
        <button type="button" className="quiz-menu-btn" onClick={() => next(set)}>Next</button>
      </div>
    </div>
  );
}

export default QuizView;
