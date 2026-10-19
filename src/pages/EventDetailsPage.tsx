import { useParams, Link } from 'react-router'
import { events } from '../data/events'
import EventSignupForm from '../components/EventSignupForm'

function EventDetailsPage() {
  const { eventId } = useParams()
  const event = events.find((item) => item.id === Number(eventId))

  if (!event) {
    return (
      <main className="main">
        <section className="ui-card">
          <h1>Event not found</h1>
          <p>No event with id {eventId}.</p>
          <Link to="/events" className="project-link">Back to all events →</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="main">
      <article className="ui-card">
        <h1>{event.title}</h1>
        <p className="role">{event.date}</p>
        <p className="role">{event.place}</p>
        
        <EventSignupForm event={event} />

        <Link to="/events" className="project-link" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
          ← Back to all events
        </Link>
      </article>
    </main>
  )
}

export default EventDetailsPage