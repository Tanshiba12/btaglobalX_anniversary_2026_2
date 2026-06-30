import Image from "next/image";
import { brandAssets } from "@/data/assets";

export function StickyHeader() {
  return (
    <header className="sticky-header" aria-label="BTA GlobalX">
      <a className="sticky-header-logo" href="#top" aria-label="Back to top">
        <Image
          alt={brandAssets.logo.alt}
          height={112}
          priority
          src={brandAssets.logo.src}
          unoptimized
          width={112}
        />
      </a>
    </header>
  );
}
