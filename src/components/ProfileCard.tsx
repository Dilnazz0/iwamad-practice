import { useState } from 'react';
import SkillBadge, { type Skill } from './SkillBadge';

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
  email: string;
  github: string;
  skills: Skill[];
};

function ProfileCard({ name, role, avatarUrl, email, github, skills }: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="card">
      {avatarUrl && <img src={`${import.meta.env.BASE_URL}profile.png`} alt={name} className="avatar" />}
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">
        Hello! My name is {name}. I want to learn more about creating
        websites during this course.
      </p>
      <ul className="links">
        <li>
          <a href={`mailto:${email}`}>Email</a>
        </li>
        <li>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>

      <h3>Skills</h3>
      {skills.length === 0 ? (
        <p className="empty">No skills added yet.</p>
      ) : (
        <ul className="skills">
          {skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      )}

      
      <button
        type="button"
        className={liked ? 'btn liked' : 'btn'}
        onClick={() => setLiked(!liked)}
      >
        {liked ? '💜 Liked' : 'Like'}
      </button>
    </article>
  );
}

export default ProfileCard;