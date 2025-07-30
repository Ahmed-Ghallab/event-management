import React, { useEffect, useState } from 'react';
import { getEvents, deleteEvent, addEvent, updateEvent } from '../services/storage';
import EventForm from '../components/EventForm';
import { toast } from 'react-toastify';

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const handleAddOrUpdate = (data) => {
    if (editingEvent) {
      data.id = editingEvent.id;
      updateEvent(data);
      toast.success('Event updated!');
    } else {
      addEvent(data);
      toast.success('Event added!');
    }
    setEvents(getEvents());
    setEditingEvent(null);
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    window.scrollTo(0, 0); // optional
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id);
      setEvents(getEvents());
      toast.info('Event deleted');
    }
  };

  return (
    <div>
      <h2 className="mb-4">Organizer Dashboard</h2>

      <div className="mb-5">
        <h5>{editingEvent ? 'Edit Event' : 'Add New Event'}</h5>
        <EventForm onSubmit={handleAddOrUpdate} initialData={editingEvent} />
      </div>

      <h5>All Events</h5>
      {events.length === 0 ? (
        <p>No events yet.</p>
      ) : (
        <ul className="list-group">
          {events.map(event => (
            <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{event.title}</strong> - {event.date}
              </div>
              <div>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(event)}>Edit</button>
                <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(event.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
