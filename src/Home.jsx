import React from "react";
import Card from "./Card";
import washing from "./assets/washing.jpg";
import coloring from "./assets/Coloring.jpg";
import ironing from "./assets/Ironing.jpg";
import DryCleaning from "./assets/DryCleaning.jpg";
import SneakersCleaning from "./assets/SneakersCleaning.webp";
import BlanketWashing from "./assets/BlanketCleaning.jpg";
import BookService from "./ServiceBooking";
import "./Home.css";

const Home = () => {
  return (
    <div  className="home-page">
       <div className="services-header">
       <h2>Our Services</h2>
       <p>Professional laundry services tailored to your needs</p>
       </div>
       <div className="cards-container">
        <Card
          imageSrc={washing}
          serviceName="Washing (for all clothes types)"
          estimatedTime="1.5 hours"
          price="30 MAD"
          description="Professional washing for all clothing types like shirts, pants, dresses."
        />
        <Card
          imageSrc={coloring}
          serviceName="Coloring "
          estimatedTime="2 hours"
          price="40 MAD"
          description="Refresh the color of faded clothes."
        />
        <Card
          imageSrc={ironing}
          serviceName="Ironing "
          estimatedTime="1 hours"
          price="10 MAD"
          description="Ironing services for clothes and blankets."
        />
        <Card
          imageSrc={DryCleaning}
          serviceName="Dry Cleaning (for delicate fabrics)"
          estimatedTime="2 hours"
          price="40 MAD"
          description="Dry cleaning for suits, dresses, and delicate fabrics."
        />
        <Card
          imageSrc={SneakersCleaning}
          serviceName="Sneaker Cleaning"
          estimatedTime="1 hours"
          price="40 MAD"
          description="Deep cleaning for sneakers and shoes."
        />

        <Card
          imageSrc={BlanketWashing}
          serviceName="Blanket Washing (for larger items)"
          estimatedTime="4 hours"
          price="80 MAD"
          description="Washing service for blankets, comforters, and other large items."
        />
       </div>
       <div className="service-booking-container">
      <BookService/>
      </div>
    </div>
  );
};

export default Home;
