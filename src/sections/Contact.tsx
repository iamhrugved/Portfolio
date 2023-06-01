import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

function Contact() {
  return (
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
  );
}

export default Contact;