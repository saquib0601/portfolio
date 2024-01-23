import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import usericon from "../assets/avatar.svg"

const introduction = () => {
  return (
    <div className='introDiv'>
      <div>
      {/* <div className="imgDiv">
        <img src={homebg} alt="bg"></img>
      </div> */}

      <div className="paraDiv">
        <div className="paraDiv1" style={{width: "50%"}}>
          <h3>LET ME INTRODUCE MYSELF</h3>
          <span className="paraDiv2">
          I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          </span>
          <br></br>
          <span className="paraDiv2">
          I am fluent in classics like C++, Javascript and Go.
          </span>
          <br></br>
          <span className="paraDiv2">
          My field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain.
          </span>
          <br></br>
          <span className="paraDiv2">
          Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js
          </span>
        </div>
        <div className="mainImageDiv">
          <img className="profileimgDiv" src={usericon} alt="myphoto" />
        </div>
      </div>
      </div>
      <div className="socialDiv">
          <h3 className="h3Div">FIND ME ON</h3>
          <p>Feel free to connect with me</p>
          <ul className="ulDiv">
            <li>
              <a
                href="https://github.com/saquib0601"
                className="social-icon"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
                <a
                  href="https://twitter.com/saquibmallik"
                  className="social-icon"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/saquibalam/"
                  className="social-icon"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/saquib_mallik"
                  className="social-icon"
                >
                  <AiFillInstagram />
                </a>
              </li>
          </ul>
      </div>
    </div>
  )
}

export default introduction