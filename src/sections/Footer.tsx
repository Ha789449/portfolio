import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <span className="footer-info">
        AbdulHakeem © 2024 | All rights reserved.
        <a
          href="https://github.com/Ha789449"
          className="footer-icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          className="footer-icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size={30} />
        </a>
      </span>
    </footer>
  );
}

export default Footer;
