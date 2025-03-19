import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost/Smart_Laundry_App_Backend/login.php", {
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
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: hsl(210, 40%, 90%);
      width: 60rem;
      margin-top: -8%;
      
    }

    .login-form {
      background-color: #fff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 500px;
    }

    .login-form h2 {
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

    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background-color: #0056b3;
    }

    .error-message {
      color: red;
      font-size: 14px;
      text-align: center;
      margin-bottom: 20px;
    }

    .signup-link {
      text-align: center;
      margin-top: 15px;
    }

    .signup-link a {
      color: #007bff;
      text-decoration: none;
    }

    .signup-link a:hover {
      text-decoration: underline;
    }
  `;

  const styleTag = document.createElement("style");
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Log In</h2>
        <div className="form-group">
          <label htmlFor="login-email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="login-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="login-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Login</button>
        <div className="signup-link">
          Don't have an account?{" "}
          <a href="#" onClick={() => navigate("/signup")}>Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
