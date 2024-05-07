import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginImg from "../assets/images/thumb/login.png";
import logoHeader from "../assets/images/logo/logo-header.svg";



class UserService {
  static async login(email: string, password: string) {
    try {
      const response = await axios.post("http://localhost:9090/auth/signin", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await UserService.login(email, password);
      console.log(userData); // Log the entire userData object
      if (userData.token) {
      
        localStorage.setItem("role", userData.role);
        localStorage.setItem("username",userData.email);
        localStorage.setItem("user_id", userData.user_id);
        localStorage.setItem("phone_number",userData.phone_number)
        sessionStorage.setItem("token", userData.token);
        // localStorage.setItem("token", userData.token);
        if (userData.role === "ADMIN") {
          navigate("/dashboard"); // Redirect admin to dashboard
        } else if (userData.role === "USER") {
          navigate("/dashboard2"); // Redirect user to dashboard2
        } else {
          setError("Role not recognized");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="sign-up-top">
      <div className="sign-up-main-two">
        <div className="sign-up-main-two-item">
          <div className="sign-up-img">
            <Link to="/">
              <img src={loginImg} alt="img" />
            </Link>
          </div>
        </div>
      </div>

      <div className="sign-up-main">
        <div className="sign-up-logo">
          <Link to="/">
            <img src={logoHeader} alt="logo" />
          </Link>
        </div>
        <div className="sign-up-text">
          <h2>Welcome back</h2>
          <p>Welcome back! Please enter your details.</p>
        </div>

        <div className="sign-up-from">
          <div className="sign-up-from-item">
            <div className="sign-up-from-inner">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="hi@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sign-up-from-inner">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="main-btn-four">
              <button
                type="button"
                className="modal-sign-up-from-btn"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
        <p>
          Don’t have an account? <Link to="/sign-up">Sign up for free</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
