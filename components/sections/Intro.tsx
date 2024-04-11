"use client";

import { useState, useEffect } from "react";

// import reactLogo from "@/assets/react.svg";
import homeImg from "@/assets/home-img.svg";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Intro = () => {
    const rotatingTexts = [
        "code",
        "learn new things",
        "build projects",
        "teach",
        "Lift",
        "Run",
        "Swim",
        "Read",
        "Write",
        "Travel",
        "Cook",
        "Eat",
        "Sleep",
        "Repeat",
    ];

    const [text, setText] = useState("");
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        const tick = () => {
            let i = loopNum % rotatingTexts.length;

            let fullText = rotatingTexts[i];
            // console.log(fullText, i);

            let updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta((prevDelta) => prevDelta / 2);
            }

            if (!isDeleting && updatedText === fullText) {
                setDelta(period);
                setIsDeleting(true);
            } else if (isDeleting && updatedText === "") {
                setDelta(300 - Math.random() * 100);
                setIsDeleting(false);
                setloopNum(loopNum + 1);
            }
        };

        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    return (
        <div className="w-full flex flex-col sm:flex-row justify-between h-screen sm:pt-20 bg-gradient-primary">
            <div className="w-full sm:w-[60%] h-full flex flex-col gap-4 items-center pt-36 sm:pt-72 sm:pl-48 text-white">
                <div className="w-[70%]">
                    <h1 className="opacity-40 ">Welcome to my website</h1>
                    <h1
                        className="text-left font-bold pt-4 sm:pt-0 text-[2em] sm:text-[3.2rem]"
                        style={{
                            background:
                                "linear-gradient(to right, purple, red)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Hi, I&apos;m Zonayed
                    </h1>
                </div>

                <div className=" w-[70%]">
                    <p className="text-left text-[2.4rem] mb-6 font-thin">
                        I love to {text}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button variant="secondary" className="">
                            <a href="#about-me">About Me</a>
                        </Button>
                        <Button variant="outline" className="bg-transparent">
                            <a href="#contact">Contact Me</a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full h-full sm:w-[40%] flex  sm:items-start justify-center sm:pt-56 sm:pr-64 home-bounce ">
                {/* <img src={homeImg} alt="home-logo" className="" /> */}
                <Image src={homeImg} alt="home-logo" />
            </div>
        </div>
    );
};

export default Intro;
