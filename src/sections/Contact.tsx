import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import Link from 'next/link'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  const socialLinks = [
    { name: 'Github', icon: <FaGithub />, link: 'https://www.github.com/iamhrugved' },
    { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/hrugvedpawar/' },
    { name: 'Leetcode', icon: <SiLeetcode />, link: 'https://leetcode.com/iamhrugved/' },
    { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/hrugved.pawar/' },
    { name: 'Twitter', icon: <FaTwitter />, link: 'https://www.twitter.com/iamhrugved' }
]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the breakpoint as per your needs
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the initial value based on the screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
console.log(isMobile)
  return (
    <>
      <motion.div
        className="contact"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <Reveal>
          <h2 className="contact-title">What&apos;s Next?</h2>
        </Reveal>
        <Reveal>
          <h2 className="contact-sub-title">Get In Touch</h2>
        </Reveal>
        <Reveal>
          <p className="contact-text">
            Have a job opportunity or freelance gig you think would be a great fit?
            I&apos;d love to hear more about it. Get in touch, and let&apos;s discuss the details!
          </p>
        </Reveal>
        <div className="contact-cta">
          <Button link="mailto:pawar.hrugved@gmail.com" text="Say Hello" />
        </div>
      </motion.div>
      {isMobile &&
        <motion.div
          className="contact-social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.95,
          }}
        >
          <ul className="contact-social-icons-list">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name} title={name} className="social-icons-list-item">
                <Link
                  href={link}
                  className="contact-social-icons-list-item-link"
                  target="_blank"
                >
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>}
    </>
  );
}

export default Contact;