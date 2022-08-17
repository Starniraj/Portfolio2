import React from "react";
import Typical from "react-typical";
import "./Page.css";

const Home = () => {
  return (
    <div className="Header_Home">
      <div className="Name_one">
        <span>Hi There!</span>
      </div>

      <div className="Name_two">
        <span>
          I'm <font> Niraj Singh</font>
        </span>
      </div>
      <div className="Typical">
        <Typical
          steps={["Full Stack Developer", 1000, "Programmer Trainee", 1000]}
          loop={Infinity}
          wrapper="p"

          // deleteSpeed: 50,
          // deleteSpeed="1"
        />
      </div>
      <div className="Image">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/full-stack-developer-1946887-1651585.png" />
      </div>
      <div className="Intro">
        <h3>
          {" "}
          LET ME <font>INTRODUCE</font> MY SELF{" "}
        </h3>
        <p>
          An example of programming is the act a person is doing when he is
          writing computer source code.{" "}
        </p>
        <p1>
          {" "}
          I am fluent in classics like{" "}
          <font>React, Javascript, Git , CSS, HTML. </font>
        </p1>{" "}
        <br /> <br />
        <p2>
          {" "}
          I would like to grow my technical skills further in a large scale{" "}
          <font>Social Platform.</font>”
        </p2>
      </div>

      <div className="Contact">
        <h4> FIND ME ON </h4>
        <h5>
          {" "}
          Feel free to <font>connect</font> with me
        </h5>
        <span1>
          {" "}
          Phone Number :{" "}
          <a href=" tel: +917905010687">
            {" "}
            <font style={{ color: "#ff00cc" }}>790510687</font>
          </a>
          <br />
          Email Id :{" "}
          <a href="singhniraj637@gmail.com">
            <font style={{ color: "#ff00cc" }}> singhniraj637@gmail.com </font>
          </a>
        </span1>
      </div>
    </div>
  );
};

export default Home;
