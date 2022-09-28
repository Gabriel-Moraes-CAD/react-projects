import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.svg";
import Rproject1 from "../images/background.jpg";
import bugtracker from "../images/bugtracker.jpg";
import {
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandReactNative,
  TbBrandBootstrap,
  TbBrandTailwind,
} from "react-icons/tb";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { ImRocket } from "react-icons/im";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { SiStyledcomponents, SiAdobecreativecloud } from "react-icons/si";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    // Nav Bar
    <div className="bg-dark">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gabriel Moraes</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      {/* Header */}
      <Container className="bg-dark text-light text-center text-sm-star mt-sm-5 border-bottom border-light">
        <div className="container pt-4 mb-4">
          <div className="d-flex align-items-center justify-content-around">
            <div className="lead text-start ms-5">
              <h1>
                Hello, welcome to my <br /> React project page.
              </h1>
              <p>
                My name is Gabriel and I'm a Front End Developer <br />
                base in Toronto, Canada{" "}
                <FaCanadianMapleLeaf color="#c41302" size="25px" />.
                <br /> <br />
              </p>
              <a
                href="mailto:mr.gabriel.moraes@gmail.com?subject=Let's Chat"
                className="btn btn-md btn-primary d-none d-sm-inline"
                role="button"
              >
                Let's chat!
              </a>
            </div>
            <img
              className="img-fluid w-50  d-none d-md-block"
              src={logo}
              alt="React logo"
            />
          </div>
        </div>
      </Container>

      {/* Skills container */}
      <Container className="bg-dark text-light d-flex flex-column justify-content-center p-3 my-5 border-bottom border-light">
        <div className="text-center">
          <h1>Languages &amp; Technologies</h1>
        </div>
        <Row className="d-flex p-3 ">
          <Col className="d-flex justify-content-center text-center ">
            <h4>
              <TbBrandJavascript color="#F0DB4F" size="80px" />{" "}
              <h4>Javascript</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center ">
            <h4>
              <TbBrandCss3 color="#264de4" size="80px" />
              <h4>CSS</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center ">
            <h4>
              <TbBrandHtml5 color="#e34c26 " size="80px" />
              <h4>HTML</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <TbBrandReactNative color="#61dbfb" size="80px" />
              <h4>React JS</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <SiStyledcomponents color="" size="80px" />
              <h4>Styled</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <TbBrandBootstrap color="#563d7c" size="80px" />
              <h4>Bootstrap</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <TbBrandTailwind color="#88b2ec" size="80px" />
              <h4>Tailwind</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <DiGit color="#F1502F" size="80px" />
              <h4>Git</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <SiAdobecreativecloud color="#ED2224" size="80px" />
              <h4>AdobeCC</h4>
            </h4>
          </Col>
        </Row>
      </Container>

      {/* Card with Project #1 */}

      <Container className="p-5 mt-5 border-opacity-10 border-bottom border-light ">
        <Row className="d-flex justify-content-center">
          <Col lg md="12" className="text-light ">
            <h1>Space Explorer Project </h1>
            <p>
              This project was built based on NASA APIs. I used 2 different APIs
              for this project. In the first section of the project's page,
              you'll have the ability to search for a picture based on a start
              date and an end date. One of the challenges in building this
              section was that the APOD API provides pictures that are copyright
              protected so I had to filter them out by using mapping and
              filtering techniques.
            </p>
            <p>
              The second section of my project uses the NASA Image and Video
              Library API that returns a more complex array of data. I also had
              to filter this array for copyrighted content which in this case I
              decided to simply filter the images out of the displayed
              selection. Both sections offer content details that you can access
              by clicking on the picture of your choice. Note that this project
              uses a "DEMO_KEY" so the number of API calls is very limited,
              about 30 calls per hour to a maximum of 50 calls per day per IP
              address. This project outlines my skills using APIs, mapping and
              filtering techniques, conditional rendering, useState, useEffect,
              Params, React Router, CSS Bootstrap framework, and use of local
              storage.
              <p>
                If you wish to see the code for this project, please it{" "}
                <a
                  className="text-light fw-bold text-decoration-underline"
                  href="https://github.com/Gabriel-Moraes-CAD?tab=repositories"
                  target="_blank"
                >
                  HERE
                </a>
                .
              </p>
              <p>
                This project is not affiliated with NASA. All images displayed
                on this project is NASA copyrighted.
              </p>
            </p>
          </Col>

          <Col
            lg
            md="12"
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Rproject1} />
              <Card.Body className="text-light bg-dark bg-opacity-75">
                <Card.Title>
                  <ImRocket sixe="20px" /> Space Explorer{" "}
                </Card.Title>
                <Card.Text>
                  Search for astronomy pictures based on a start/end date (APOD
                  API) and beautiful space related pictures from the NASA Imager
                  and Video Library API.
                </Card.Text>
                <Link to={"/spacepromain/"}>
                  <Button variant="light">Let's take a look</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Card with Project #2 */}

      <Container className="p-5 mt-5 border-bottom border-light">
        <Row>
          <Col
            lg
            md="12"
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: "18rem" }} className="mb-4">
              <Card.Img variant="top" src={bugtracker} />
              <Card.Body className="text-light bg-dark bg-opacity-75">
                <Card.Title>CRM / Bug Tracker</Card.Title>
                <Card.Text>Currently under development.</Card.Text>
                <Button variant="light">Coming soon</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg md="12" className="text-light">
            <h1>CRM / Bug Tracker Project</h1>
            <p>
              I'm currently developing a crm/bug tracker project. Stay tunned.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Main page Footter */}
      <div className="footer">
        <Container className="text-light">
          <Row>
            <Col className="text-light text-center pt-5">
              <h4>Gabriel Moraes - Front End Developer</h4>
            </Col>
            <Row>
              <Col className="d-flex justify-content-center p-2 mb-5">
                <a
                  href="https://www.linkedin.com/in/gabriel-moraes-a51ab3143/"
                  target="_blank"
                >
                  <AiFillLinkedin className="text-light" size="40px" />
                </a>
                <a href="mailto:mr.gabriel.moraes@gmail.com">
                  <AiOutlineMail className="mx-3 text-light" size="40px" />
                </a>
                <a href="https://github.com/Gabriel-Moraes-CAD" target="_blank">
                  <AiFillGithub size="40px" className="text-light" />
                </a>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <dl>
                <dt className="mb-2 text-warning">JavaScript Projects</dt>
                <a
                  href="https://gabriel-moraes-cad.github.io/Gabriel-Moraes/html/javascript-project-file.html#blackjack"
                  target="_blank"
                >
                  <dd> - Blackjack Game</dd>
                </a>
                <a
                  href="https://gabriel-moraes-cad.github.io/Gabriel-Moraes/html/javascript-project-file.html#counter"
                  target="_blank"
                >
                  <dd> - Passenger Conter</dd>
                </a>
                <a
                  href="https://gabriel-moraes-cad.github.io/Gabriel-Moraes/html/javascript-project-file.html#scoreboard"
                  target="_blank"
                >
                  <dd> - Basketball Scorecard</dd>
                </a>
              </dl>
            </Col>

            <Col className="d-flex justify-content-center">
              <dl>
                <dt className="mb-2 text-primary">HTML / CSS projects</dt>
                <a
                  href="https://gabriel-moraes-cad.github.io/Gabriel-Moraes/html/email-template.html"
                  target="_blank"
                >
                  <dd> - HTML EMAIL Templates</dd>
                </a>
                <a
                  href="https://gabriel-moraes-cad.github.io/Gabriel-Moraes/html/index.html"
                  target="_blank"
                >
                  <dd> - HTML portifolio</dd>
                </a>
                <dd> </dd>
              </dl>
            </Col>

            <Col className="d-flex justify-content-center">
              <dl>
                <dt className="mb-2 text-info">React JS projects</dt>
                <a href="#">
                  <dd> - Space Explorer</dd>
                </a>
                <a href="#">
                  <dd> - CRM Bug Tracker (coming soon)</dd>
                </a>
                <dd> </dd>
              </dl>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MainPage;
