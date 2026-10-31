import Modal from "./Modal";
import Icon from "./Icon";
import { site } from "../data/config";

export default function ServiceDetails({ service: s, onClose }) {
  return (
    <Modal title={s.title} onClose={onClose} labelId="service-title">
      {s.description.map((d) => <p key={d}>{d}</p>)}
      <section className="detail-block">
        <h4>What's included</h4>
        <ul className="checklist">{s.points.map((p) => <li key={p}><Icon name="check" size={18} />{p}</li>)}</ul>
      </section>
      <section className="detail-block">
        <h4>Technologies</h4>
        <ul className="chips">{s.tech.map((t) => <li key={t}>{t}</li>)}</ul>
      </section>
      <div className="btn-row">
        <a className="btn btn--primary" href="#contact" onClick={onClose}>Discuss this service</a>
        <a className="btn btn--ghost" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
      </div>
    </Modal>
  );
}
