import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuizView(props) {
  let { set, prev, next, list, answers } = props;

  if (!Object.keys(set).length) {
    set = list[0];
  }

  const responseBody = {
    questionId: set.questionId,
    userId: 1,
    isCorrect: false,
    selectedAnswer: 1,
    userRating: 0,
  };

  let submit = (<button type="button" className="quiz-menu-btn" onClick={() => {
    axios.post('/answers', {
      answers: Object.values(answers),
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }}>
    Submit
  </button>);

  let nextBtn = (<button
    type="button"
    className="quiz-menu-btn"
    onClick={() => {
      console.log(answers);
      next(set);
    }
    }>
    Next
  </button>);

  let buttonType = JSON.stringify(set) === JSON.stringify(list[list.length - 1]) ? submit : nextBtn;

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
              responseBody.selectedAnswer = parseInt(e.target.id);
              console.log(responseBody);
              answers[set.questionId] = responseBody;
            }}>{answer}</button>;
          })
        }
      </form>

      <div className="quiz-menu">
        <button type="button" className="quiz-menu-btn" onClick={() => prev(set)}>Back</button>
        {buttonType}
        {/* <button
          type="button"
          className="quiz-menu-btn"
          onClick={() => {
            axios.post('/answers', {
              answers: Object.values(answers),
            })
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          }}>
          Submit
          </button> */}
        {/* <button
          type="button"
          className="quiz-menu-btn"
          onClick={() => {
            console.log(answers);
            next(set);
          }
          }>
          Next
          </button> */}
      </div>
    </div>
  );
}

export default QuizView;
