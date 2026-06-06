export function getInitials(name: string) {
  return name
    .split(" ")
    .filter((part) => !["Dr.", "Prof.", "Dato", "Sri", "H.E.", "Amb."].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
