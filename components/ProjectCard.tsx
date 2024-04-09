import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

type ProjectCardProps = {
    project: {
        name: string;
        description: string;
        content: string;
        githubLink: string;
    };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card className="h-[350px] w-[350px] bg-slate-800 text-white flex flex-col z-10">
            <CardHeader className=" h-[30%]  pt-6 mb-2">
                <CardTitle className="text-[1.4em] text-nowrap">
                    {project.name}
                </CardTitle>
                <CardDescription className="">
                    {project.description}
                </CardDescription>
            </CardHeader>
            <CardContent className=" h-[50%] text-[0.9rem]">
                <p>{project.content}</p>
            </CardContent>
            <CardFooter className=" h-[20%] flex flex-col w-full items-end">
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>View on Github</Button>
                </a>
                {/* <p>View on GitHub:</p>
                <p>{project.githubLink}</p> */}
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
