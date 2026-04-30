import Image from "next/image";
import type { ActConfig } from "@/types/content";

type ActVisualProps = {
  act: ActConfig;
};

export function ActVisual({ act }: ActVisualProps) {
  return (
    <div aria-hidden="true" className={`act-visual layout-${act.layout}`}>
      <Image
        alt=""
        className="generated-act-asset"
        data-act-asset="true"
        height={900}
        priority={act.id === "hero"}
        src={act.primaryAsset}
        unoptimized
        width={1200}
      />
    </div>
  );
}
