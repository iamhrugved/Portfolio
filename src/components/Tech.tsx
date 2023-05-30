import React from "react";
import { motion } from "framer-motion";
import BallCanvas from "./Ball";

const Tech = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: 'html.png',
    },
    {
      name: "CSS 3",
      icon: 'css.png',
    },
    {
      name: "JavaScript",
      icon: 'javascript.png',
    },
    {
      name: "TypeScript",
      icon: 'typescript.png',
    },
    {
      name: "React JS",
      icon: 'reactjs.png',
    },
    {
      name: "Redux Toolkit",
      icon: 'redux.png',
    },
    {
      name: "Tailwind CSS",
      icon: 'tailwind.png',
    },
    {
      name: "Node JS",
      icon: 'nodejs.png',
    },
    {
      name: "MongoDB",
      icon: 'mongodb.png',
    },
    {
      name: "Three JS",
      icon: 'threejs.svg',
    },
    {
      name: "git",
      icon: 'git.png',
    },
    {
      name: "figma",
      icon: 'figma.png',
    },
    {
      name: "docker",
      icon: 'docker.png',
    },
  ];
  return (
    <motion.div
      className='flex flex-row flex-wrap justify-center gap-10'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
     
    </motion.div>
  );
};

export default Tech;