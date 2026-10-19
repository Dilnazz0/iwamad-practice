import EventCard from '../components/EventCard'
import { events } from '../data/events'

function EventsPage() {
  return (
    <main className="main">
      <div className="posts-list">
        <h1>Events</h1>
        <div className="card-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default EventsPage