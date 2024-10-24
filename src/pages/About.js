import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Tiffin Delight</h2>
        <p>
          Welcome to Tiffin Delight, where we bring you the taste of home-cooked meals right to your table. Our tiffin center is dedicated to serving fresh, nutritious, and delicious meals that cater to the busy lifestyles of our customers.
        </p>
        <p>
          With a focus on quality ingredients and authentic recipes, we ensure that every tiffin is prepared with love and care. Whether you’re looking for vegetarian delights or hearty non-vegetarian dishes, our menu has something for everyone.
        </p>
        <p>
          Our mission is to make wholesome meals accessible to everyone, ensuring that you enjoy the comfort of home-cooked food, even on the busiest days. Join us in experiencing the joy of tiffins that remind you of home!
        </p>
      </div>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMt9CNGc-6gE4ooTm2rDS0E17ett0nwjm3Q&s" 
        alt="Delicious Tiffin Meals" 
        className="about-image" 
      />
    </div>
  );
};

export default About;
