import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Component/Button";
import { setNote } from "../../Redux/reducer";

const TestPage = () => {
  const notes = useSelector((state) => state.note.note);
  const dispatch = useDispatch();
  const questions = [
    {
      text: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
      text: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Claude Monet",
      ],
    },
    {
      text: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
    },
    {
      text: "What is the speed of light?",
      options: ["299,792 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(300);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(countdown);
          handleSubmit();
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleExit = () => {
    if (
      window.confirm(
        "Are you sure you want to exit? Your progress will not be saved."
      )
    ) {
      navigate("/login");
    }
  };

  const handleSubmit = () => {
    navigate("/exam/result");
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <div className="timer-wraper">{formatTime(timer)}</div>
      <div className="test-body-wraper">
        <div>
          <div className="question-label">
            Question {currentQuestion + 1} of {questions.length}{" "}
          </div>
          <p className="question">{questions[currentQuestion].text}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <div className="radio-button-wrapper" key={index}>
              <label className="square-radio">
                <input
                  className="radio-button"
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleAnswerChange(currentQuestion, option)}
                />
                <span></span>
              </label>
              <div>{option}</div>
            </div>
          ))}
          <div className="button-radio-wrapper">
            {currentQuestion === 0 ? (
              <Button onClick={handleExit} label="Exit" />
            ) : (
              <Button
                onClick={() => setCurrentQuestion((prev) => prev - 1)}
                label="Previous"
              />
            )}
            {currentQuestion === questions.length - 1 ? (
              // <button onClick={handleSubmit}>Submit</button>
              <Button onClick={handleSubmit} label="Submit" type="primary" />
            ) : (
              // <button onClick={() => setCurrentQuestion((prev) => prev + 1)}>
              //   Next
              // </button>
              <Button
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                label="Next"
                type="primary"
              />
            )}
          </div>
        </div>
        <div className="notepad-wrapper">
          <div className="notepad-heading">Notepad</div>
          <textarea
            className="notepad"
            value={notes}
            onChange={(e) => dispatch(setNote(e.target.value))}
            placeholder="Scribble your notes here ..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
