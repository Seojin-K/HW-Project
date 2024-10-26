import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ initialEvents }) => {
  const [events, setEvents] = useState(initialEvents || []);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const start = new Date(newEvent.start);
    const end = new Date(newEvent.end);

    if (start >= end) {
      alert('End date must be after start date.');
      return;
    }

    setEvents([...events, { ...newEvent, start, end, id: Date.now() }]);
    setNewEvent({ title: '', start: '', end: '' }); // Reset form
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const EventComponent = ({ event }) => (
    <div>
      <span>{event.title}</span>
      <button
        onClick={() => handleDeleteEvent(event.id)}
        style={{ marginLeft: '10px', color: 'red' }}
      >
        Delete
      </button>
    </div>
  );

  return (
    <div style={{ height: '600px' }}>
      <form onSubmit={handleAddEvent} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="datetime-local"
          name="start"
          value={newEvent.start}
          onChange={handleInputChange}
          required
        />
        <input
          type="datetime-local"
          name="end"
          value={newEvent.end}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Event</button>
      </form>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
};

export default CalendarComponent;
