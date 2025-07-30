import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById } from '../services/storage';
import { toast } from 'react-toastify';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = getEventById(id);
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      toast.error('Event not found');
      navigate('/');
    }
  }, [id, navigate]);

  const handleRegister = () => {
    toast.success('Registered successfully!');
  };

  if (!event) return null;

  return (
    <div className="card shadow p-4">
      <h2 className="mb-3">{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Organizer:</strong> {event.organizer}</p>
      <p><strong>Description:</strong></p>
      <p>{event.description}</p>

      <button className="btn btn-success mt-3" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default EventDetails;
