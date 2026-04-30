"use client";

import { X } from "lucide-react";
import type { DetailPayload } from "@/types/content";

type DetailModalProps = {
  detail: DetailPayload | null;
  onClose: () => void;
};

export function DetailModal({ detail, onClose }: DetailModalProps) {
  if (!detail) {
    return null;
  }

  return (
    <div className="detail-backdrop" role="presentation" onClick={onClose}>
      <section
        aria-modal="true"
        className="detail-modal"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close detail"
          className="icon-button detail-close"
          type="button"
          onClick={onClose}
        >
          <X aria-hidden="true" />
        </button>
        {detail.eyebrow ? <p className="eyebrow">{detail.eyebrow}</p> : null}
        <h2>{detail.title}</h2>
        <p>{detail.body}</p>
        {detail.items?.length ? (
          <ul className="detail-list">
            {detail.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </section>
    </div>
  );
}
