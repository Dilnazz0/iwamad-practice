import Card from '../components/ui/Card'

function ContactPage() {
  return (
    <main className="main">
      <Card>
        <h2>Contact</h2>
        <ul className="links">
          <li>
            <a href="mailto:d_yeshmukhambet@kbtu.kz">Email</a>
          </li>
          <li>
            <a href="https://github.com/Dilnazz0" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </Card>
    </main>
  )
}

export default ContactPage