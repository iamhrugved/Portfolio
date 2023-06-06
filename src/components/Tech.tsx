import React from "react";
import { motion } from "framer-motion";
import TechCard from "./TechCard";

const Tech = () => {
  const technologies = [
    {
      name: "Python",
      icon: '/tech/pythonIcon.png',
    },
    {
      name: 'Java',
      icon: '/tech/javaIcon.png',
    },
    {
      name: "C++",
      icon: '/tech/cppIcon.png',
    },
    {
      name: "JavaScript",
      icon: '/tech/javascriptIcon.png',
    },
    {
      name: "TypeScript",
      icon: '/tech/typescriptIcon.png',
    },
    {
      name: "Node JS",
      icon: '/tech/nodejsIcon.png',
    },
    {
      name: "Express JS",
      icon: '/tech/expressjsIcon.png',
    },
    {
      name: "HTML 5",
      icon: '/tech/htmlIcon.png',
    },
    {
      name: "CSS",
      icon: '/tech/cssIcon.png',
    },
    {
      name: "SASS",
      icon: '/tech/sassIcon.png',
    },
    {
      name: "Angular",
      icon: '/tech/angularIcon.png',
    },
    {
      name: "React JS",
      icon: '/tech/reactjsIcon.png',
    },
    {
      name: "Redux",
      icon: '/tech/reduxIcon.png',
    },
    {
      name: "Next JS",
      icon: '/tech/nextjsIcon.png',
    },
    {
      name: "SQL",
      icon: '/tech/sqlIcon.png',
    },
    {
      name: "MongoDB",
      icon: '/tech/mongodbIcon.png',
    },
    {
      name: "Git",
      icon: '/tech/gitIcon.png',
    },
    {
      name: "AWS",
      icon: '/tech/awsIcon.png',
    },
    {
      name: "Firebase",
      icon: '/tech/firebaseIcon.png',
    },
    {
      name: "Docker",
      icon: '/tech/dockerIcon.png',
    },
    {
      name: "Jenkins",
      icon: '/tech/jenkinsIcon.png',
    },
    {
      name: "Jira",
      icon: '/tech/jiraIcon.png',
    }
  ];
  return (
    <motion.div
      className='tech'
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
        <TechCard key={technology.name} technology={technology} />
      ))}
    </motion.div>
  );
};

export default Tech;