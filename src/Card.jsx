import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
      <div className="service-card">
      <img src={props.imageSrc} alt={props.serviceName} className="service-card-img" />
      <div className="service-card-content">
        <h2>{props.serviceName}</h2>
        <p className="service-card-time">Estimated time: {props.estimatedTime}</p>
        <p className="service-card-price">{props.price}</p>
        <p className="service-card-description">{props.description}</p>
      </div>
    </div>
    );
}
export default Card;