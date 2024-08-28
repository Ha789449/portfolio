import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://0/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="Z" transform="translate(35.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill="currentColor"
                  stroke="currentColor" 
            strokeWidth="4" 
                  d= "M 24.764 5.562v-0.769c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h-16.639c-0 0-0 0-0.001 0-0.165 0-0.299 0.134-0.299 0.299 0 0 0 0 0 0.001v-0 0.929c0 0 0 0 0 0.001 0 0.165 0.134 0.299 0.299 0.299 0 0 0 0 0.001 0h14.752l-15.502 20.223c-0.037 0.051-0.059 0.115-0.059 0.185 0 0.166 0.134 0.3 0.3 0.3h16.639c0 0 0 0 0.001 0 0.165 0 0.299-0.134 0.299-0.299v-0.929c0 0 0 0 0-0.001 0-0.165-0.134-0.299-0.299-0.299-0 0-0 0-0.001 0h-14.752l15.502-20.223c0.037-0.051 0.059-0.115 0.059-0.185z"                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
