import { StaticImageData } from "next/image";
import React from "react";

type SkillBoxProps = {
    skill: {
        name: string;
        icon: string;
    };
};

const SkillBox = ({ skill }: SkillBoxProps) => {
    return (
        <div className="w-full ">
            <div className="hover:bg-emerald-900 bg-opacity-40 hover:bg-opacity-80  hover:cursor-pointer  underline-offset-4 border-4 h-40 w-36 rounded-lg flex flex-col gap-6 items-center pt-4 font-bold border-white border-opacity-15  hover:border-2 hover:border-opacity-70 transition-all duration-300">
                {skill.icon && (
                    <img
                        src={skill.icon}
                        alt="no icon found"
                        className="pt-2 w-20 h-16 object-contain"
                    />
                )}
                <p className="text-[.8rem] w-full text-center ">{skill.name}</p>
            </div>
        </div>
    );
};

export default SkillBox;
