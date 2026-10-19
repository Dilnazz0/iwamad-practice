import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import EventsPage from './EventsPage'
import { events } from '../data/events'

test('events page shows one card per event', () => {
  render(
    <MemoryRouter>
      <EventsPage />
    </MemoryRouter>
  )
  const headings = screen.getAllByRole('heading', { level: 2 })
  expect(headings).toHaveLength(events.length)
})