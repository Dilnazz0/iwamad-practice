import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

function Card({ children }: CardProps) {
  return <article className="ui-card">{children}</article>
}

export default Card