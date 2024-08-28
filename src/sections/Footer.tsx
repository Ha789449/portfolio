import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
function Footer() {
  




  return (
    <footer>
      <Link
        href=""
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">
        zainulabdinghani © 2024 | All rights reserved.
        
          <a
            href="https://github.com/ZAIN-GITUP/ZAIN-GITUP"
            className="footer-icon-link"
            target="_blank"
          >
            <FiGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/zain-ul-abdin-ghani15/"
            className="footer-icon-link"
            target="_blank"
          >
            <FiLinkedin size={30} />
          </a>
  
      </span>
        
      </Link>
    </footer>
  );
}

export default Footer;

