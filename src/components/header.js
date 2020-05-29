import React, { useState } from "react"
import links from "./links"
import styled from "styled-components"
// import Logo from "../images/startup-logo.svg"
import { motion } from "framer-motion";

import { Link } from "react-scroll"

const Header = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavWrapper>
      <div className="masthead flex-container">
        {/* <img src={Logo} alt="Startup Logo" /> */}
        {/* <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5833 8.33334H31.25L14.8125 34.6458L9.37496 25L18.75 8.33334H10.4166L1.04163 25L10.4166 41.6667H18.75L35.1875 15.3542L40.625 25L31.25 41.6667H39.5833L48.9583 25L39.5833 8.33334Z" fill="white"/>
        </svg> */}

        <div
      style={{
        position: "relative",
        width: 10,
        height: 10,
        margin: 8,
        color: "#fff"
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 50"
        style={{ position: "absolute", zIndex: "10" }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          flip: Infinity,
          repeatDelay: 5
        }}
      >
  
        <motion.path
          animate={{ rotate: 360 }}
          transition={{
            ease: "easeInOut",
            flip: Infinity,
            repeatDelay: 5,
            duration: 2
          }}
          d="M39.5833 8.33334H31.25L14.8125 34.6458L9.37496 25L18.75 8.33334H10.4166L1.04163 25L10.4166 41.6667H18.75L35.1875 15.3542L40.625 25L31.25 41.6667H39.5833L48.9583 25L39.5833 8.33334Z" fill="white"/>
          />
      </motion.svg>
    </div>

        {/* <button
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
        </button> */}
      <ul
        className={isOpen ? `${"nav-links"} ${"show-nav"}` : `${"nav-links"}`}
      >
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                activeClass="active"
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
    </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
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
      width: 90px;

      @media (min-width: 768px) {
        width: 100px;
      }

      @media (min-width: 1200px) {
        width: 120px;
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
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;
    margin: 1rem;

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

  @media (min-width: 992px) {
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

  @media (max-width: 768px) {
    .nav-links{
      font-size: .5rem;
      margin: 1rem auto;
    }

  }
`

export default Header
