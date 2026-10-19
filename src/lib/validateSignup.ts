export type SignupValues = {
  fullName: string
  email: string
  tickets: string
}

export type SignupErrors = Partial<Record<keyof SignupValues, string>>

const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateSignup(values: SignupValues, seatsLeft: number): SignupErrors {
  const errors: SignupErrors = {}

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name'
  }

  if (!EMAIL_SHAPE.test(values.email)) {
    errors.email = 'Enter a valid email, like name@example.com'
  }

  const ticketsNum = Number(values.tickets)
  if (!Number.isInteger(ticketsNum) || ticketsNum < 1 || ticketsNum > 4) {
    errors.tickets = 'Choose 1 to 4 tickets'
  } else if (ticketsNum > seatsLeft) {
    errors.tickets = `Only ${seatsLeft} seats left`
  }

  return errors
}