import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hi! My name is Hakeem, andI am passionate about creating visually stunning and intuitive websites that captivate users and provide seamless experiences. Through my expertise in HTML, CSS, and JavaScript, React.jsx ,neXt.tsx ,Tailwindcss .I craft responsive designs that work flawlessly across devices
            digital content for the web. My interest in web development was
            sparked in 2022 when I created my first project called login page setup,  built using HTML CSS javascripts.
          </p>
      
          

          <p className="about-grid-info-text">
            Additionally,  I am currently learning Python and plan to use Python frameworks like Flask, FastAPI, and Django for backend development.
          </p>
          <p className="about-grid-info-text">
            I am also working on a new  frontend projects using  next.tsx ,Tailwind CSS &
            aimed at enhancing frontend development skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
          <li className="about-grid-info-list-item">HTML</li>
          <li className="about-grid-info-list-item">CSS</li>
          <li className="about-grid-info-list-item">Javascripts</li>
          <li className="about-grid-info-list-item">Typescripts</li>
          <li className="about-grid-info-list-item">scss</li>
          <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">React.jsx</li>
            <li className="about-grid-info-list-item">NeXt.jsx</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">MY SQL</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/Hakeem.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
