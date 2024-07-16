import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log('currentIndex after Prev:', currentIndex);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    console.log('currentIndex after Next:', currentIndex);
  };

  useEffect(() => {
    console.log('currentIndex in useEffect:', currentIndex);
  }, [currentIndex]);

  const prevDisabled = images.length <= 1;
  const nextDisabled = images.length <= 1;

  return (
    <>
      <div
        className="slide-container"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        //   height: '320px',
        //   width: '100%',
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   borderRadius: '10px'
        }}
      ></div>
      <button onClick={handlePrev} disabled={prevDisabled}>
        prev
      </button>
      <button onClick={handleNext} disabled={nextDisabled}>
        next
      </button>
    </>
  );
};

export default Slideshow;
