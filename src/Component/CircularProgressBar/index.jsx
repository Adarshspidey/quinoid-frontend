import React from "react";
import "./style.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const CircularProgressBar = ({ percentacge }) => {
  return (
    <div className="progressbar-wrapper">
      <CircularProgressbar
        value={percentacge}
        text={`${percentacge}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(0, 125, 234, 1), ${percentacge / 100})`,
          textColor: "#555555",
          trailColor: "#D3E7F8",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
