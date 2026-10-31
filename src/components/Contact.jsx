import { site } from "../data/config";
import Icon from "./Icon";

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <div>
          <h2>Let's work together</h2>
          <p className="lead">
            Have a website or web application in mind, a job opportunity or a collaboration? Send me an email or start a
            WhatsApp chat with a message ready to go.
          </p>
        </div>
        <div className="contact__actions">
          <a className="contact__row" href={site.mailto}>
            <Icon name="mail" /><span><strong>Email</strong><small>{site.email}</small></span>
          </a>
          <a className="contact__row" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" /><span><strong>WhatsApp</strong><small>{site.whatsappDisplay}. The message is pre-typed; you press Send.</small></span>
          </a>
          <a className="contact__row" href={site.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" /><span><strong>GitHub</strong><small>Green Tours Planner repository</small></span>
          </a>
          {site.linkedin && (
            <a className="contact__row" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" /><span><strong>LinkedIn</strong><small>Connect with me</small></span>
            </a>
          )}
          <div className="btn-row">
            <a className="btn btn--primary" href={site.mailto}>Email me</a>
            <a className="btn btn--ghost" href={site.gmailCompose} target="_blank" rel="noopener noreferrer">Open in Gmail</a>
          </div>
        </div>
      </div>
    </section>
  );
}
