import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
const [currentIndex, setCurrentIndex] = useState(0);
const imageStyle = {backgroundImage: `url(${images[currentIndex]})`};

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
   
  };


  const prevDisabled = images.length <= 1;
  const nextDisabled = images.length <= 1;

  return (
    <>
    <div className="slide-container" style={imageStyle}></div>

    <div onClick={handlePrev}><i class="fa-solid fa-chevron-left"></i></div>
    <div onClick={handleNext}><i class="fa-solid fa-chevron-right"></i></div>
    <button onClick={handlePrev} disabled={prevDisabled}>prev</button>
    <button onClick={handleNext} disabled={nextDisabled}>next</button>
    </>
  );
};

export default Slideshow;
