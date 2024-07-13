import React from 'react';
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import resume from "../assets/VedantBopanwar(BE-CE)Resume.pdf"; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-7" src={logo} alt="logo" />
      </div>
      <div className="m-5 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/vedant-bopanwar-8052ba2b1/" // Replace with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Vedantb27" // Replace with your GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href={resume}
          download="VedantBopanwar(BE-CE)Resume.pdf" // This specifies the name of the file to be downloaded
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent hover:bg-blue-500 text-slate-4000 font-semibold hover:text-white px-4 border border-slate-400 hover:border-transparent rounded"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
