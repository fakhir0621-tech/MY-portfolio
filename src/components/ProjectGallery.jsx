import { useEffect, useState } from "react";
import ImageLightbox from "./ImageLightbox";
import Icon from "./Icon";

export default function ProjectGallery({ images, projectTitle, onLightbox }) {
  const [status, setStatus] = useState({}); // index -> "ok" | "missing"
  const [open, setOpen] = useState(null); // index in loaded list

  useEffect(() => { onLightbox?.(open !== null); }, [open, onLightbox]);

  const loaded = images
    .map((img, i) => ({ ...img, i, alt: `${projectTitle}: ${img.alt}` }))
    .filter((img) => status[img.i] === "ok");

  return (
    <>
      <ul className="gallery">
        {images.map((img, i) => {
          const missing = status[i] === "missing";
          const pos = loaded.findIndex((l) => l.i === i);
          return (
            <li key={img.src}>
              {missing ? (
                <div className="gallery__empty">
                  <Icon name="image" size={26} />
                  <span>{img.src.split("/").slice(-1)[0]}</span>
                </div>
              ) : (
                <button className="gallery__item" onClick={() => pos >= 0 && setOpen(pos)} aria-label={`Enlarge ${img.alt}`} disabled={pos < 0}>
                  <img
                    src={img.src}
                    alt={`${projectTitle}: ${img.alt}`}
                    loading="lazy"
                    onLoad={() => setStatus((s) => ({ ...s, [i]: "ok" }))}
                    onError={() => setStatus((s) => ({ ...s, [i]: "missing" }))}
                  />
                </button>
              )}
            </li>
          );
        })}
      </ul>
      {loaded.length === 0 && Object.keys(status).length === images.length && (
        <p className="muted small">Screenshots will appear here once the image files are added to the project's folder in public/project-assets.</p>
      )}
      {open !== null && loaded[open] && (
        <ImageLightbox images={loaded} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
