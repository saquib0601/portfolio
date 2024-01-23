import React from "react";
import { Link } from "react-router-dom";
// import usericon from "../assets/usericon.jpeg";

const header = () => {
  return (
    <div className="sticky top-0 z-50 flex p-3 justify-between text-white bg-slate-600">
        <div className="flex">
            <span className="">Saquib Alam</span>
        </div>
      <div className="flex ">
          <ul className="flex px-8">
            <li className="px-4">
                <Link to="/">Home</Link>
            </li>
            <li className="px-4">
                <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
                <Link to="/project">Project</Link>
            </li>
            <li className="px-4">
                <Link to="/resume">Resume</Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default header;
