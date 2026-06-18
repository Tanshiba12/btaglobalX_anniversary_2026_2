import Image from "next/image";
import { brandAssets } from "@/data/assets";
export function StickyHeader() {
  return (
    <header className="sticky-header" aria-label="BTA GlobalX">
      <a className="sticky-header-logo" href="#top" aria-label="BTA GlobalX home">
        <Image alt="" height={72} src={brandAssets.logo.src} style={{ height: "auto", width: "100%" }} unoptimized width={72} />
      </a>
    </header>
  );
}
