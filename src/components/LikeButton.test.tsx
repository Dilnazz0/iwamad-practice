import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LikesProvider } from '../context/LikesContext'
import LikeButton from './LikeButton'
import { test, expect } from 'vitest'

test('like button increments the count when clicked', async () => {
  const user = userEvent.setup()

  render(
    <LikesProvider>
      <LikeButton />
    </LikesProvider>
  )

  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('(0)')

  await user.click(button)

  expect(button).toHaveTextContent('(1)')
})