import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Navigation = () => {
  return (
    <div className="Navigation">
      <nav>
        <NavLink to="/">
          {" "}
          <AiOutlineHome style={{ marginBottom: "-3px" }} />
          Home
        </NavLink>
        <NavLink to="/About">
          {" "}
          <AiOutlineUser style={{ marginBottom: "-3px" }} />
          About
        </NavLink>
        <NavLink to="/Project">
          {" "}
          <AiOutlineFundProjectionScreen style={{ marginBottom: "-3px" }} />
          Project
        </NavLink>
        <NavLink to="/Resume">
          {" "}
          <CgFileDocument style={{ marginBottom: "-3px" }} />
          Resume
        </NavLink>
      </nav>
      <hr />
    </div>
  );
};

export default Navigation;
