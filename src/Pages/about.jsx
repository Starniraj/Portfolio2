import React from "react";
import "./Page.css";
import { ImPointRight } from "react-icons/im";
import { DiJavascript1, DiReact, DiGit, DiCss3, DiHtml5 } from "react-icons/di";
import {
  SiNetlify,
  SiBootstrap,
  SiVisualstudiocode,
  SiCodepen
} from "react-icons/si";

const About = () => {
  return (
    <div className="about_header">
      <div className=" heading">
        <code style={{ fontWeight: "bold" }}>
          {" "}
          Know Who <font style={{ fontWeight: "bold" }}>I'M</font>{" "}
        </code>

        <ol>
          <li>
            {" "}
            Hi Everyone, I am <font>Niraj Singh </font> from{" "}
            <font>Varanasi, Uttar Pradesh , India.</font>
          </li>
          <li className="cop">I am a Programmer Trainee in Cognizant.</li>
        </ol>
        <font style={{ marginRight: "80px", divor: "white" }}>
          {" "}
          Apart from coding, some other activities that I love to do!{" "}
        </font>

        <ul>
          <li className="about-activity">
            <ImPointRight /> Rafting.
          </li>
          <li className="about-activity">
            <ImPointRight /> Fishing.
          </li>
          <li className="about-activity">
            <ImPointRight /> Birding.
          </li>
        </ul>

        <div className="image_about">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/software-developer-1946892-1651592.png" />
        </div>
      </div>
      <font style={{ color: "white" }}>
        {" "}
        Professional <font style={{ fontWeight: "bold" }}>Skillset </font>
      </font>{" "}
      <br />
      <div className="Container">
        <div>
          {" "}
          <SiNetlify />
        </div>
        <div>
          {" "}
          <DiReact />
        </div>
        <div>
          <SiBootstrap />
        </div>
        <div>
          <DiJavascript1 />
        </div>
        <div>
          <DiCss3 />
        </div>
        <div>
          <DiGit />
        </div>
        <div>
          {" "}
          <DiHtml5 />
        </div>
      </div>{" "}
      <br />
      <font style={{ fontWeight: "bold" }}>
        {" "}
        Tools <font style={{ colr: "white" }}>I use </font>
      </font>{" "}
      <br />
      <div className="Container">
        <div>
          {" "}
          <SiVisualstudiocode />
        </div>
        <div>
          {" "}
          <SiCodepen />
        </div>
      </div>
    </div> //main
  );
};

export default About;
