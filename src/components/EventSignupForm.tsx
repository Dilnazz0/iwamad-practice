import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import TextField from './ui/TextField'
import Button from './ui/Button'
import { validateSignup, type SignupValues } from '../lib/validateSignup'
import type { CampusEvent } from '../data/events'

type EventSignupFormProps = {
  event: CampusEvent
}

function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  })
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [bookedMessage, setBookedMessage] = useState('')

  const errors = validateSignup(values, seatsLeft)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length === 0) {
      const ticketsNum = Number(values.tickets)
      setSeatsLeft((prev) => prev - ticketsNum)
      setBookedMessage(`Booked: ${ticketsNum} for ${values.fullName}.`)
      setValues({ fullName: '', email: '', tickets: '1' })
      setTouched({})
      setSubmitAttempted(false)
    }
  }

  function showError(field: keyof SignupValues): string | undefined {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  return (
    <section style={{ marginTop: '2rem', width: '100%' }}>
      <p style={{ fontWeight: 'bold' }}>Seats left: {seatsLeft}</p>
      
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('fullName')}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('email')}
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min="1"
          max="4"
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('tickets')}
        />
        
        <Button type="submit">Book</Button>
      </form>

      {bookedMessage && (
        <p role="status" style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold' }}>
          {bookedMessage}
        </p>
      )}
    </section>
  )
}

export default EventSignupForm