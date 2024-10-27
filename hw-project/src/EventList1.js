import React, { useState, useEffect } from 'react';

const EventList1 = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Function to fetch JSON data
    const fetchEvents = async () => {
        console.log("YOOOO");
      try {
        // const response = await fetch('hw-project/src/backend/fetchedData.json');
        const response = await fetch('./backend/fetchedData.json');
        const data = await response.json();
        console.log(JSON.stringify(data));
        setEvents(data);
      } catch (error) {
        console.error('Error fetching the JSON file:', error);
      }
    //   console.log(JSON.stringify(response));
    //   console.log(response);

    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            {/* <p>Start: {new Date(event.start).toLocaleString()}</p>
            <p>End: {new Date(event.end).toLocaleString()}</p> */}
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList1;
