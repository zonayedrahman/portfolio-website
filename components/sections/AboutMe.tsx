import Image from "next/image";
import selfImage from "@/assets/Zonayed.jpeg";
import React from "react";

const AboutMe = () => {
    return (
        <div className="h-screen bg-gradient-secondary">
            <div className="h-full bg-zinc-900 rounded-big mx-24 my-54 ">
                <div className="h-full flex justify-between">
                    <div className="left-side  h-full w-full flex justify-end items-center">
                        <Image
                            src={selfImage}
                            alt="Zonayed"
                            width={200}
                            height={200}
                            className="rounded-full h-80 w-80 object-cover  mr-12 mb-48 border-4"
                        />
                    </div>

                    <div className="right-side w-full h-full text-white ">
                        <div className="h-full flex flex-col justify-center gap-0 pb-64 pl-6 pr-[30%] ">
                            <div className="font-bold text-[4em] font-serif pb-8">
                                Hello
                            </div>
                            <h1 className="font-bold text-gray-400 pb-2">
                                A bit about me
                            </h1>
                            <p>
                                I am currently enrolled in the M.S.
                                Cybersecurity program in NYU Tandon School of
                                Engineering. I recently graduated with a B.S. in
                                Computer Science from Tandon. I am a software
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
