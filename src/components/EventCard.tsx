import { Link } from 'react-router'
import Card from './ui/Card'
import Tag from './ui/Tag'
import type { CampusEvent } from '../data/events'

type EventCardProps = {
  event: CampusEvent
}

function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <h2>{event.title}</h2>
      <p className="role">{event.date}</p>
      <p className="role">{event.place}</p>
      <Tag label={`${event.seats} seats`} />
      <Link to={`/events/${event.id}`} className="project-link">
        Details →
      </Link>
    </Card>
  )
}

export default EventCard