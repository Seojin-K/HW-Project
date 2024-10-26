import React, { useState, useEffect } from 'react';
import CalendarComponent from './CalendarComponent';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Example events
    const exampleEvents = [
      {

      },
    ];
    setEvents(exampleEvents);
  }, []);

  return (
    <div className="App">
      { /*<header className="App-header">
        <h1>Title</h1>
  </header> */}
      <main>
        <CalendarComponent events={events} />
      </main>
    </div>
  );
};

export default App;