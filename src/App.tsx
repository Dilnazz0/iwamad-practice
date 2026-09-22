import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import type { Skill } from './components/SkillBadge';

const skills: Skill[] = [
  { id: 1, label: 'HTML' },
  { id: 2, label: 'Python' },
  { id: 3, label: 'C++' },
  { id: 4, label: 'Git and GitHub' },
];

function App() {
  return (
    <>
      <Header title="Dilnaz - Personal Profile" subtitle="Future Web Developer" />
      <main className="main">
        <ProfileCard
          name="Dilnaz"
          role="Future Web Developer"
          avatarUrl="/profile.png"
          email="d_yeshmukhambet@kbtu.kz"
          github="https://github.com/Dilnazz0"
          skills={skills}
        />
      </main>
      <Footer year={2026} author="Dilnaz" />
    </>
  );
}

export default App;