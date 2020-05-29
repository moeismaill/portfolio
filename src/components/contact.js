import React from 'react'
import styled from "styled-components"
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"


 const Contact = () => {
    return (
            <EmailWrapper>
                <section className="contact">
                
                <h1 className="section-header">CONTACT</h1>
                
                <div className="contact-wrapper">
                    
                   
                    
                    <form className="form-horizontal" method="post" netlify="true">
                    
                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="text" className="form-control" id="name" placeholder="NAME" name="name" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" />
                        </div>
                    </div>

                    <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>
                    
                    <button id="submit" type="submit" value="SEND">Send</button>
                    
                    </form>
                    
                    
                    
                    <div className="direct-contact-container">

                        <ul className="contact-list">
                        <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Chicago | IL</span></i></li>
                        
                        {/* <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li> */}
                        
                        {/* <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">emailme@gmail.com</a></span></i></li> */}
                        
                        </ul>

                        <hr />
                        <ul className="social-media-list">
                        <li><a href="https://github.com/mrismail91" className="contact-icon">
                            {/* <i className="fa fa-github" aria-hidden="true"></i> */}
                            <FaGithub style={{padding: "5px 0 0 0"}} />
                            </a>
                        </li>
                        <li><a href="https://twitter.com/ismailmri"  className="contact-icon">
                            {/* <i className="fa fa-twitter" aria-hidden="true"></i> */}
                            <FaTwitter style={{padding: "5px 0 0 0"}} />
                            </a>
                        </li>
                        <li><a href="https://instagram.com/ismailmri7" className="contact-icon">
                            {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                            <FaInstagram style={{padding: "5px 0 0 0"}} />
                            </a>
                        </li>
                        </ul>
                        <hr />

                        <div className="copyright">&copy; ALL RIGHTS RESERVED</div>

                    </div>
                    
                </div>
                
                </section>  
  
  
            
            </EmailWrapper>  
  
    )
}

const EmailWrapper = styled.section`
  
  .contact {
    width: 100%;
    height: 100%;
    background-color: #111;
    overflow: hidden;
    padding-bottom: 200px;
  }
  
  .section-header {
    text-align: center;
    margin: 0;
    padding-top: 50px;
    margin-bottom: 50px;
    font: 300 60px 'Oswald', sans-serif;
    letter-spacing: 6px;
    color: #fff;
    margin-bottom: 25px;
  }
  
  .contact-wrapper {
    margin: 1rem auto;
    padding-top: 20px;
    position: relative;
    max-width: 800px;
  }
  
  /* Begin Left Contact Page */
  .form-horizontal {
      height: 100%;
    float: left;
    max-width: 400px;
    font-family: 'Lato';
    font-weight: 400;
  }
  
  .form-control, textarea {
    max-width: 400px;
    background-color: #111;
    color: #fff;
    letter-spacing: 1px;
  }


  input,
      textarea {
          font-family: 'Oswald', sans-serif;
        height: 100%;
        font-size: 1rem;
        letter-spacing: 0.25rem;
        padding: 20px;
        display: block;
        width: 100% !important;
        background-color: #0b132e;
        color: #fff;
        border: #fff solid 1px;
        text-transform: uppercase;
        position: relative;
        box-sizing: border-box;
        margin: 1rem 0;
        border-radius: 10px;

    }

  button {
    display: inline-block;
    padding: 0 20px;
    height: 50px;
    width: 400px;
    // text-align: center;
    // line-height: 50px;
    color: #fff;
    font-size: 0.85rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    text-decoration: none;
    background-size: 400%;
    background: #111;
    border-radius: 10px;
    border: #fff solid 1px;
    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        border: none;

      }
  }
  
  /* Begin Right Contact Page */
  .direct-contact-container {
    max-width: 400px;
    float: right;
    margin-top: 5px;
  }
  
  /* Location, Phone, Email Section */
  .contact-list {
    list-style-type: none;
    margin-left: -30px;
    padding-right: 20px;
    text-align: center;
  }
  
  .list-item {
    line-height: 4;
    color: #aaa;
  }
  
  .contact-text {
    font: 300 18px 'Lato', sans-serif;
    letter-spacing: 1.9px;
    color: #bbb;
  }
  
  .place {
    margin-left: 62px;
  }
  
  .phone {
    margin-left: 56px;
  }
  
  .gmail {
    margin-left: 53px;
  }
  
  .contact-text a {
    color: #bbb;
    text-decoration: none;
    transition-duration: 0.2s;
  }
  
  .contact-text a:hover {
    color: #fff;
    text-decoration: none;
  }
  
  
  /* Social Media Icons */
  .social-media-list {
    position: relative;
    font-size: 2.3rem;
    text-align: center;
    width: 100%;
  }
  
  .social-media-list li a {
    color: #fff;
  }
  
  .social-media-list li {
    position: relative; 
    top: 0;
    left: -20px;
    display: inline-block;
    height: 70px;
    width: 70px;
    margin: 10px auto;
    line-height: 70px;
    border-radius: 50%;
    color: #fff;
    background-color: rgb(27,27,27);
    cursor: pointer; 
    transition: all .2s ease-in-out;
  }
  
  .social-media-list li:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    line-height: 70px;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 0 1px #fff;
    transition: all .2s ease-in-out;
  }
  
  .social-media-list li:hover {
    background-color: #fff; 
  }
  
  .social-media-list li:hover:after {
    opacity: 1;  
    transform: scale(1.12);
    transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
  }
  
  .social-media-list li:hover a {
    color: #111;
  }
  
  .copyright {
    font: 200 14px 'Oswald', sans-serif;
    color: #555;
    letter-spacing: 1px;
    text-align: center;
  }
  
  hr {
    border-color: rgba(255,255,255,.8); ;
  }
  
  /* Begin Media Queries*/
  @media screen and (max-width: 768px) {
    .form-horizontal {
      margin-left: 1rem;
    }

    .direct-contact-container {
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 760px) {
      .contact {
          height: 100%;
      }

    .section-header {
      font-size: 65px;
    }

    input, textarea {
        padding: 30px;
        margin: 1rem 0;
    }

    button {
        width: 50%;
        margin: 1rem;
        align-text: center;
        align-content: center;
        justify-content: center;
    }
    .direct-contact-container, .form-horizontal {
      float: none;
      margin: 10px 0;
    }  
    .direct-contact-container {
      margin-top: 60px;
      max-width: 300px;
    }    
    .social-media-list li {
      height: 60px;
      width: 60px;
      line-height: 60px;
    }
    .social-media-list li:after {
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }
  
  @media screen and (max-width: 569px) {
    .contact {
      height: 100%;
      }
    .section-header{
      font-size: 50px;
    }
    .direct-contact-container, .form-wrapper {
      float: none;
      margin: 0 auto;
    }  
    .form-control, textarea {
      max-width: 300px;
      margin: 1rem auto;
    }

    button {
      margin-left: 2.2rem;
    }
    
    .name, .email, textarea {
      width: 280px;
    } 
    .direct-contact-container {
      margin-top: 60px;
      max-width: 280px;
    }  
    .social-media-list {
      left: 0;
    }
    .social-media-list li {
      height: 55px;
      width: 55px;
      line-height: 55px;
      font-size: 2rem;
    }
    .social-media-list li:after {
      width: 55px;
      height: 55px;
      line-height: 55px;
    }
    
  }
  
  @media screen and (max-width: 410px) {

    button {
      width: 50%;
    }
  }
`

export default Contact