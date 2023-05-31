import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import Button from '@/components/Button';
import Typewriter from 'typewriter-effect';
import GraphemeSplitter from 'grapheme-splitter';

function Home() {
    const stringSplitter = (string: string): string[] => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
    };
    return (
        <div className='home'>
            <motion.h1
                className="home-title"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.6,
                }}
            >
                Hi! my name is
            </motion.h1>
            <motion.h2
                className="home-title-large"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.75,
                }}
            >
                Hrugved Pawar. &nbsp;
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
            </motion.h2>
            <motion.h3
                className="home-title-large home-title-typewriter"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.05,
                }}
            >
                <Typewriter
                    options={{
                        strings: ['🎓 Engineer.', '🧑🏻‍💻 Developer.', '🧠 Problem-solver.', '📚 Learner.'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'home-title-typewriter-text',
                        deleteSpeed: 10,
                        delay: 50,
                        // @ts-ignore
                        stringSplitter: stringSplitter as (text: string) => string[],
                    }}
                />

            </motion.h3>
            <motion.h3
                className="home-title-large home-title-sub"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.35,
                }}
            >
                I carft things for the web.
            </motion.h3>
            <motion.p
                className="home-text"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.65,
                }}
            >
                I&apos;m a Software Engineering graduate from&nbsp;
                <Link href="https://www.sjsu.edu/" target="_blank" className="link">San Jose State University.</Link>&nbsp;
                I have 3 years of software development experience in various horizontals. Currently I&apos;m working as a Software Engineer at&nbsp;
                <Link href="https://www.inlumon.com/" target="_blank" className="link">inLumon.</Link>
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.85,
                }}>
                <br />
                <Button text="Download my Resume" link="/resume.pdf" />
            </motion.div>
        </div>
    )
}

export default Home