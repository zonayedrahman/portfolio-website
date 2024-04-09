import React from "react";
import ProjectCard from "./ProjectCard";

type ProjectDisplayProps = {
    projects: {
        id: number;
        name: string;
        description: string;
        content: string;
        githubLink: string;
    }[];
};

const ProjectsDisplay = ({ projects }: ProjectDisplayProps) => {
    return (
        <div className=" w-full h-auto mt-24 flex flex-wrap items-center justify-center gap-[10%]">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectsDisplay;
