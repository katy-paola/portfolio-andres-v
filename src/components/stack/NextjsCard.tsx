import { cn } from "@/lib/utils";
import { NextjsIcon } from "../icons/NextjsIcon";

export default function NextjsCard({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span className={cn(className)}>
      Next JS
      <NextjsIcon className={cn(iconClassName)} />
    </span>
  );
}
