import Thumb from "./Thumb";
import Icon from "./Icon";

export default function ProjectCard({ project: p, onOpen }) {
  return (
    <button className="card card--click project-card" onClick={() => onOpen(p)} aria-haspopup="dialog">
      <Thumb src={p.thumbnail} title={p.title} />
      <div className="project-card__body">
        <span className="tag tag--accent">{p.category}</span>
        <h3>{p.title}</h3>
        <p>{p.shortDescription}</p>
        <ul className="chips chips--small">{p.technologies.slice(0, 5).map((t) => <li key={t}>{t}</li>)}</ul>
        <span className="card__more">View project<Icon name="arrow" size={16} /></span>
      </div>
    </button>
  );
}
