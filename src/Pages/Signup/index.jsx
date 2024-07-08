import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Component/Button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [changePasswordError, setChangePasswordError] = useState("");
  const [matchError, setMatchError] = useState("");
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long and contain both letters and numbers.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!passwordRegex.test(changePassword)) {
      setChangePasswordError("Password must be at least 8 characters long and contain both letters and numbers.");
      valid = false;
    } else {
      setChangePasswordError("");
    }

    if (password !== changePassword) {
      setMatchError("Passwords do not match.");
      valid = false;
    } else {
      setMatchError("");
    }

    if (valid) {
      navigate("/exam/test");
    }
  };

  return (
    <div className="login-body">
      <div className="signup-left-section"></div>
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
                {passwordError && <div className="error-message">{passwordError}</div>}
              </div>
              <div>
                <div className="form-label">Change Password</div>
                <input
                  type="password"
                  value={changePassword}
                  onChange={(e) => setChangePassword(e.target.value)}
                  className="form-input"
                  placeholder="Enter your Password"
                  required
                />
                {changePasswordError && <div className="error-message">{changePasswordError}</div>}
                {matchError && <div className="error-message">{matchError}</div>}
              </div>
              <Button type="primary" mode="submit" label="Signup" />
              <div className="login-signup-alert">
                Already have an Account?
                <span
                  className="login-alert-bold"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
