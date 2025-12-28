import { cn } from "@/lib/utils";
import { NodejsIcon } from "../icons/NodejsIcon";

export default function NodejsCard({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span className={cn(className)}>
      Node JS
      <NodejsIcon className={cn(iconClassName)} />
    </span>
  );
}
