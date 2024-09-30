import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

function Projects() {
  const projectsData = [
    {
      image: "/projects/collab.png",
      projectName: "CoLearn",
      projectLink: "https://github.com/iamhrugved/Collaborative-E-Learning-Platform",
      projectDescription:
        "Introducing CoLearn, a collaborative e-learning platform revolutionizing education. By combining live coding with seamless presentation integration, CoLearn enables instructors to teach theoretical concepts and code demonstrations in one screen space. Students actively participate, gaining hands-on experience, receiving immediate feedback, and developing critical thinking skills. Built with Node.js, React, Socket.IO and MongoDB, CodeFlow offers an efficient and engaging learning experience, empowering students to excel in coding.",
      projectTech: [
        "React",
        "Node.js",
        "Express",
        "Socket.IO",
        "MongoDB",
        "AWS"
      ],
    },
    {
      image: "/projects/homestays.png",
      projectName: "Homestays",
      projectLink: "https://github.com/iamhrugved/Homestays",
      projectDescription:
        "Introducing the Homestay Booking Web Application, connecting travelers with local hosts for personalized short-term accommodation experiences. With features like property listings, search filters, and host dashboards, the application simplifies the process for both guests and hosts. Additionally, the application incorporates an AI-powered chatbot, to enhance the user experience. Built with React, Node.js, Python, GPT and MongoDB, the app delivers a reliable and convenient booking experience for travelers and hosts.",
      projectTech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Python",
        "GPT3.5 Turbo",
        "Vercel",
        "Railway"
      ],
    },
    {
      image: "/projects/ubereats.png",
      projectName: "UberEats Clone",
      projectLink: "https://github.com/iamhrugved/UberEats-Clone",
      projectDescription:
      "Introducing my individual creation, an impressive prototype of UberEats developed using React, Express, MySQL, and Node.js. This dynamic project showcases my expertise in building robust web applications. The project includes advanced features like Kafka middleware, Cloudinary for image storage, Passport.js for authentication, and REST and GraphQL for APIs. I successfully migrated the database from MySQL to MongoDB for improved scalability. The application was hosted on AWS, and I conducted thorough testing with JMeter and Mocha.",
      projectTech: [
        "React/Redux",
        "Node.js",
        "Express",
        "MySQL",
        "MongoDB",
        "Kafka",
        "GraphQL",
        "AWS"
      ],
     
    },
    {
      image: "/projects/ACN.png",
      projectName: "AutoCraftNinja",
      projectLink: "https://beta.autocraftninja.com/",
      projectDescription:
        "Introducing AutoCraftNinja, your all-in-one booking platform. Designed to streamline and simplify the booking process for various services, our app offers automated booking management, enhanced customer communication, and seamless payment processing. With features like WhatsApp business integration, automated reminders, and easy billing, we provide a convenient and efficient solution for businesses and customers alike.",
      projectTech: [
        "React",
        "DynamoDB",
        "React-Query",
        "Springboot"
      ],
    },
    {
      image: "/projects/litchatr.png",
      projectName: "Litchatr",
      projectLink: "https://github.com/iamhrugved/litchatr",
      projectDescription:
        "Introducing Litchatr, a real-time chatting application built with React, CSS, and Socket.IO. This innovative project takes communication to the next level by enabling users to connect and chat in real-time. With Litchatr, users can engage in seamless conversations, share messages, and even leverage the power of location API to share their real-time location with others. The application's intuitive interface and responsive design provide a smooth user experience.",
      projectTech: [
        "React",
        "Firebase",
        "Socket.IO",
        "CSS",
        "Heroku"
      ],
    },
  ];
  return (
    <div className="projects" id="projects">
      <motion.div
        className="title"
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
        <h2>Some Things I’ve Built</h2>
        </Reveal>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <Reveal>
                  <p className="project-info-overline">Featured Project</p>
                  </Reveal>
                  <Reveal>
                  <h3 className="project-info-title">{projectName}</h3>
                  </Reveal>
                  <Reveal>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  </Reveal>
                  
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        <Reveal>
                        <p>{tech}</p>
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Reveal>
                      <Link
                        target={"_blank"}
                        href={projectLink}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                      </Reveal>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;