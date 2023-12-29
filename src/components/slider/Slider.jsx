
import React from "react";
import "./slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";

const Slider = () => {
  return (
    <div className="slide-container">
      <div className="slider-wrapper">
        <div className="slider first-slide">
          <div className="slide-img-wrapper">
            <img src={FirstBook} alt="first book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">It's not just reading. It's living the adventure</p>
          </div>
        </div>
        <div className="slider second-slide">
          <div className="slide-img-wrapper">
            <img src={SecondBook} alt="first book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The book for everyone</h1>
            <p className="slide-info-desc">You can read at home</p>
          </div>
        </div>
        <div className="slider third-slide">
          <div className="slide-img-wrapper">
            <img src={ThirdBook} alt="first book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check out the new titles</h1>
            <p className="slide-info-desc">We send you the book you want at</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
