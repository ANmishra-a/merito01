import React, { useState, useEffect } from "react";
import "./slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState([
    {
      header: "Best Currier  decision ever!",
      text: "Merito's mock interview program helped me to identify areas of improvement needed and built confidence to face any interview situation. Mentoring session with Rushikesh sir helped me to aim for the right companies matching my career aspirations. Even after my graduation I do out to Merito for any career help or support I needed and always got the right guidance",
      author: {
        name: "SANKET NIRAS",
        location: "Class 2020 -GE Energy",
        img: "",
      },
    },
    {
      header: "The last step to becoming a complete minimalist",
      text: "I had opted for a mock interview for MBA. Mock interview has helped in more than one way. It was one that instilled more confidence in me while also making me realize where I could improve. The interviews are not just about one’s knowledge but much beyond, and Rushikesh Sir gave me a glimpse into the possible different scenarios I could face.",
      author: {
        name: "HEENA FATIMA",
        location: "HEENA FATIMA",
        img: "",
      },
    },
    {
      header: "The last step to becoming a complete professional",
      text: "I had opted for a mock interview for MBA. Mock interview has helped in more than one way. It was one that instilled more confidence in me while also making me realize where I could improve. The interviews are not just about one’s knowledge but much beyond, and Rushikesh Sir gave me a glimpse into the possible different scenarios I could face.",
      author: {
        name: "HEENA FATIMA",
        location: "HEENA FATIMA",
        img: "",
      },
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="slider">
      <div className="slider-content">
        <p className="slider-content__header">{slides[currentSlide].header}</p>
        <p className="slider-content__message"> {slides[currentSlide].text} </p>
        <div className="author">
          <div className="author-info">
            <p>{slides[currentSlide].author.name}</p>
            <p>{slides[currentSlide].author.location}</p>
          </div>
        </div>
      </div>
      <div className="slider-controls">
        <button
          className="btn btn-left"
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0 ? slides.length - 1 : currentSlide - 1
            )
          }
        >
          {"<"}
        </button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${currentSlide === index ? "active" : ""}`}
            />
          ))}
        </div>
        <button
          className="btn btn-right"
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
