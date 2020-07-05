import React from 'react'
import { motion } from 'framer-motion'


const Logo = () => {
    return (
        <div>
            <div
          style={{
            position: "relative",
            width: 50,
            height: 50,
            margin: 8
          }}
        >
          <motion.svg
            viewBox="0 0 50 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              flip: Infinity,
              repeatDelay: 5
            }}
          >
            <defs>
              <path
                id="a"
                d="M19.7917 4.16666H15.625L7.40629 17.3229L4.68754 12.5L9.37504 4.16666H5.20837L0.520874 12.5L5.20837 20.8333H9.37504L17.5938 7.67707L20.3125 12.5L15.625 20.8333H19.7917L24.4792 12.5L19.7917 4.16666Z"
              />
              <clipPath id="b">
                <use xlinkHref="#a" />
              </clipPath>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
                <motion.stop
                  stopColor="#2B00FF"
                  animate={{
                    stopColor: [
                      "#0055FF",
                      "#FFF9DA",
                      "#E7FFF7",
                      "#FFC6A8",
                      "#FF7744",
                      "#F3F2F2"
                    ]
                  }}
                  transition={{
                    yoyo: Infinity,
                    ease: "linear",
                    duration: 8
                  }}
                  offset="25%"
                />
                <motion.stop
                  stopColor="#0055FF"
                  animate={{
                    stopColor: [
                      "#0055FF",
                      "#FFF9DA",
                      "#FFC6A8",
                      "#FF7744",
                      "#2B00FF"
                    ]
                  }}
                  transition={{
                    yoyo: Infinity,
                    ease: "linear",
                    duration: 8
                  }}
                  offset="50%"
                />
                <motion.stop
                  stopColor="#D4504C"
                  animate={{
                    stopColor: ["#FFF9DA", "#E7FFF7", "#0055FF"]
                  }}
                  transition={{
                    yoyo: Infinity,
                    ease: "linear",
                    duration: 8
                  }}
                  offset="75%"
                />
                <motion.stop
                  stopColor="#FF7744"
                  animate={{
                    stopColor: ["#D4504C", "#2B00FF", "#E7FFF7", "#FFF9DA"]
                  }}
                  transition={{
                    yoyo: Infinity,
                    ease: "linear",
                    duration: 8
                  }}
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <use
              fill="transparent"
              stroke="url(#linear)"
              strokeWidth="4"
              clipPath="url(#b)"
              xlinkHref="#a"
            />
            <motion.path
              animate={{ rotate: 360 }}
              transition={{
                ease: "easeInOut",
                flip: Infinity,
                repeatDelay: 5,
                duration: 2
              }}
              d="M19.7917 4.16666H15.625L7.40629 17.3229L4.68754 12.5L9.37504 4.16666H5.20837L0.520874 12.5L5.20837 20.8333H9.37504L17.5938 7.67707L20.3125 12.5L15.625 20.8333H19.7917L24.4792 12.5L19.7917 4.16666Z"
            />
          </motion.svg>
        </div>
        </div>
    )
}

export default Logo
