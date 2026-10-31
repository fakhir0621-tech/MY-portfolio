import { useEffect, useRef } from "react";
import useScrollLock from "../hooks/useScrollLock";
import Icon from "./Icon";

// Accessible dialog: Escape + backdrop click close it, focus is trapped, page scroll is locked.
export default function Modal({ title, onClose, children, wide = false, closeOnEscape = true, labelId }) {
  const ref = useRef(null);
  const closeRef = useRef(null);
  useScrollLock(true);

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    return () => previous?.focus?.();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && closeOnEscape) { e.stopPropagation(); onClose(); }
      if (e.key === "Tab" && ref.current) {
        const f = ref.current.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, closeOnEscape]);

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} className={`modal ${wide ? "modal--wide" : ""}`} role="dialog" aria-modal="true" aria-labelledby={labelId}>
        <div className="modal__bar">
          <h3 id={labelId} className="modal__title">{title}</h3>
          <button ref={closeRef} className="icon-btn" onClick={onClose} aria-label="Close">
            <Icon name="close" />
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}
