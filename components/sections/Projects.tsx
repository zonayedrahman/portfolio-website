"use client";

import { useEffect, useState } from "react";
import ProjectsTabs from "@/components/ProjectTabs";
import ProjectsDisplay from "@/components/ProjectDisplay";

const ProjectsData = [
    {
        id: "tab1",
        projects: [
            {
                id: 1,
                name: "Project 1",
                description: "Description of Project 1",
                content: "Content of Project 1",
                githubLink: "https://github.com/project1",
            },
            {
                id: 2,
                name: "Project 2",
                description: "Description of Project 2",
                content: "Content of Project 2",
                githubLink: "https://github.com/project2",
            },
            {
                id: 3,
                name: "Hand Movement Prediction",
                description: "Predicting hand movements using ML models",
                content:
                    "Predicting hand movements based on brainwaves using ML models trained on a large dataset from Kaggle. Logistic Regression, SVM, and Neural Networking models were compared for best accuracy.  Built using Python, mainly Scikit-learn and TensorFlow.",
                githubLink:
                    "https://github.com/zonayedrahman/ML---Hand-Movement-Prediction-Models",
            },
        ],
    },
    {
        id: "tab2",
        projects: [
            {
                id: 4,
                name: "AI Prompt Share",
                description: "A platform to share prompts for writing",
                content:
                    "A platform for authorized users to share interesting AI prompts for other users. Utilizes a search feature to isolate prompts based on keywords. The platform is built using Next.js, Tailwind CSS, and MongoDB. Clerk API is used for authentication and authorization.",
                githubLink:
                    "https://github.com/zonayedrahman/Prompt-Share/tree/main",
            },
            {
                id: 5,
                name: "Escape The Haunting",
                description: "Mario-like platformer game",
                content:
                    "A platformer game, similar to Mario, built using the OpenGL library in C++. The game features complex physics, allowing for player horizontal and vertical movement tied to the environment gravity. The game also features varity of levels and enemy types.",
                githubLink:
                    "https://github.com/zonayedrahman/Game-Programming/tree/Project-5",
            },
            {
                id: 6,
                name: "Flights Management System",
                description: "A system for managing flights and passengers",
                content:
                    "With a focus on database management, the system allows for the managing of airlines, airplanes, flight scheduling, ticketing, passengers, and bookings. The system is built using Flask and MySQL. The system allows for authorization from different user types, such as staff and passengers.",
                githubLink: "https://github.com/project8",
            },
        ],
    },
    {
        id: "tab3",
        projects: [
            {
                id: 7,
                name: "College Friend Finder",
                description:
                    "Backend of app for finding people based on interests",
                content:
                    "A college friend finder app that works similar to Tinder. The app allows users to other users based on similar interests. Allows for live private messaging, group chats, and dedicated database for matches. The app is built using Python Flask, Socket.io, and PostgreSQL.",
                githubLink:
                    "https://github.com/euvin-k/designproject/tree/main",
            },
            {
                id: 8,
                name: "Lemon Restaurant",
                description: "Restaurant website",
                content:
                    "A website for a restaurant, allowing for logging in and making reservations. Mainly for practicing backend API and JWT token authentication practice. Django Rest Framwork and jwt library were used.",
                githubLink: "https://github.com/zonayedrahman/restaurant",
            },
            {
                id: 9,
                name: "Project 9",
                description: "Description of Project 9",
                content: "Content of Project 9",
                githubLink: "https://github.com/project9",
            },
        ],
    },
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="h-auto min-h-screen text-white bg-gradient-third flex flex-col items-center pt-36  gap-2">
            <h1 className="text-[3.5rem] font-bold pl-4">Projects</h1>
            <h3 className="text-white text-opacity-50 pl-4">
                Github Links to Some of My Work
            </h3>

            <ProjectsTabs setActiveTab={setActiveTab} />
            <ProjectsDisplay
                projects={
                    ProjectsData.find((project) => project.id === activeTab)!
                        .projects
                }
            />
        </div>
    );
};

export default Projects;
