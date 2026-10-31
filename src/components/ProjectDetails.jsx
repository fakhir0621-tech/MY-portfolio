import { useState } from "react";
import Modal from "./Modal";
import Thumb from "./Thumb";
import ProjectGallery from "./ProjectGallery";
import Icon from "./Icon";

const Block = ({ title, children }) => (
  <section className="detail-block">
    <h4>{title}</h4>
    {children}
  </section>
);

export default function ProjectDetails({ project: p, onClose }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <Modal title={p.title} onClose={onClose} wide labelId="project-title" closeOnEscape={!lightboxOpen}>
      <Thumb src={p.thumbnail} title={p.title} className="detail-hero" />
      <div className="meta-row">
        <span className="tag tag--accent">{p.category}</span>
        {p.status && <span className="tag">{p.status}</span>}
      </div>
      <Block title="Overview"><p>{p.overview}</p></Block>
      {p.purpose && <Block title="Purpose"><p>{p.purpose}</p></Block>}
      {p.role && <Block title="My role"><p>{p.role}</p></Block>}
      <Block title="Technologies used">
        <ul className="chips">{p.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
      </Block>
      <Block title="Key features">
        <ul className="checklist">{p.features.map((f) => <li key={f}><Icon name="check" size={18} />{f}</li>)}</ul>
      </Block>
      {p.implementation?.length > 0 && (
        <Block title="How it works">
          <ul className="plain-list">{p.implementation.map((f) => <li key={f}>{f}</li>)}</ul>
        </Block>
      )}
      {p.note && <p className="notice">{p.note}</p>}
      <Block title="Gallery">
        <ProjectGallery images={p.gallery} projectTitle={p.title} onLightbox={setLightboxOpen} />
      </Block>
      <div className="btn-row">
        {p.github && <a className="btn btn--ghost" href={p.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={18} />View on GitHub</a>}
        {p.live && <a className="btn btn--primary" href={p.live} target="_blank" rel="noopener noreferrer"><Icon name="external" size={18} />Live demo</a>}
      </div>
    </Modal>
  );
}
