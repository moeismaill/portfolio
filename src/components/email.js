import React from "react"
import styled from "styled-components"

const Email = () => {
  return (
    <ContactWrapper id="contact">
      <div className="content-container">
        <h2>Contact</h2>
        <p>Have a question or want to work together?</p>
        <form name="contact" netlify="true">
          <div className="input-area">
            <input type="text" name="name" required autocomplete="off" />
            <label className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>

          <div className="input-area">
            <input type="email" name="email" required autocomplete="off" />
            <label className="label-name">
              <span className="content-name">Email</span>
            </label>
          </div>

          <div className="input-area">
            <textarea
              type="text"
              name="message"
              rows="5"
              required
              autocomplete="off"
            />
            <label className="label-name">
              <span className="content-name">Message</span>
            </label>
          </div>

          <div className="input-area button-area">
            <button cta="Send" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  padding: 100px 30px;

  .content-container {
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-content: center;

    h2 {
      text-align: left;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: 768px) {
        text-align: center;
      }
    }
    p {
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        text-align: center;
      }
    }

    form {
      position: relative;
      overflow: hidden;

      .input-area {
        margin-bottom: 40px;
        position: relative;

        &.button-area {
          text-align: center;
          margin-bottom: 0;
        }
      }

      input,
      textarea {
        height: 100%;
        font-size: 1rem;
        letter-spacing: 0.25rem;
        padding: 20px;
        display: block;
        width: 100% !important;
        border: none;
        background-color: #0b132e;
        color: #fff;
        text-transform: uppercase;
        position: relative;
        box-sizing: border-box;
        outline: none;

        &:focus,
        &:valid {
          + .label-name {
            .content-name {
              transform: translateY(-25%);
              font-size: 0.7rem;
              opacity: 0.2;
            }
            &::after {
              transform: translateX(0%);
            }
          }
        }
      }

      label {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;

        &::after {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -1px;
          height: 1px;
          background: linear-gradient(90deg, #f441a5, #03a9f4);
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      }

      .content-name {
        position: absolute;
        top: 10px;
        left: 20px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }

  button {
    position: relative;
    display: inline-block;
    padding: 0 20px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 0.85rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    text-decoration: none;
    box-sizing: border-box;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 30px;
    border: none;
    z-index: 1;
    &:hover {
        cursor: pointer;
        width: 50%;
      }
  }
`

export default Email
