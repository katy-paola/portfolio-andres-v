interface igloolabRolesType {
  roleName: string;
  period: string;
  tasks: string[];
  stack: string[];
}

export const IGLOOLAB_ROLES: igloolabRolesType[] = [
  {
    roleName: "Fullstack web developer",
    period: "Sep. 2022 - Actualidad",
    tasks: [
      "Dirigí la planificación y ejecución de proyectos web, enfocándome en la optimización de procesos y la reducción de costos, logrando mejoras significativas en eficiencia y calidad.",
      "Optimicé despliegues de aplicaciones en producción, reduciendo costos mediante la evaluación y mejora de procesos.",
    ],
    stack: [
      "Next JS",
      "React",
      "Tailwind CSS",
      "Node JS",
      "Drupal",
      "Wordpress",
      "Go",
      "API REST",
      "TypeScript",
      "PostgreSQL",
    ],
  },
  {
    roleName: "Web Developer",
    period: "Sep. 2021 - Sep. 2022",
    tasks: [
      "Desarrollé Front-End con React JS, encargándome de la maquetación y despliegue de plataformas web.",
    ],
    stack: ["HTML", "React", "JavaScript", "Digital Ocean", "Mongo DB"],
  },
  {
    roleName: "Web Master",
    period: "Abr. 2021 - Sep. 2021",
    tasks: [
      "Administré y mantuve los sitios web corporativos, asegurando su rendimiento, seguridad y disponibilidad.",
      "Actualicé y optimicé el contenido en plataformas CMS como WordPress y Drupal.",
      "Implementé mejoras en la interfaz y en el posicionamiento SEO para aumentar la visibilidad de los sitios.",
    ],
    stack: ["WordPress", "Drupal", "HTML", "CSS", "JavaScript"],
  },
];

/**
 * 
 * <Popover>
                <PopoverTrigger asChild>
                  <header className="shadow-md hover:shadow active:shadow-none bg-transparent border-2 transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 px-4 py-1.5 text-base w-max">
                    <h4>Fullstack web developer</h4>
                    <p>Sep. 2022 - Actualidad</p>
                  </header>
                </PopoverTrigger>
                <PopoverContent className="w-80 font-sans">
                  <section>
                    <header>
                      <h4>Fullstack web developer</h4>
                      <p>Sep. 2022 - Actualidad</p>
                    </header>
                    <ul>
                      <li>
                        Dirigí la planificación y ejecución de proyectos web,
                        enfocándome en la optimización de procesos y la
                        reducción de costos, logrando mejoras significativas en
                        eficiencia y calidad.
                      </li>
                      <li>
                        Optimicé despliegues de aplicaciones en producción,
                        reduciendo costos mediante la evaluación y mejora de
                        procesos.
                      </li>
                    </ul>
                    <div className="flex flex-wrap">
                      <Badge variant={"surface"}>Next JS</Badge>
                      <Badge variant={"surface"}>React</Badge>
                      <Badge variant={"surface"}>Tailwind CSS</Badge>
                      <Badge variant={"surface"}>Node JS</Badge>
                      <Badge variant={"surface"}>Drupal</Badge>
                      <Badge variant={"surface"}>Wordpress</Badge>
                      <Badge variant={"surface"}>Go</Badge>
                      <Badge variant={"surface"}>API REST</Badge>
                      <Badge variant={"surface"}>TypeScript</Badge>
                      <Badge variant={"surface"}>PostgreSQL</Badge>
                    </div>
                  </section>
                </PopoverContent>
              </Popover>
 */
