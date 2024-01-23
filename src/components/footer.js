import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const footer = () => {
  return (
    <div className='footer'>
      <div className="flex justify-around pt-1">
          {/* <ul className="flex px-8">
            <li className="px-4">
                <Link to="/">Whatsapp</Link>
            </li>
            <li className="px-4">
                <Link to="/about">FaceBook</Link>
            </li>
            <li className="px-4">
                <Link to="/contact">Instagram</Link>
            </li>
            <li className="px-4">
                <Link to="/social">Linkidin</Link>
            </li>
          </ul>
          <div className='justify-end right-6'>
            <span>© 2023 Portfolio Saquib ALam, All rights reserved</span>
          </div> */}
          <div>
            <h3>Designed and Developed by Saquib Alam</h3>
          </div>
          <div>
            <h3>© 2023 Portfolio Saquib ALam, All rights reserved</h3>
          </div>
          {/* <div>
          <ul className="ulDiv">
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
                  href="https://twitter.com/saquibmallik"
                  className="social-icon"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
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
                  href="https://www.instagram.com/saquib_mallik"
                  className="social-icon"
                >
                  <AiFillInstagram />
                </a>
              </li>
          </ul>
          </div> */}
      </div>

    </div>
  )
}

export default footer