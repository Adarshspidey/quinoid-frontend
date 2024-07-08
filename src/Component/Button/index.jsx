import React from "react";
import "./style.css";

const Button = ({ mode, label, type, onClick }) => {
  return (
    <button
      className={`button ${
        type === "primary" ? "button-primary" : "button-secondary"
      }`}
      type={mode}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
