import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Home from "./Home";
import Logo from "./logo";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Logo />
      <div className="form-container">
        <Routes>
          {/* Define Routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
