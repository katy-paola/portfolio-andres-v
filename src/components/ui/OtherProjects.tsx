import { OTHER_PROJECTS } from "@/utils/const/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../retroui/Card";
import { cn } from "@/lib/utils";
import { Badge } from "../retroui/Badge";

export default function OtherProjects({ className }: { className?: string }) {
  return (
    <section className={cn(className)}>
      <h2 className="col-span-2 font-semibold text-2xl">Otros Proyectos</h2>
      <ul className="contents">
        {OTHER_PROJECTS.map((project, index) => (
          <li key={index} className="col-span-2 md:col-span-1 flex">
            <a
              className="contents"
              href={project.repoLink}
              title={project.description}
            >
              <Card className="flex flex-col gap-4 p-4">
                <CardHeader className="p-0">
                  <CardTitle className="font-sans text-lg font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant={"surface"} size={"sm"}>
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
