import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

function Features() {
  // Refs and state to track visibility of feature sections
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  // Set up Intersection Observer for each feature
  useEffect(() => {
    const observeSection = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    };

    observeSection(feature1Ref, setIsVisible1);
    observeSection(feature2Ref, setIsVisible2);
    observeSection(feature3Ref, setIsVisible3);
  }, []);

  return (
    <div className="features">
      <h1 className="title-head">Features</h1>

      <div ref={feature1Ref} className={`feature-section ${isVisible1 ? 'visible' : ''}`}>
        <h2>Smart Scheduling</h2>
        <p>Automate scheduling by letting the app suggest the best times based on your availability.</p>
        <div className="features-image-wrap"><img src="/calendar1.jpg" alt="First" width="400" className="features-pic first" /></div>
      </div>

      <div ref={feature2Ref} className={`feature-section ${isVisible2 ? 'visible' : ''}`}>
        <h2>Reminders & Notifications</h2>
        <p>Get timely reminders for events and meetings to ensure you never miss an important moment.</p>
        <div className="features-image-wrap"><img src="/calendar2.jpg" alt="Second" width="400" className="features-pic second" /></div>
      </div>

      <div ref={feature3Ref} className={`feature-section ${isVisible3 ? 'visible' : ''}`}>
        <h2>Customizable Views</h2>
        <p>Switch between daily, weekly, and monthly views, with color-coded events for easy tracking.</p>
        <div className="features-image-wrap"><img src="/calendar3.png" alt="Third" width="400" className="features-pic third" /></div>
      </div>
    </div>
  );
}

export default Features;