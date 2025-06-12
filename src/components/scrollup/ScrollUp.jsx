import React, { useState, useEffect } from 'react';
import './scrollup.css'; // you'll need this for styling

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`scrollup ${showScroll ? 'show-scroll' : ''}`} 
      onClick={scrollToTop}
    >
      <i className='uil uil-arrow-up'></i>
    </div>
  );
};

export default ScrollUp;
