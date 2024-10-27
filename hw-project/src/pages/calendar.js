import React from 'react';
import { Container } from 'react-bootstrap';
import CalendarComponent from '../CalendarComponent';

function Calendar() {
  return (
    <Container className="container bg-dark text-light">
      <h1 className="title-head">YOUR CALENDAR</h1>
      <CalendarComponent />
    </Container>
  );
}

export default Calendar;