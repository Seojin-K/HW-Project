import React, { useEffect, useState, createContext, useContext } from 'react';
import styled from 'styled-components';
console.log("hey");
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  background-color: #f5f5f5;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 280px;
  text-align: left;
`;

const EventName = styled.h3`
  margin: 0;
  font-size: 1.4em;
  color: #333;
`;

const Details = styled.p`
  margin: 10px 0;
  color: #666;
`;

const fetchEvents = async () => {
//   const response = await fetch('http://localhost:5000/fetchedData.json');
  const response = await fetch('testing.json');
  const data = await response.json();
  return data;
};

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <Container>
      {events.map((event, index) => (
        <Card key={index}>
          <EventName>{event.name}</EventName>
          <Details>Location: {event.location}</Details>
          {/* <Details>Start Time: {new Date(event.startTime).toLocaleString()}</Details>
          <Details>End Time: {new Date(event.endTime).toLocaleString()}</Details> */}
        </Card>
      ))}
    </Container>
  );
};

export default EventList;
