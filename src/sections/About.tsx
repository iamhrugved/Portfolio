import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView, motion } from "framer-motion";
import Tech from "@/components/Tech";
import { Reveal } from "@/components/Reveal";

function About() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("Element is in view: ", isInView);
    }, [isInView]);

    return (
        <motion.div
            className="about"
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
            }}
        >

            <div className="title">
                <Reveal width="100%">
                    <h2>About Me</h2>
                </Reveal>
            </div>


            <div className="about-grid">
                <div className="about-grid-info">
                    <Reveal>
                        <p className="about-grid-info-text">
                            Bonjour! My name is Hrugved, and I am a Mechanical Engineer turned Software Engineer.
                            After graduating from University of Pune in India, I started my software development career at{" "}
                            <Link href="https://infosys.com" className="link" target="_blank">Infosys.</Link>
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="about-grid-info-text">
                            After completing the training at world&apos;s largest corporate training center at Mysore, India, I was ready to embark on my journey as a software engineer.
                            After spending about 2 years at Infosys, I decided to move to the United States to pursue my Masters in Software Engineering.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="about-grid-info-text">
                            Fast-forward to today, I specialize in designing and developing
                            high-quality solutions that delight our clients and exceed their
                            expectations at{" "}
                            <Link href="https://inlumon.com" className="link" target="_blank">
                                inLumon.
                            </Link>
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="about-grid-info-text">
                            Additionally, I have built several Web Development projects.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="about-grid-info-text">
                            Here are a few technologies I’ve been working with recently:
                        </p>
                    </Reveal>
                    <br />

                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image src="/hrugvedCasual.jpg" alt="profile" fill />
                    </div>
                </div>
            </div>
            <Tech />
        </motion.div>
    )
}

export default About