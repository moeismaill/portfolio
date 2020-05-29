import React from "react"
import styled from "styled-components"
import socialIcons from "./social-icons"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="credit"> © {new Date().getFullYear()},
        Designed & developed by{" "}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Mohammad Ismail
        </a>
      </div>
      {socialIcons.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        )
      })}
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #000;
  padding: 20px 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .credit {
    font-size: 1rem;
    margin-bottom: 0.5rem;

    a {
      padding: 0;
      font-size: 1rem;
      text-decoration: none;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  a {
    color: #fff;
    font-size: 1.75rem;
    padding: 0 0.5rem;

    svg {
      vertical-align: middle;
    }
  }
`

export default Footer
