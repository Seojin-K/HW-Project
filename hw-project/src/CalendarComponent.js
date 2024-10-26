import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ initialEvents }) => {
  const [events, setEvents] = useState(initialEvents || []);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '', location: '' });

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
    setNewEvent({ title: '', start: '', end: '', location: '' }); // Reset form
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const EventComponent = ({ event }) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '10px',
      borderRadius: '8px',
      background: '#FFC107', // Bright yellow for events
      color: '#333333', // Dark text for better contrast
      boxShadow: 'none',
    }}>
      <span style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: '14px',
        fontWeight: 'bold',
      }}>
        {event.title}
      </span>
      <span style={{
        fontSize: '12px',
        color: '#555555', // Slightly darker text for location
        marginTop: '4px',
      }}>
        {event.location}
      </span>
      <button
        onClick={() => handleDeleteEvent(event.id)}
        style={{
          padding: '6px 10px',
          borderRadius: '5px',
          border: 'none',
          background: '#FF4D4D', // Bright red for delete button
          color: '#FFFFFF',
          cursor: 'pointer',
          marginTop: '5px',
          fontSize: '12px',
        }}
      >
        Delete
      </button>
    </div>
  );

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      backgroundColor: '#F5F5F5', // Light background for the container
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}>
      <form
        onSubmit={handleAddEvent}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: '20px',
          padding: '15px',
          background: '#E0E0E0', // Light gray for the form
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #888', // Gray border for input
            fontSize: '14px',
            backgroundColor: '#FFFFFF', // White background for input
            color: '#333333', // Dark text for input
          }}
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={newEvent.location}
          onChange={handleInputChange}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #888', // Gray border for input
            fontSize: '14px',
            backgroundColor: '#FFFFFF', // White background for input
            color: '#333333', // Dark text for input
          }}
        />
        <input
          type="datetime-local"
          name="start"
          value={newEvent.start}
          onChange={handleInputChange}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #888', // Gray border for input
            fontSize: '14px',
            backgroundColor: '#FFFFFF', // White background for input
            color: '#333333', // Dark text for input
          }}
        />
        <input
          type="datetime-local"
          name="end"
          value={newEvent.end}
          onChange={handleInputChange}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #888', // Gray border for input
            fontSize: '14px',
            backgroundColor: '#FFFFFF', // White background for input
            color: '#333333', // Dark text for input
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            background: '#4CAF50', // Green for submit button
            color: '#FFFFFF',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Add Event
        </button>
      </form>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 600,
          borderRadius: '8px',
          backgroundColor: '#FFFFFF', // White background for calendar
          color: '#333333', // Dark text color for calendar
        }}
        components={{
          event: EventComponent,
        }}
        eventPropGetter={() => ({
          style: {
            backgroundColor: '#FFC107', // Bright yellow for event background
            color: '#333333', // Dark text for event
            borderRadius: '5px',
            border: 'none',
          },
        })}
        dayPropGetter={() => ({
          style: {
            backgroundColor: '#FFFFFF', // White background for days in the calendar
          },
        })}
      />
    </div>
  );
};

export default CalendarComponent;
