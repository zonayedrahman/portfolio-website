"use client";

import { useState, useEffect } from "react";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

// import { Link } from "react-router-dom";

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 280) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    return (
        <div className={scroll ? `header-scrolled  h-28` : `header  h-40`}>
            <div className="logo h-full w-1/6 hidden lg:flex justify-start items-center text-nowrap font-serif">
                <h1 className="text-2xl font-bold">Zonayed Rahman</h1>
            </div>

            <div className="h-full  w-full lg:w-4/6 flex items-center gap-6 ">
                <div className="links   flex justify-center lg:justify-end gap-12 lg:gap-24 lg:pr-16 w-3/6 lg:w-3/5 ">
                    <a className="link" href="#home">
                        Home
                    </a>
                    <a className="link text-nowrap" href="#about-me">
                        About Me
                    </a>
                    <a className="link" href="#projects">
                        Projects
                    </a>
                </div>

                <div className="flex gap-4 ">
                    <a
                        className="social-link"
                        href="https://facebook.com/zonayedRahman"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Facebook size={24} />
                    </a>
                    <a
                        className="social-link"
                        href="https://instagram.com/zonay.ed"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Instagram size={24} />
                    </a>

                    <a
                        className="social-link"
                        href="https://www.linkedin.com/in/zonayed-rahman-34b1aa18a/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Linkedin size={24} />
                    </a>
                </div>

                <div className="flex h-full w-1/6 ">
                    <a href="#contact" className="h-full w-full">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-transparent h-full w-full flex items-center justify-center hover:scale-y-125 hover:scale-x-110 transition-all duration-300 text-[1.2em] font-extralight"
                        >
                            Contact Me
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
