import { Project } from "@/generated/prisma"
import { containerVariants } from "@/lib/constants";
import { motion } from "framer-motion";
import ProjectCard from "../project-card";

type ProjectsProps = {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          projectId={project.id}
          title={project.title}
          createdAt={project.createdAt}
          isDeleted={project.isDeleted}
          slideData={project?.slides}
          src={project.thumbnail || "/outlinr-png"}
        />))}
    </motion.div>
  );
}
