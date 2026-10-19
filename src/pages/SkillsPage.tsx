import Card from '../components/ui/Card'
import SkillBadge, { type Skill } from '../components/SkillBadge'

const skills: Skill[] = [
  { id: 1, label: 'HTML' },
  { id: 2, label: 'Python' },
  { id: 3, label: 'C++' },
  { id: 4, label: 'Git and GitHub' },
]

function SkillsPage() {
  return (
    <main className="main">
      <Card>
        <h2>Skills</h2>
        {skills.length === 0 ? (
          <p className="empty">No skills added yet.</p>
        ) : (
          <ul className="skills">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </ul>
        )}
      </Card>
    </main>
  )
}

export default SkillsPage