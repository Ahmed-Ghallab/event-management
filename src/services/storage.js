const EVENTS_KEY = 'events_data';

const sampleEvents = [/*... كما هو ...*/];

export function getEvents() {
  const data = localStorage.getItem(EVENTS_KEY);
  if (!data) {
    localStorage.setItem(EVENTS_KEY, JSON.stringify(sampleEvents));
    return sampleEvents;
  }
  return JSON.parse(data);
}

export function getEventById(id) {
  const events = getEvents();
  return events.find(event => event.id === Number(id));
}

export function addEvent(newEvent) {
  const events = getEvents();
  newEvent.id = Date.now();
  localStorage.setItem(EVENTS_KEY, JSON.stringify([...events, newEvent]));
}

export function updateEvent(updatedEvent) {
  const events = getEvents();
  const updatedList = events.map(e => e.id === updatedEvent.id ? updatedEvent : e);
  localStorage.setItem(EVENTS_KEY, JSON.stringify(updatedList));
}

export function deleteEvent(id) {
  const events = getEvents();
  const filtered = events.filter(e => e.id !== id);
  localStorage.setItem(EVENTS_KEY, JSON.stringify(filtered));
}
