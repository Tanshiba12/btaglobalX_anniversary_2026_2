import type { ComponentProps } from "react";
import type { LucideIcon } from "lucide-react";

type SafeIconProps = ComponentProps<LucideIcon> & {
  icon: LucideIcon;
};

export function SafeIcon({ icon: Icon, ...props }: SafeIconProps) {
  return <Icon {...props} suppressHydrationWarning />;
}
