import React, { useState } from "react"
import links from "./links"
import styled from "styled-components"
import { motion } from 'framer-motion'

import { Link } from "react-scroll"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavWrapper>
      <div className="masthead flex-container">
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
        <button
          className={
            isOpen
              ? `${"toggle-btn"} ${"toggle-btn-active"}`
              : `${"toggle-btn"}`
          }
          type="button"
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul
        className={isOpen ? `${"nav-links"} ${"show-nav"}` : `${"nav-links"}`}
      >
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.text}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  left: 0;
  right: 0;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;

  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;

    svg {
      width: 65px;

      @media (min-width: 768px) {
        width: 65px;
      }

      @media (min-width: 1200px) {
        width: 90px;
      }

      @media (min-width: 1024px) {
        width: 100px;
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: center;
    background: linear-gradient(45deg, #060c21, #0d0139);
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;

    li {
      list-style: none;
      font-size: 1.25rem;
      font-weight: 400;
      margin-left: 0;
      padding: 0.75rem 0;
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: #fff;
        transition: 0.3s;

        &.active {
          color: #e609b5;
        }
      }
      &:hover {
        cursor: pointer;
        a {
          color: #e609b5;
        }
      }
    }

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    border: none;

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      transition: 0.2s ease-in;

      &:nth-child(1) {
        transform: translateY(-5px);
      }

      &:nth-child(3) {
        transform: translateY(5px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 370px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;

      li {
        margin-left: 1rem;
      }
    }
  }
`

export default Navbar
