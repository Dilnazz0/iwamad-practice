import ProfileCard from '../components/ProfileCard'

function HomePage() {
  return (
    <main className="main">
      <ProfileCard
        name="Dilnaz"
        role="Future Web Developer"
        avatarUrl="/profile.png"
        email="d_yeshmukhambet@kbtu.kz"
        github="https://github.com/Dilnazz0"
      />
    </main>
  )
}

export default HomePage