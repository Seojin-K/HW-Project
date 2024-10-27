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
    setNewEvent({ title: '', start: '', end: '', location: '' });
  };

  const isOverlapping = (newEvent) => {
    return events.some(
      (event) =>
        newEvent.start < event.end && newEvent.end > event.start
    );
  };

const handleAutoGenerateEvents = () => {
    const generatedEvents = [
        {
            id: Date.now(),
            title: 'Study Group',
            start: new Date(moment().add(1, 'days').set({ hour: 10, minute: 0 })),
            end: new Date(moment().add(1, 'days').set({ hour: 12, minute: 0 })),
            location: 'Library',
        },
        {
            id: Date.now() + 1,
            title: 'Club Meeting',
            start: new Date(moment().add(2, 'days').set({ hour: 14, minute: 0 })),
            end: new Date(moment().add(2, 'days').set({ hour: 16, minute: 0 })),
            location: 'Student Center',
        },
        {
            id: Date.now() + 2,
            title: 'Career Fair',
            start: new Date(moment().add(3, 'days').set({ hour: 9, minute: 0 })),
            end: new Date(moment().add(3, 'days').set({ hour: 17, minute: 0 })),
            location: 'Gymnasium',
        },
        {
            id: Date.now() + 3,
            title: 'Exam',
            start: new Date(moment().month(9).date(15).set({ hour: 9, minute: 0 })),
            end: new Date(moment().month(9).date(15).set({ hour: 12, minute: 0 })),
            location: 'Classroom',
        },
        {
            id: Date.now() + 4,
            title: 'Hackathon',
            start: new Date(moment().month(10).date(10).set({ hour: 10, minute: 0 })),
            end: new Date(moment().month(10).date(10).set({ hour: 18, minute: 0 })),
            location: 'Computer Lab',
        },
        {
            id: Date.now() + 5,
            title: 'Internship Interview',
            start: new Date(moment().add(4, 'days').set({ hour: 13, minute: 0 })),
            end: new Date(moment().add(4, 'days').set({ hour: 15, minute: 0 })),
            location: 'Career Services Office',
        },
        {
            id: Date.now() + 6,
            title: 'Seminar',
            start: new Date(moment().add(5, 'days').set({ hour: 10, minute: 0 })),
            end: new Date(moment().add(5, 'days').set({ hour: 12, minute: 0 })),
            location: 'Lecture Hall',
        },
        {
            id: Date.now() + 7,
            title: 'Club Sports Practice',
            start: new Date(moment().add(6, 'days').set({ hour: 16, minute: 0 })),
            end: new Date(moment().add(6, 'days').set({ hour: 18, minute: 0 })),
            location: 'Sports Field',
        },
        // Add more events here
        {
            id: Date.now() + 8,
            title: 'Christmas Party',
            start: new Date(moment().month(11).date(24).set({ hour: 19, minute: 0 })),
            end: new Date(moment().month(11).date(24).set({ hour: 23, minute: 59 })),
            location: 'Event Hall',
        },
        {
            id: Date.now() + 9,
            title: 'New Year Celebration',
            start: new Date(moment().month(11).date(31).set({ hour: 20, minute: 0 })),
            end: new Date(moment().month(11).date(31).set({ hour: 23, minute: 59 })),
            location: 'City Center',
        },
    ];

    const nonOverlappingEvents = generatedEvents.filter(event => !isOverlapping(event));
    setEvents([...events, ...nonOverlappingEvents]);
};

  const EventComponent = ({ event }) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '10px',
      borderRadius: '8px',
      background: '#007BFF', // Bright blue for events
      color: '#FFFFFF', // White text for better contrast
      boxShadow: 'none',
    }}>
      <span style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: '14px',
        fontWeight: 'bold', // Bold title
      }}>
        {event.title}
      </span>
      <span style={{
        fontSize: '12px',
        color: '#FFFFFF', // White text for location
        marginTop: '4px',
      }}>
        {event.location}
      </span>
    </div>
  );

  const currentDay = moment().startOf('day').toDate();

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      backgroundColor: '#F5F5F5', 
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
          background: '#E0E0E0', 
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
            border: '1px solid #888', 
            fontSize: '14px',
            backgroundColor: '#FFFFFF', 
            color: '#333333', 
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
            border: '1px solid #888', 
            fontSize: '14px',
            backgroundColor: '#FFFFFF', 
            color: '#333333', 
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
            border: '1px solid #888', 
            fontSize: '14px',
            backgroundColor: '#FFFFFF', 
            color: '#333333', 
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
            border: '1px solid #888', 
            fontSize: '14px',
            backgroundColor: '#FFFFFF', 
            color: '#333333', 
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            background: '#4CAF50', 
            color: '#FFFFFF',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Add Event
        </button>
        <button
          type="button"
          onClick={handleAutoGenerateEvents}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            background: '#1976D2', 
            color: '#FFFFFF',
            fontSize: '14px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Auto-Generate Events
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
          backgroundColor: '#FFFFFF', 
          color: '#333333', 
        }}
        components={{
          event: EventComponent,
        }}
        eventPropGetter={() => ({
          style: {
            backgroundColor: '#007BFF', // Bright blue for event background
            color: '#FFFFFF', // White text for event
            borderRadius: '5px',
            border: 'none',
          },
        })}
        dayPropGetter={(date) => ({
          style: {
            backgroundColor: date.toDateString() === currentDay.toDateString() ? '#F0F0F0' : '#FFFFFF', 
            fontWeight: date.toDateString() === currentDay.toDateString() ? 'bold' : 'normal', 
          },
        })}
      />
    </div>
  );
};

export default CalendarComponent;
