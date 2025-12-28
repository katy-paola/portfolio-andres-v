import { cn } from "@/lib/utils";
import { ReactIcon } from "../icons/ReactIcon";

export default function ReactCard({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span className={cn(className)}>
      React
      <ReactIcon className={cn(iconClassName)} />
    </span>
  );
}
