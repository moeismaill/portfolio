import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { motion } from "framer-motion"
import Typist from 'react-typist';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "flames.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <BannerWrapper>
      <BackgroundImage
        Tag="section"
        className="hero-image"
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="hero-content">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
          >
            <Typist className="typist">
              <span>
                Mohammad is a <Typist.Backspace count={0} delay={1000} />
                <span>
                  {' hard-worker'} <Typist.Backspace count={12} delay={1500} />
                  <span>
                    {'dream-maker'} <Typist.Backspace count={12} delay={1500} />
                    <span>
                      {'thinker'}
                      <Typist.Backspace count={7} delay={1500} />

                      <span>
                        {'web-developer'}
                        <Typist.Backspace count={13} delay={1500} />

                        <span>
                          {'team player'}
                          <Typist.Backspace count={11} delay={1500} />

                          <span>
                            {'problem-solver'}
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </Typist>
            <KeyboardArrowDownIcon className="bounce" style={{fontSize: "100px", marginTop: "7rem"}} />

          </motion.h1>
          {/* <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
          >
            Startup is here to help you achieve your business and personal
            goals, all through a stylish theme
          </motion.p> */}
          {/* <Link to="about" smooth={true} duration={500}>
            <Button cta="Learn More" anchor={true} href="linking" />
          </Link> */}
        </div>
      </BackgroundImage>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.section`

KeyboardArrowDownIcon {
  color: #FF6363 !important;
  bottom: 10px;
  margin-left: -30px;
  cursor: pointer;
  position: absolute;
  opacity: 0;
  -webkit-transition: 1.2s ease;
}


@-webkit-keyframes bounce {
0%, 20%, 50%, 80%, 100% {
-webkit-transform: translateY(0);
transform: translateX(0);
}
40% {
-webkit-transform: translateY(-30px);
transform: translateY(-30px);
}
60% {
-webkit-transform: translateY(-15px);
transform: translateY(-15px);
}
}

@-moz-keyframes bounce {
0%, 20%, 50%, 80%, 100% {
transform: translateY(0);
}
40% {
transform: translateY(-30px);
}
60% {
transform: translateY(-15px);
}
}

@keyframes bounce {
0%, 20%, 50%, 80%, 100% {
-ms-transform: translateY(0);
transform: translateY(0);
}
40% {
-ms-transform: translateY(-30px);
transform: translateY(-30px);
}
60% {
-ms-transform: translateY(-15px);
transform: translateY(-15px);
}
}

.bounce {
-webkit-animation: bounce 2s infinite;
animation: bounce 2s infinite;
}

.hero-image {
    height: 100vh;
   
}

  .gatsby-image-wrapper {
    height: 100vh;
    color: #fff;
    }

    .hero-content {
      font-family: 'Oswald', sans-serif;
      text-align: center;
      height: 100%;
      width: 100%;
      max-width: 400px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      @media (min-width: 768px) {
        max-width: 650px;
      }

      h1 {
        font-size: 1.75rem;
        line-height: 1.2;

        span {
          background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      p {
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.2;
        font-size: 1.15rem;

        @media (min-width: 768px) {
          font-size: 1.35rem;
        }

        @media (min-width: 1200px) {
          font-size: 1.5rem;
        }
      }

      button,
      .anchor {
        margin: 0 auto;
      }


      @media (min-width: 768px) {
        max-width: 800px;

        h1 {
          font-size: 3rem;
        }
      }

      @media (min-width: 1200px) {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }
`

export default Banner
