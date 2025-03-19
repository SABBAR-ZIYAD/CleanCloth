
import React from "react";
import logoImage from "./assets/CleanCloth.png";  
import "./styles.css";
const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Website Logo" style={{ width: "300px", height: "auto" }} />
  </div>
);

export default Logo;
