import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Make sure framer-motion is installed

function Logo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: isLoaded ? 1 : 0 }} // Fade in after loading
      transition={{ duration: 0.5 }} // Animation duration
    >
      <title>Logo</title>
      <g>
        {/* Main 'H' structure */}
        <g id="H" transform="translate(25.000000, 25.000000)">
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="4"
            d="M 10,0
               L 10,50
               M 40,0
               L 40,50
               M 10,25
               L 40,25"
          />
        </g>
        {/* Outer Border */}
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28"
        />
      </g>
    </motion.svg>
  );
}

export default Logo;
