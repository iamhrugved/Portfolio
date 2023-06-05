import React from "react";
import { motion } from "framer-motion";
import BallCanvas from "./Ball";

const Tech = () => {
  const technologies = [
    {
      name: "Python",
      icon: 'tech/python.png',
    },
    {
      name: 'Java',
      icon: 'tech/java.png',
    },
    {
      name: "C++",
      icon: 'tech/cpp.png',
    },
    {
      name: "JavaScript",
      icon: 'tech/javascript.png',
    },
    {
      name: "TypeScript",
      icon: 'tech/typescript.png',
    },
    {
      name: "Node JS",
      icon: 'tech/nodejs.png',
    },
    {
      name: "HTML 5",
      icon: 'tech/html.png',
    },
    {
      name: "SASS",
      icon: 'tech/sass.png',
    },
    {
      name: "Angular",
      icon: 'tech/angular.png',
    },
    {
      name: "React JS",
      icon: 'tech/reactjs.png',
    },
    {
      name: "Next JS",
      icon: 'tech/nextjs.png',
    },
    {
      name: "SQL",
      icon: 'tech/sql.png',
    },
    {
      name: "MongoDB",
      icon: 'tech/mongodb.png',
    },
    {
      name: "Git",
      icon: 'tech/git.png',
    },
    {
      name: "AWS",
      icon: 'tech/aws.png',
    },
    {
      name: "Docker",
      icon: 'tech/docker.png',
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