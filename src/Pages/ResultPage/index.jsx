import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import CircularProgressBar from "../../Component/CircularProgressBar";
import Button from "../../Component/Button";
import { useSelector } from "react-redux";

const ResultsPage = () => {
  const navigate = useNavigate();
  const notes = useSelector((state) => state.note.note);

  const calculateResults = () => {
    // Calculate results based on answers
    return {
      correct: 85, // Placeholder values
      incorrect: 3,
      missed: 2,
      score: 62.5,
    };
  };

  const results = calculateResults();

  return (
    <div className="result-body">
      <div className="result-note-wraper">
        <div className="result-wraper">
          <div className="result-summary">
            <div className="result-text">
              Score : <span className="result-text-bold">350 / </span>400
            </div>
            <div className="result-text">
              Time Taken : <span className="result-text-bold">04:20</span>{" "}
            </div>
            <div className="score-summary">
              {results.score}%{" "}
              <div className="score-summary-label">Total Score </div>
            </div>
          </div>
          <div className="progress-wraper">
            <CircularProgressBar percentacge={results.score} />
            Final Score
          </div>
          <div className="progress-wraper">
            <CircularProgressBar percentacge={results.correct} />
            Correct
          </div>
          <div className="progress-wraper">
            <CircularProgressBar percentacge={results.incorrect} />
            Wrong
          </div>
          <div className="progress-wraper">
            <CircularProgressBar percentacge={results.missed} />
            Skipped
          </div>
        </div>
        <div className="note-wraper">
          <h3>Your scribble notes:</h3>
          <p>{notes}</p>
        </div>
        <div className="button-center">
          <Button
            onClick={() => {
              navigate("/login");
            }}
            label="Exit"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
