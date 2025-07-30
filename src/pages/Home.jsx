import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import { getEvents } from '../services/storage';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = getEvents();
    setEvents(storedEvents);
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-center">Upcoming Events</h2>
      <div className="row">
        {events.length === 0 ? (
          <p className="text-center">No events available.</p>
        ) : (
          events.map(event => (
            <div className="col-md-4 mb-4" key={event.id}>
              <EventCard event={event} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;