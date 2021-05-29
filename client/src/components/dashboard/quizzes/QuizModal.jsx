import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import QuizView from './QuizView';

function QuizModal({ bookId, toggleQuiz }) {
  const [start, changeStart] = useState(false);
  const [questionSets, updateSets] = useState([]);
  const [currentSet, changeSet] = useState({});
  const [answers, updateAnswers] = useState({});

  const handleNext = (set) => {
    let currentIndex = -1;
    questionSets.forEach((question, i) => {
      if (JSON.stringify(question) === JSON.stringify(set)) {
        currentIndex = i;
      }
    });
    if (currentIndex < questionSets.length - 1) {
      changeSet(questionSets[currentIndex + 1]);
    }
  };
  const handlePrev = (set) => {
    let currentIndex = -1;
    questionSets.forEach((question, i) => {
      if (JSON.stringify(question) === JSON.stringify(set)) {
        currentIndex = i;
      }
    });
    if (currentIndex > 0) {
      changeSet(questionSets[currentIndex - 1]);
    }
  };

  useEffect(() => {
    axios.get(`/questions/book/${bookId}`)
      .then((data) => {
        updateSets(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const view = !start
    ? <button type="button" className="start-quiz question-vote-choice" onClick={e => changeStart(!start)}>start quiz</button>
    : (
      <QuizView
        set={currentSet}
        prev={handlePrev}
        next={handleNext}
        list={questionSets}
        answers={answers}
        toggleQuiz={toggleQuiz}
      />
    );

  return (
    <div>
      <div isOpen={start} className="popup">
        <ModalBody
          className="quiz"
        >
          <Button
            type="button"
            onClick={() => {
              toggleQuiz(<></>);
            }}
            className="popup-close"
          >
            close
          </Button>
          {view}
        </ModalBody>
      </div>
    </div>
  );
}
export default QuizModal;
