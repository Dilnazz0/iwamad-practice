import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <main className="main">
      <section className="card">
        <h2>404 — Page not found</h2>
        <p>Looks like this page doesn't exist.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </section>
    </main>
  )
}

export default NotFoundPage