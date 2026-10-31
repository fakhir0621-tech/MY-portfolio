import { useState } from "react";

export default function Thumb({ src, title, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    const initials = title.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
    return (
      <div className={`thumb thumb--placeholder ${className}`} role="img" aria-label={`${title} preview placeholder`}>
        <span>{initials}</span>
      </div>
    );
  }
  return <img className={`thumb ${className}`} src={src} alt={`${title} preview`} loading="lazy" onError={() => setFailed(true)} />;
}
