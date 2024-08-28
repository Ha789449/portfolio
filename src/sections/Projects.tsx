import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Tower Of Honoia",
      projectLink: "",  
      projectDescription: "This is a game called Tower of Honia, developed using HTML, CSS, and JavaScript. The game incorporates various stack concepts, including game mechanics and user interaction, to provide an engaging experience.",   
      projectTech:
      [
        "HTML",
        "CSS",
        "Javascripts",

      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/project2.png",
      projectName: "Result Card",
      projectLink: "",
      projectDescription:
     " This is a React, Redux Toolkit, and Tailwind CSS-based marks dashboard that efficiently displays test scores and performance summaries. It offers a responsive, user-friendly interface with dynamic updates and a clean design.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "Tailwind css",

      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/project3.png",
      projectName: "E commerce App",
      projectLink: "",
      projectDescription:
      "I built an e-commerce website with React, featuring a responsive design, smooth animations, and dynamic product displays. It includes sections for top products, testimonials, a newsletter, and an interactive order popup",
      projectTech: [
        "React",
        "Tailwind CSS",
     
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/project4.png",
      projectName: "signup setup ",
      projectLink:"",
      projectDescription:
     "This project includes a responsive login, signup, and OTP verification system, developed using Next.js, Tailwind CSS, Redux Toolkit, and Axios. The user-friendly design, inspired by Figma, ensures secure, real-time authentication with a modern interface.",
      projectTech: [
        "React",
        "Next",
        "Redux Toolkit",
        "Tailwind css",

      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/project5.png",
      projectName: "E commerce App",
      projectLink: "",
      projectDescription:
     "I developed an e-commerce website using React, Tailwind CSS, and Redux Toolkit, featuring responsive design and dynamic product displays. It integrates a fake API for data fetching, includes product filtering, cart management, and seamless user interactions.",
     projectTech:
      [ "React",
        "Redux tookit",
        "fake store api",
        "Tailwind CSS",
     
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="work">
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
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
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
                transition={{ duration: 0.8 }}
                variants={{
                  visible: { opacity: 2, y: -70 },
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
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
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