

"useclient"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5'; // Right arrow icon
import Logo from '@/components/Logo';
import Footer from '@/sections/Footer';
import Email from '@/components/Email';
import SocialIcons from '@/components/SocialIcons';

function OtherProjects() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarVisible(window.pageYOffset > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectsData = [
    {
      image: "/project6.png",
      projectName: "To DO LIST",
      projectLink: "https://simpletodos-nu.vercel.app/",
      projectDescription:
    "I created a To-Do list application using React and Tailwind CSS. The app allows users to add, delete, complete, and edit tasks. It features a responsive design with dynamic state management.",

     projectTech:
      [ "React",

        "Tailwind CSS",
     
      ],
      projectExternalLinks: {
        github: "https://github.com/ZAIN-GITUP/SimpleTodos/blob/master/src/App.jsx",
        externalLink: "https://simpletodos-nu.vercel.app/",
      },
    },
 
 
 
  ];
  return (
    <div className="app">
      <nav>
        <div className={`wrapper ${navbarVisible ? 'blur-nav' : ''}`}>
          <motion.div
            className="brand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Link href="/">
              <Logo />
            </Link>
          </motion.div>
          <div>
            <Link href="/">
              <IoArrowForward className="nav-items-list-item-link" />
            </Link>
          </div>
        </div>
      </nav>

      <SocialIcons />
      <Email />
      <main>
        <div className="otherprojects" id="work">
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
            <h2>Projects I’ve Built</h2>
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
              }) => (
                <motion.div
                  className="project"
                  key={projectName}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    visible: { opacity: 1, y: -70 },
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
                      {projectExternalLinks.github && (
                        <li className="project-info-links-item">
                          <Link href={projectExternalLinks.github}>
                            <FiGithub className="project-info-links-item-link" />
                          </Link>
                        </li>
                      )}
                      {projectExternalLinks.externalLink && (
                        <li className="project-info-links-item">
                          <Link href={projectExternalLinks.externalLink}>
                            <FiExternalLink className="project-info-links-item-link" />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default OtherProjects;
