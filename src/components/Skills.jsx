import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills and technologies</h2>
        <p className="section__intro">The tools and capabilities I use to build full-stack web applications.</p>
        <div className="grid grid--skills">
          {skillGroups.map((g) => (
            <article key={g.title} className="card">
              <h3>{g.title}</h3>
              <ul className="chips">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
