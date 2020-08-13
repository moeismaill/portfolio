import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import Blog from '../images/blog.png';
import Blog2 from '../images/blog2.png';
import Travel from '../images/travel.png';
import Airforce from '../images/airforce.png';
import Coffee from '../images/coffee.png';
import Modern from '../images/modern.png';
import Cov from '../images/cov.png';
import Expense from '../images/expense.png';
import Jumpstart from '../images/jumpstart.png';
import Avilio from '../images/avilio.png';
import Therapy from '../images/therapy.png';
import Skincare from '../images/skincare.png';



const Portfolio = () => {
    return (
        <PortfolioWrapper>
            <div className="title">
                <span className="line portfolio"></span>
                <span className="section-title portfolio">Portfolio</span>
                <span className="line portfolio"></span>
            </div>

                <div className="container">
                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://wordsunlimited8.com">
                                <img src={Blog} alt="Gallery" />
                                <h1 className="header">React / Gatsby / Netlify CMS</h1>
                                <p className="content">A personal blog using React for the front-end and Netlify CMS for the back-end.</p>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://loving-brown-0c6c83.netlify.app/">
                                <img src={Skincare} alt="Spa" />
                                <h1 className="header">React / Gatsby / CSS / SCSS </h1>
                                <p className="content">Opening up a Spa, we have the perfect website for you!</p>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://lucid-engelbart-e13bc0.netlify.app/">
                                <img src={Jumpstart} alt="Gallery" />
                                <h1 className="header">React / SnipCart / Gatsby</h1>
                                <p className="content">An e-commerce website using Contentful CMS and SnipCart.</p>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://thirsty-rosalind-cad2f7.netlify.app/">
                                <img src={Travel} alt="Gallery" />
                                <h1 className="header">HTML / CSS / Javascript</h1>
                                <p className="content">Are you ready for that vacation you've been waiting for? Well I created a website for your favorite travel agency.</p>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://jovial-goldberg-a8c0d0.netlify.app/">
                                <img src={Therapy} alt="Gallery" />
                                <h1 className="header">React / Gatsby / CSS / SCSS </h1>
                                <p className="content">Giving a psychiatric clinic web presents with fun animations!</p>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://eager-boyd-18ba46.netlify.app/">
                                <img src={Avilio} alt="Gallery" />
                                <h1 className="header">React / Gatsby / Netlify </h1>
                                <p className="content">From a Figma design to development.</p>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://pensive-jones-a4039d.netlify.app/">
                                <img src={Coffee} alt="Gallery" />
                                <h1 className="header">React / Gatsby</h1>
                                <p className="content">Are you looking for a coffee shop. Well we have the perfect one for you. Check it out!</p>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://flamboyant-golick-1879b5.netlify.app/">
                                <img src={Airforce} alt="Gallery" />
                                <h1 className="header">React / Stripe API / Gatsby</h1>
                                <p className="content">A one product e-commerce website using React JS and Stripe to process payments.</p>
                            </a>
                        </div>
                    </motion.div>


                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://optimistic-johnson-bb4a52.netlify.app/">
                                <img src={Expense} alt="Gallery" />
                                <h1 className="header">React / Hooks /Context API</h1>
                                <p className="content">This is a tutorial I followed on Youtube. YouTube Channel is Traversy Media</p>
                            </a>
                        </div>
                    </motion.div>
            
                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://quirky-lamarr-c338e9.netlify.app/">
                                <img src={Modern} alt="Gallery" />
                                <h1 className="header">React / Gatsby</h1>
                                <p className="content">Does your company need a portfolio website? You've come to the right place.</p>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                        <a href="https://vibrant-mcclintock-4053d2.netlify.app/">
                            <img src={Cov} alt="Gallery" />
                            <h1 className="header">React / Charts JS / Material UI</h1>
                            <p className="content">This is a tutorial I followed on Youtube. YouTube Channel is Javascript Mastery</p>
                        </a>
                    </div>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: [1, .75, .75, 1, 1]}}>
                        <div className="card">
                            <a href="https://brave-jennings-f89c4a.netlify.app/">
                                <img src={Blog2} alt="Gallery" />
                                <h1 className="header">React / Gatsby</h1>
                                <p className="content">All around blog to spread awareness about mental health.</p>
                            </a>
                        </div>
                    </motion.div>
                </div>
        </PortfolioWrapper>
    )
}

const PortfolioWrapper = styled.section `

    margin: 0;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background-color: #111;
  -webkit-font-smoothing: antialiased;

.title {
    text-align: center;
    // margin: 1rem;
    padding: 2rem;
    color: #000;
}


p {
  line-height: 1.5em;
}

h1+p, p+p {
  margin-top: 10px;
}

.line {
    height: 3px;
    width: 15%;
    position: relative;
    top: -12px;
    display: inline-block;
    background-color: #999;
  }

  .line.portfolio {
    background-color: #fff;
    // background-color: rgba(0, 0, 0, 0.54);
  }

  .section-title {
    font-family: 'lato', sans-serif;
    font-size: 3.5em;
    font-weight: 900;
    font-style: italic;
    text-align: center;
    padding-top: 0px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .section-title.portfolio {
    // color: #000;
    color: #fff;
    // text-shadow: 1px 1px rgba(0, 0, 0, 0.75);
  }

.container {
    // background-color: #fff;
    height: 100%;
    max-height: 100%;
    width: 100%;
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


.card {
    margin: 10px;
    cursor:pointer;
  position: relative;
//   flex: 0 0 240px;
  width: 375px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0,0,0, 0.66) 0 30px 30px 0;
}

.card a, .card h1, .card p {
    text-decoration-line: none;
}


.card img {
  opacity: 0.5;
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.card:hover img {
    background: #000;
    opacity: .1;
}

.card h1, .card p {
opacity: 0;
}
.card button {
    opacity: 0;
}

.card:hover h1, .card:hover p, .card:hover button {
    opacity: 1;
  padding: 0 20px 20px 20px;
  position: relative;
  justify-content: center;
  text-align: center;
  color: #fff;
//   transform: translateY(40%);
  transition: 0.6s .5s cubic-bezier(0.215, 0.61, 0.355, 1);
}


button {
  position: relative;
  justify-content: center;
  text-align: center;
  transform: translateY(60%);
  transition: 0.6s .5s cubic-bezier(0.215, 0.61, 0.355, 1);
    display: inline-block;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    color: #000;
    font-size: 0.85rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    text-decoration: none;
    box-sizing: border-box;
    background: #fff;
    background-size: 400%;
    border-radius: 30px;
    border: none;
    z-index: 1;
    &:hover {
        cursor: pointer;
        width: 50%;
    }

    @media screen and (max-width: 380px) {
        .card {
            max-width: 350px;
            width: 350px;
            height: 270px;
        }
    }
`

export default Portfolio
