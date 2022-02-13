import React from 'react';
import "./Slider.css";
import leftArrow from "./icons/arrow-left-solid.svg";
import rightArrow from "./icons/arrow-right-solid.svg";

export default function BtnSlider({direction, moveSlide}) {
  
  return (
    <div>
        <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'}>
         <img src={ direction === "next" ? rightArrow : leftArrow } alt="" />   
        </button>
        
        
    </div>
  )
}
