import clsx from "clsx";
import { DockControls } from "./DockControls";
import type { DockMode } from "../hooks/useDockMode";

export function StickyBottomBar({ mode }: { mode: DockMode }) {
  return (
    <nav
      className={clsx(
        "sticky-bottom-bar",
        mode === "hidden" && "is-hidden",
        mode === "footer" && "is-docked"
      )}
      aria-label="Sticky page actions"
    >
      <DockControls />
    </nav>
  );
}
