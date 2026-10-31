import { site } from "../data/config";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__role">{site.role}</p>

          <h1>
            <span style={{ color: "#ffb731" }}>
              Building Modern Websites
            </span>{" "}
            &amp; Intelligent Web Applications
          </h1>

          <p className="lead">
            I develop responsive, user-focused websites and full-stack web applications using React, Node.js, Express,
            MongoDB, and modern web technologies. From interactive frontend experiences to backend APIs and AI-powered
            integrations, I help turn ideas into practical digital solutions.
          </p>

          <div className="btn-row">
            <a className="btn btn--primary" href="#contact">
              Contact Me
            </a>

            <a
              className="btn btn--ghost"
              href={site.cv}
              download={site.cvFileName}
            >
              <Icon name="download" size={18} />
              Download CV
            </a>

            <a className="btn btn--ghost" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero__photo">
          <img
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
  );
}