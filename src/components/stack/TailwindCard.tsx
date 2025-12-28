import { cn } from "@/lib/utils";
import { TailwindIcon } from "../icons/TailwindIcon";

export default function TailwindCard({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span className={cn(className)}>
      Tailwind
      <TailwindIcon className={cn(iconClassName)} />
    </span>
  );
}
