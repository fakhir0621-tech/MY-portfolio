import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Latest projects</h2>
        <p className="section__intro">Open a project to see its features, technologies and screenshots.</p>
        <div className="grid grid--projects">
          {projects.map((p) => <ProjectCard key={p.id} project={p} onOpen={setSelected} />)}
        </div>
      </div>
      {selected && <ProjectDetails project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
