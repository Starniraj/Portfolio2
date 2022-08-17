import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Page.css";
// import button from "react-bootstrap/button";
import { BiLinkExternal } from "react-icons/bi";

const Project = () => {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 style={{ fontSize: "40px" }} className="project-heading">
          My Recent <font>Works </font>
        </h1>
        <p style={{ color: "white", fontSize: "20px", marginLeft: "4%" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <div className="project_container">
              <div>
                <img
                  style={{ width: "15vw" }}
                  src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
                />
                <center> Blog App</center>
                <a
                  href="https://github.com/Starniraj/Blog-Backend"
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <BiLinkExternal style={{ marginBottom: "-2px" }} />
                    View Project
                  </button>{" "}
                </a>

                <a
                  href="https://coruscating-wisp-98ace5.netlify.app/"
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <BiLinkExternal style={{ marginBottom: "-2px" }} />
                    View Demo
                  </button>{" "}
                </a>
              </div>
              {/* ______________________________________________________________________________________ */}

              {/* Todo Project */}
              <div>
                <img
                  style={{ width: "15vw", height: "16vh" }}
                  src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
                />
                <center> Todo App</center>
                <a
                  href="https://github.com/Starniraj/TODO-JS"
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <BiLinkExternal style={{ marginBottom: "-2px" }} />
                    View Project
                  </button>{" "}
                </a>
                <a
                  href="https://starniraj.github.io/TODO-JS/"
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <BiLinkExternal style={{ marginBottom: "-2px" }} />
                    View Demo
                  </button>{" "}
                </a>
              </div>

              {/* ______________________________________________________________________________________ */}

              {/* Digital Clock*/}
              <div>
                <img
                  style={{ width: "15vw" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1Frw6Hmy8FnninuztXTHnuFehDtBhijkSW5UE-D3i-Mh4o5QCe_Q02dGM02svFaK7d0&usqp=CAU"
                />
                <center> Digital Clock</center>
                <a
                  href="https://github.com/Starniraj/DIgital-Clock"
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <BiLinkExternal style={{ marginBottom: "-2px" }} />
                    View Project
                  </button>{" "}
                </a>
                <a
                  href="https://starniraj.github.io/DIgital-Clock/"
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <BiLinkExternal style={{ marginBottom: "-2px" }} />
                    View Demo
                  </button>{" "}
                </a>
              </div>
            </div>
            {/*project ocntainer * */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Project;
