import React, { useEffect, useRef, useState } from 'react';
import '../App.css'

function Home() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = textRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Text is visible");
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }


    return () => {
        if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="Home">
      <h1 className="title-head">FRESH START</h1>
      <div className="fan-images">
        <div className="fan-image-wrapper">
          <img src="/acespade.jpg" alt="First" width="270" className="fan-image first" />
        </div>
        <div className="fan-image-wrapper">
          <img src="/acedia.jpg" alt="Second" width="300" className="fan-image second" />
        </div>
        <div className="fan-image-wrapper">
          <img src="/aceheart.jpg" alt="Third" width="295" className="fan-image third" />
        </div>
      </div>
      <p
        ref={textRef}
        className={`animated-text ${isVisible ? 'visible' : ''}`}
      >
        This is the main page of the app.
      </p>
      <p>  </p>
    </div>

  );
}

export default Home;