import { FEATURED_PROJECTS } from "@/utils/const/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../retroui/Card";
import { cn } from "@/lib/utils";
import { Badge } from "../retroui/Badge";

export default function FeaturedProjects({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={cn(className)}>
      <h2 className="col-span-2 font-semibold text-2xl">
        Proyectos destacados
      </h2>
      <ul className="contents">
        {FEATURED_PROJECTS.map((project, index) => (
          <li key={index} className="col-span-2 flex">
            <a
              className="contents"
              href={project.repoLink}
              title={project.description}
            >
              <Card className="flex gap-4 p-4 flex-col md:flex-row">
                <img
                  src={project.coverUrl}
                  alt=""
                  className="flex-1 object-contain md:max-w-1/2"
                />
                <div className="flex-1 flex flex-col gap-4 justify-between">
                  <CardHeader className="p-0">
                    <CardTitle className="font-sans text-lg font-bold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-1">
                      {project.stack.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant={"surface"} size={"sm"}>
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
