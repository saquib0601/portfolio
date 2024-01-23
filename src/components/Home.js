import React from 'react';
import homebg from "../assets/home-bg.jpg";
import homeMain from "../assets/home-main.svg";
import Introduction from './introduction.js';

const Home = () => {
  return (
    <div>
      <div className="imgDiv">
        <img src={homebg} alt="bg"></img>
      </div>

      <div className="paraDiv">
        <div className="paraDiv1" style={{width: "50%"}}>
          <span className="namePara">
            Hello! I am saquib Alam
          </span>
          <br></br>
          <span className="paraDiv2">
            I am dedicated Website Developer and Digital Marketing Specialist.
            My proficiency spans a wide array of web development technologies.
            From responsive design to seamless user experiences. Proficient in
            HTML, CSS, JavaScript, and a variety of content management systems
            (CMS) such as WordPress and Shopify. Additionally, my expertise
            extends to SEO best practices, Google Analytics, and social media
            management tools.
          </span>
        </div>
        <div className="mainImageDiv">
          <img className="profileimgDiv" src={homeMain} alt="myphoto" />
        </div>
      </div>
      {/* <div className="buttonDivMain">
        <button className="buttonDiv">Resume</button>
        <button className="bg-red-500 p-4 px-8">Linkidin</button>
      </div> */}

    {/* <project/> */}
    <Introduction/>

    </div>
  )
}

export default Home