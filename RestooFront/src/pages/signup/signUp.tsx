import loginImg from "../../assets/images/thumb/login.png";
import logoHeader from "../../assets/images/logo/logo-header.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    password: "",
    role: "USER",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  // Client-side validation
  if (
    !formData.email ||
    !formData.username ||
    !formData.first_name ||
    !formData.last_name ||
    !formData.phone_number ||
    !formData.password
  ) {
    setError("Please fill in all fields.");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:9090/auth/signup",
      formData
    );

    // Check if the response contains an error message
    if (response.data.error) {
      setError(response.data.error); // Set the error message from the response
    } else {
      setSuccess("Sign up successful! Redirecting to home page...");
      setTimeout(() => {
        window.location.href = "/";
      }, 0.001);
    }
  } catch (error) {
    setError("Failed to sign up. Please try again.");
   
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
          <h2>Sign Up</h2>
          <p>Please enter your details to sign up.</p>
        </div>

        <div className="sign-up-from">
          <div className="sign-up-from-item">
            <form onSubmit={handleSubmit}>
              <div className="sign-up-from-inner">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Jon Die"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-from-inner">
                <label htmlFor="first_name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="form-control"
                  placeholder="Jon"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-from-inner">
                <label htmlFor="last_name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="form-control"
                  placeholder="Die"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-from-inner">
                <label htmlFor="phone_number" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  className="form-control"
                  placeholder="+20112568974"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-from-inner">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="hi@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-from-inner">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {error && <p className="error-message">{error}</p>}

              <div className="main-btn-four">
                <button type="submit" className="modal-sign-up-from-btn">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
