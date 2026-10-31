import { useEffect, useRef } from "react";
import useScrollLock from "../hooks/useScrollLock";
import Icon from "./Icon";

// Separate from the project modal: closing it returns to the project details.
export default function ImageLightbox({ images, index, onChange, onClose }) {
  const closeRef = useRef(null);
  const touchX = useRef(null);
  useScrollLock(true);
  const count = images.length;
  const go = (d) => onChange((index + d + count) % count);

  useEffect(() => { closeRef.current?.focus(); }, []);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { e.stopPropagation(); e.stopImmediatePropagation(); onClose(); }
      else if (e.key === "ArrowLeft" && count > 1) go(-1);
      else if (e.key === "ArrowRight" && count > 1) go(1);
      else if (e.key === "Tab") { e.preventDefault(); closeRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  });

  const img = images[index];
  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged screenshot"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null || count < 2) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1);
        touchX.current = null;
      }}
    >
      <button ref={closeRef} className="lightbox__close" onClick={onClose} aria-label="Close enlarged image">
        <Icon name="close" size={26} />
      </button>
      {count > 1 && (
        <button className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label="Previous image">
          <Icon name="prev" size={26} />
        </button>
      )}
      <figure className="lightbox__figure">
        <img src={img.src} alt={img.alt} />
        <figcaption>{img.alt} ({index + 1} / {count})</figcaption>
      </figure>
      {count > 1 && (
        <button className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label="Next image">
          <Icon name="next" size={26} />
        </button>
      )}
    </div>
  );
}
