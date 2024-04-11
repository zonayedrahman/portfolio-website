import Header from "@/components/Header";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Image from "next/image";

export default function Home() {
    return (
        <main className="App relative">
            <h2 className="fixed  bottom-6 right-10 text-lg text-white text-opacity-40 z-20">
                IN PROGRESS 🚧! Can still contact me at the bottom!
            </h2>
            <Header />

            <div className="h-auto" id="home">
                <Intro />
            </div>

            <div className="h-auto scroll-mt-28" id="about-me">
                <AboutMe />
            </div>

            <div className="h-auto" id="projects">
                <Projects />
            </div>

            <div className="h-auto" id="contact">
                <Contact />
            </div>
        </main>
    );
}
