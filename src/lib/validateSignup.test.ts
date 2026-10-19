import { test, expect } from 'vitest'
import { validateSignup } from './validateSignup'

const valid = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
}

test('1 accepts valid values', () => {
  expect(validateSignup(valid, 10)).toEqual({})
})

test('2 rejects 0 tickets', () => {
  const errors = validateSignup({ ...valid, tickets: '0' }, 10)
  expect(errors.tickets).toBe('Choose 1 to 4 tickets')
})

test('3 rejects 5 tickets', () => {
  const errors = validateSignup({ ...valid, tickets: '5' }, 10)
  expect(errors.tickets).toBe('Choose 1 to 4 tickets')
})

test('4 rejects decimal tickets', () => {
  const errors = validateSignup({ ...valid, tickets: '1.5' }, 10)
  expect(errors.tickets).toBe('Choose 1 to 4 tickets')
})

test('5 accepts 4 tickets if seats allow', () => {
  expect(validateSignup({ ...valid, tickets: '4' }, 10)).toEqual({})
})

test('6 rejects if tickets > seatsLeft', () => {
  const errors = validateSignup({ ...valid, tickets: '3' }, 2)
  expect(errors.tickets).toBe('Only 2 seats left')
}) 