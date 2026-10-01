import LikeButton from './LikeButton'

type ProfileCardProps = {
  name: string
  role: string
  avatarUrl?: string
  email: string
  github: string
}

function ProfileCard({ name, role, avatarUrl, email, github }: ProfileCardProps) {
  return (
    <article className="card">
      {avatarUrl && (
        <img src={`${import.meta.env.BASE_URL}profile.png`} alt={name} className="avatar" />
      )}
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">
        Hello! My name is {name}. I want to learn more about creating
        websites during this course.
      </p>
      <ul className="links">
        <li><a href={`mailto:${email}`}>Email</a></li>
        <li><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
      <LikeButton />
    </article>
  )
}

export default ProfileCard