import { useState } from "react";
import { services } from "../data/services";
import ServiceDetails from "./ServiceDetails";
import Icon from "./Icon";

export default function Services() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <h2>Services</h2>
        <p className="section__intro">Select a service to see what it includes.</p>
        <div className="grid grid--services">
          {services.map((s) => (
            <button key={s.id} className="card card--click" onClick={() => setSelected(s)} aria-haspopup="dialog">
              <span className="card__icon"><Icon name={s.icon} size={26} /></span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <span className="card__more">View details<Icon name="arrow" size={16} /></span>
            </button>
          ))}
        </div>
      </div>
      {selected && <ServiceDetails service={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
