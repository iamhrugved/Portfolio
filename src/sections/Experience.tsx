import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

function Experience() {

    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const transformSelected = () => {
            const underline = document.querySelector<HTMLElement>(".underline");
            underline!.style.top = `${selected * 2.5}rem`;
        };
        transformSelected();
    }, [selected])

    const experiences = [
        {
            name: "inLumon",
            role: "Software Engineer",
            url: "https://inlumon.com/",
            start: "Dec 2022",
            end: "Present",
            description: [
                "Migrate UI of a Government Licensing Application from AngularJS to Angular14 to achieve performance improvement of 200%.",
                "Developed 20 SQL queries for MySQL database and 13 Web APIs using ASP.NET and C# so far.",
                "Detect and fix UI and infra bugs, fixed over 20 broken tests and expanded web test coverage to detect previously ignored frontend service and UI interaction bugs."
            ]
        },
        {
            name: "Copal.AI",
            role: "Frontend Developer",
            url: "https://copal.ai/",
            start: "Jun 2022",
            end: "Dec 2022",
            description: [
                "Conceptualized and administered frontend development of a web-based video editing tool for hiding PII in accordance with FERPA regulations and to incorporate accessibility features catering to a total market cap of $500M+.",
                "Visualized video data to enable users to hide faces and mute/anonymize voices by selecting custom masks on video player.",
                "Designed 10+ cloud functions and pub-sub methods leveraging Firebase.",
                "Optimized page performance by 3X by introducing virtual scrolling and lazy loading.",
                "Improved accessibility of a web-based application by 140% to make it VPAT compliant and drafted the HECVAT compliance report."
            ]
        },
        {
            name: "Infosys Limited",
            role: "Systems Engineer",
            url: "https://www.infosys.com/",
            start: "Mar 2019",
            end: "Jul 2021",
            description: [
                "Worked as a Software Development Engineer in Test, developed, tested and maintained an application for trade and finance in a test-driven environment based on ReactJS, NodeJS and MySQL.",
                "Migrated React application from class to functional components, instituted custom hooks reducing overall codebase by 10%.",
                "Optimized complex SQL queries to improve execution efficiency by 50% - 70%.",
                "Spearheaded a team of 4 for creation, execution and maintenance of test suites for automation testing to create 200+ test scripts, reducing bug reports by 15%.Optimized page performance by 3X by introducing virtual scrolling and lazy loading.",
                "Mentored as training facilitator for newly hired employees, providing domain Knowledge Transfer for more than 10 employees.",
                "Awarded as top performer in training program at global education center Infosys, Mysore."
            ]
        }
    ]

    return (
        <motion.div
            className="experience"
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
            }}
        >
            <Reveal width="100%">
            <div className="title">
                <h2>Where I&apos;ve Worked</h2>
            </div>
            </Reveal>
            <div className="container">
                <ul className="exp-slider">
                    <div className="underline"></div>
                    {experiences.map((experience, index) => {
                        return (
                            
                            <li
                                className={`exp-slider-item ${index === selected && "exp-slider-item-selected"
                                    }`}
                                onClick={() => setSelected(index)}
                                key={experience.name}
                            >
                                <Reveal>
                                <span>{experience.name}</span>
                                </Reveal>
                            </li>
                           
                        );
                    })}
                </ul>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <Reveal>
                        <h3>
                            <span>{experiences[selected].role}</span>
                            <span className="exp-details-position-company">
                                &nbsp;@&nbsp;
                                <Link href={experiences[selected].url} className="link" target={"_blank"}>
                                    {experiences[selected].name}
                                </Link>
                            </span>
                        </h3>
                        </Reveal>
                        <Reveal>
                        <p className="exp-details-range">
                            {experiences[selected].start} - {experiences[selected].end}
                        </p>
                        </Reveal>
                        <ul className="exp-details-list">
                            {experiences[selected].description.map(
                                (description, index) => (
                                  
                                    <li key={index} className="exp-details-list-item">
                                        <Reveal><p>{description}</p></Reveal>
                                    </li>
                                    
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience