import { client } from "@/lib/sanity.client";
import { projectQuery } from "@/lib/sanity.query";
import { ProjectInterface } from "@/types/projects.interface";
import Project from "./project";

export default async function ProjectsSection() {
  const projects: ProjectInterface[] = await client.fetch(projectQuery);

  return <Project projects={projects} />;
}
