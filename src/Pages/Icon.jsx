import React from "react";
import "./Page.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Icon = () => {
  return (
    <div className="footer-body">
      <a
        href="https://github.com/Starniraj"
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/niraj-singh-07a107216/"
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default Icon;
