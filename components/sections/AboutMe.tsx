import Image from "next/image";
import selfImage from "@/assets/Zonayed.jpeg";
import React from "react";
import SkillBox from "../SkillBox";
import homeImg from "@/assets/home-img.svg";
import SelfImg from "@/assets/Zonayed.jpeg";

const skills = [
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
];

const AboutMe = () => {
    return (
        <div className="h-screen bg-gradient-secondary">
            <div className="h-[90%] bg-zinc-900 rounded-big mx-24 my-54 ">
                <div className="h-full  flex justify-between ">
                    <div className="left-side  w-full  pl-16 pt-24 text-white grid grid-cols-4 text-center">
                        {skills.map((skill) => (
                            <SkillBox skill={skill} key={skill.name} />
                        ))}

                        <div className="grid-cols-none"></div>
                    </div>

                    <div className="right-side w-full h-full text-white ">
                        <div className="h-[50%]  flex justify-end items-center pr-[25%] pt-40">
                            <Image
                                src={SelfImg}
                                alt="Zonayed Rahman"
                                className="rounded-full"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="h-[50%] flex flex-col justify-end gap-0 pb-40 pl-12 pr-[25%] ">
                            <div className="font-bold text-[2em] font-serif pb-8">
                                About
                            </div>

                            <p>
                                I am currently enrolled in the M.S.
                                Cybersecurity program in NYU Tandon School of
                                Engineering. I recently graduated with a B.S. in
                                Computer Science from Tandon. A software
                                engineer with a passion to learn through having
                                an impact and hands-on experience. I am a quick
                                learner and a team player. I am always looking
                                out for new things to learn and new challenges
                                to take on.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
