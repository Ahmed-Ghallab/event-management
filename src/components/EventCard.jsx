import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{event.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{event.date}</h6>
          <p className="card-text">{event.description.slice(0, 60)}...</p>
        </div>
        <button
          onClick={() => navigate(`/events/${event.id}`)}
          className="btn btn-primary mt-3"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;
