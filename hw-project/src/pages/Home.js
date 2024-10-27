import React, { useEffect, useRef, useState } from 'react';
import '../App.css'
import Features from '../components/Features';

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
      <h1 className="subtitle-head">Reinventing the Best</h1>
      <div className="fan-images">
        <div className="fan-image-wrapper">
          <img src="/party.jpg" alt="First" width="400" className="fan-image first" />
        </div>
        <div className="fan-image-wrapper">
          <img src="/chicago.jpg" alt="Second" width="400" className="fan-image second" />
        </div>
        <div className="fan-image-wrapper">
          <img src="/ny.jpg" alt="Third" width="400" className="fan-image third" />
        </div>
      </div>
      <p
        ref={textRef}
        className={`animated-text ${isVisible ? 'visible' : ''}`}
      >
        Rediscover You: Transform, Grow, Thrive.
      </p>
      <p>  </p>
      <Features />
    </div>

  );
}

export default Home;