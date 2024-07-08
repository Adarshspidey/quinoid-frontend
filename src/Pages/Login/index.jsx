import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Component/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "testuser@gmail.com" && password === "testuser@2021") {
      navigate("/exam/test");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-body">
      <div className="login-left-section"></div>
      <div className="login-right-section">
        <div className="form-wraper">
          <div className="login-header">User Sign in</div>
          <form onSubmit={handleSubmit}>
            <div className="forms">
              <div>
                <div className="form-label">Your Email</div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div>
                <div className="form-label">Password</div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <div>
                <div className="form-label">Exam Category</div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-input"
                  placeholder="Select your Category"
                >
                  <option value="">Select your Category</option>
                  <option value="sports">Sports</option>
                  <option value="arts">Arts</option>
                  <option value="history">History</option>
                  <option value="physics">Physics</option>
                </select>
              </div>
              <Button type="primary" mode="submit" label="Login" />
              <div className="login-signup-alert">
                Don't have an Account?{" "}
                <span
                  className="login-alert-bold"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
