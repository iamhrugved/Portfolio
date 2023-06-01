import React from "react";
import { motion } from "framer-motion";
import BallCanvas from "./Ball";

const Tech = () => {
  const technologies = [
    {
      name: "Python",
      icon: 'python.png',
    },
    {
      name: 'Java',
      icon: 'java.png',
    },
    {
      name: "C++",
      icon: 'cpp.png',
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
      name: "Node JS",
      icon: 'nodejs.png',
    },
    {
      name: "Express JS",
      icon: 'expressjs.png',
    },
    {
      name: "GraphQL",
      icon: 'graphql.png',
    },
    {
      name: "HTML 5",
      icon: 'html.png',
    },
    {
      name: "CSS 3",
      icon: 'css.png',
    },
    {
      name: "SASS",
      icon: 'sass.png',
    },
    {
      name: "Angular",
      icon: 'angular.png',
    },
    {
      name: "React JS",
      icon: 'reactjs.png',
    },
    {
      name: "Next JS",
      icon: 'nextjs.png',
    },
    {
      name: "Redux Toolkit",
      icon: 'redux.png',
    },
    {
      name: "SQL",
      icon: 'sql.png',
    },
    {
      name: "MongoDB",
      icon: 'mongodb.png',
    },
    {
      name: "Firebase",
      icon: 'firebase.png',
    },
    {
      name: "Git",
      icon: 'git.png',
    },
    {
      name: "JIRA",
      icon: 'jira.png',
    },
    {
      name: "Jenkins",
      icon: 'jenkins.png',
    },
    {
      name: "AWS",
      icon: 'aws.png',
    },
    {
      name: "Docker",
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