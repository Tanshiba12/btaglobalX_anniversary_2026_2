import clsx from "clsx";
import Image from "next/image";
import { eventDetails } from "@/data";
import { brandAssets } from "@/data/assets";
export function Loader({
  onSkip,
  step,
  visible
}: {
  onSkip: () => void;
  step: number;
  visible: boolean;
}) {
  const lines = ["RSVP received", "Gala night loading", eventDetails.date, eventDetails.venue];

  return (
    <div className={clsx("showcase-loader", !visible && "is-hidden")} aria-hidden={!visible}>
      <div className="loader-mark">
        <Image alt="" height={88} src={brandAssets.logo.src} unoptimized width={88} />
      </div>
      <div className="loader-copy" aria-live="polite">
        <p>{lines[Math.min(step, lines.length - 1)]}</p>
        <strong>BTA GlobalX</strong>
        <span>{step < 2 ? "Anniversary Gala Night" : "Excellence Awards 2026"}</span>
      </div>
      <div className="loader-steps" aria-label="Loading progress">
        {lines.map((line, index) => (
          <span className={clsx(index <= step && "is-active")} key={line} />
        ))}
      </div>
      <button type="button" onClick={onSkip}>
        Skip intro
      </button>
    </div>
  );
}
