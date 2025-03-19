import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost/Smart_Laundry_App_Backend/register.php", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        setErrorMessage("");
        navigate("/"); 
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("There was an error: " + error.message);
    }
  };

  const style = `
    .sign-up-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: hsl(210, 40%, 90%);
      width: 90rem;
      margin-top: -8%;
    }

    .sign-up-form {
      background-color: #fff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 30%;
      max-width: 100%;
    }

    .sign-up-form h2 {
      text-align: center;
      color: hsl(210, 50%, 40%);
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .form-group input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .form-group input[type="password"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .form-group input[type="email"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .form-group input[type="text"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background-color: #45a049;
    }

    .error-message {
      color: red;
      font-size: 14px;
      text-align: center;
      margin-bottom: 20px;
    }

    .login-link {
      text-align: center;
      margin-top: 15px;
    }

    .login-link a {
      color: #4CAF50;
      text-decoration: none;
    }

    .login-link a:hover {
      text-decoration: underline;
    }
  `;

  const styleTag = document.createElement("style");
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit} className="sign-up-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="signup-name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="signup-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="signup-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="signup-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-confpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="signup-confpassword"
            name="confpassword"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Sign Up</button>
        <div className="login-link">
          Already have an account?{" "}
          <a href="#" onClick={() => navigate("/login")}>Login</a>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
