import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.svg";
import Rproject1 from "../images/background-card.jpeg";
import Qrcode from "../images/go-qr-code.png";
import bugtracker from "../images/bugtracker.jpg";
import {
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandReactNative,
  TbBrandBootstrap,
  TbBrandTailwind,
} from "react-icons/tb";
import { FaCanadianMapleLeaf, FaNodeJs, FaNpm } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import { ImRocket } from "react-icons/im";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import {
  SiStyledcomponents,
  SiAdobecreativecloud,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    // Nav Bar
    <div className="bg-dark">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Gabriel Moraes</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="https://gabriel-moraes-cad.github.io/Gabriel-Moraes/html/index.html">
              Home
            </Nav.Link>
            <Nav.Link href="https://gabriel-moraes-cad.github.io/Gabriel-Moraes/html/index.html#project">
              Projects
            </Nav.Link>
            <Nav.Link href="https://gabriel-moraes-cad.github.io/Gabriel-Moraes/html/index.html#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      {/* Header */}
      <Container className="bg-dark text-light text-center text-sm-star mt-sm-5 border-bottom border-light">
        <div className="container p-5 mb-4">
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
            <div className="w-50  d-none d-md-block">
              <svg
                viewBox="0 0 600 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="react_logo">
                  <rect
                    id="Rectangle 1"
                    x="0.5"
                    y="0.5"
                    width="599"
                    height="499"
                    stroke="#292b2c0"
                  />
                  <g id="react_inner">
                    <path
                      id="Vector"
                      d="M299.52 342.951C235.088 342.951 174.482 333.359 128.868 315.943C82.6457 298.295 57.1902 274.588 57.1902 249.188C57.1902 223.789 82.6458 200.083 128.868 182.434C174.482 165.018 235.088 155.427 299.52 155.427C363.953 155.427 424.558 165.018 470.173 182.434C516.394 200.083 541.85 223.79 541.85 249.188C541.85 274.587 516.394 298.295 470.173 315.943C424.558 333.359 363.953 342.951 299.52 342.951ZM299.52 159.427C235.563 159.427 175.465 168.925 130.295 186.171C85.7317 203.186 61.1902 225.566 61.1902 249.188C61.1902 272.81 85.7317 295.191 130.295 312.206C175.465 329.453 235.563 338.951 299.52 338.951C363.477 338.951 423.576 329.453 468.745 312.206C513.308 295.191 537.85 272.811 537.85 249.188C537.85 225.565 513.308 203.186 468.745 186.171C423.575 168.925 363.477 159.427 299.52 159.427Z"
                      fill="#61DAFB"
                    />
                    <path
                      id="Vector_2"
                      d="M399.642 464.378C379.618 464.378 354.657 452.805 327.035 430.355C289.145 399.56 250.535 351.87 218.32 296.07C186.103 240.27 164.107 182.988 156.383 134.777C148.556 85.9228 156.359 52.0243 178.355 39.3251C200.351 26.6264 233.611 36.8178 272.005 68.0224C309.895 98.8178 348.505 146.508 380.72 202.308C412.937 258.107 434.933 315.39 442.657 363.601C450.484 412.455 442.681 446.353 420.685 459.054C414.513 462.616 407.452 464.378 399.642 464.378ZM199.505 37.9692C192.365 37.9692 185.943 39.5629 180.355 42.789C159.897 54.6005 152.786 87.0439 160.333 134.144C167.982 181.886 189.805 238.682 221.783 294.07C253.762 349.458 292.037 396.756 329.558 427.251C366.575 457.337 398.228 467.402 418.685 455.589C439.143 443.777 446.254 411.334 438.707 364.234C431.058 316.492 409.235 259.696 377.257 204.308C345.278 148.92 307.003 101.622 269.482 71.1269C242.576 49.2587 218.504 37.9692 199.505 37.9692Z"
                      fill="#61DAFB"
                    />
                    <path
                      id="Vector_3"
                      d="M199.397 464.378C191.586 464.378 184.528 462.617 178.355 459.054C156.359 446.353 148.556 412.455 156.383 363.602C164.107 315.39 186.103 258.107 218.32 202.308C250.535 146.508 289.145 98.8178 327.035 68.0224C365.43 36.8173 398.69 26.6249 420.685 39.3251C442.681 52.0243 450.484 85.9228 442.657 134.777C434.933 182.988 412.937 240.27 380.72 296.07C348.505 351.87 309.895 399.56 272.005 430.355C244.385 452.804 219.421 464.378 199.397 464.378ZM399.535 37.9692C380.536 37.9692 356.467 49.2573 329.558 71.1269C292.037 101.622 253.762 148.92 221.783 204.308C189.805 259.696 167.982 316.492 160.333 364.234C152.786 411.334 159.897 443.777 180.355 455.589C185.942 458.814 192.367 460.408 199.505 460.409C218.504 460.411 242.573 449.121 269.482 427.251C307.003 396.756 345.278 349.458 377.257 294.07C409.235 238.682 431.058 181.886 438.707 134.144C446.254 87.0439 439.143 54.6005 418.685 42.789C413.098 39.5639 406.673 37.9692 399.535 37.9692Z"
                      fill="#61DAFB"
                    />
                    <path
                      id="Vector_4"
                      d="M299.52 293.978C324.256 293.978 344.309 273.925 344.309 249.189C344.309 224.453 324.256 204.4 299.52 204.4C274.784 204.4 254.731 224.453 254.731 249.189C254.731 273.925 274.784 293.978 299.52 293.978Z"
                      fill="#61DAFB"
                    />
                  </g>
                </g>
              </svg>
            </div>
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
              <TbBrandReactNative color="#61dbfb" size="80px" />
              <h4>Native</h4>
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

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <GrGraphQl color="#e535ab" size="80px" />
              <h4>GraphQL</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <FaNodeJs color="#3c873a" size="80px" />
              <h4>Node JS</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <SiFirebase color="#F6820D" size="80px" />
              <h4>Firebase</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <SiNextdotjs color="#Fffff" size="80px" />
              <h4>Next JS</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <FaNpm color="#CC3534" size="80px" />
              <h4>NPM</h4>
            </h4>
          </Col>
        </Row>
      </Container>

      {/* Card with Project #1 */}

      <Container className="p-5 mt-5 ">
        <Row className="d-flex justify-content-center">
          <Col lg md="12" className="text-light ">
            <h1 className="mb-5">Space Explorer Project </h1>
            <h2>Web Version</h2>
            <p>
              This project was built based on 2 different NASA APIs. In the
              first section of the project's page, you'll have the ability to
              search for a picture based on a start date and an end date.
            </p>
            <p>
              One of the challenges in building this section was that the APOD
              API provides pictures that are copyright protected so I had to
              filter them out by using mapping and filtering techniques.
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
              address. If you're having trouble rendering your selected dates,
              this could be a reason.
            </p>
            <p>
              This project outlines my skills using APIs, mapping and filtering
              techniques, conditional rendering,form validation, useState,
              useEffect, Params, React Router, CSS Bootstrap framework, and use
              of local storage.
            </p>
            <p>
              If you wish to see the code for this project, please{" "}
              <a
                className="text-light fw-bold text-decoration-underline"
                href="https://github.com/Gabriel-Moraes-CAD/react-projects.git"
                target="_blank"
              >
                CLICK HERE
              </a>
              .
            </p>
            <p>
              This project is not affiliated with NASA. All images displayed on
              this project are copyrighted by NASA.
            </p>
            <h2 className="mt-5">Mobile Version</h2>
            <p>
              {" "}
              I built a smaller version of the Space Explorer Web using React
              Native as a mobile version of this project. Because the mobile
              environment is limited in space I decided to only include the APOD
              API capabilities where the user can search for images using a date
              range, similarly to the Space Explorer Web version.
            </p>
            <p>
              The mobile version project outlines my skills using APIs, mapping
              and filtering techniques, conditional rendering, form validation,
              alerts, useState, useEffect, Params, React Native Navigation
              (Stack Navigation), and CSS animation.
            </p>
            <p>
              You can see the mobile version by cloning the repository{" "}
              <a
                className="text-light fw-bold text-decoration-underline"
                href="https://github.com/Gabriel-Moraes-CAD/Space-Explorer-React-Native.git"
                target="_blank"
              >
                HERE
              </a>{" "}
              or by using EXPO. If you have EXPO GO installed on your device,
              you can scan the QR code below and interact with the app.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="p-5 border-opacity-10 border-bottom border-light ">
        <Row className="d-flex justify-content-center g-5">
          <Col
            lg
            md="6"
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Rproject1} />
              <Card.Body className="text-light bg-dark bg-opacity-75">
                <Card.Title>
                  <ImRocket sixe="20px" /> Space Explorer Web
                </Card.Title>
                <Card.Text>
                  Search for astronomy pictures based on a start/end date (APOD
                  API) and beautiful space related pictures from the NASA Image
                  and Video Library API.
                </Card.Text>
                <Link to={"/spacepromain/"}>
                  <Button variant="light">Let's take a look</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col
            lg
            md="6"
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Qrcode} />
              <Card.Body className="text-light bg-dark bg-opacity-75">
                <Card.Title>
                  <ImRocket sixe="20px" /> Space Explorer Mobile
                </Card.Title>
                <Card.Text>
                  Please scan the QR code above to see my app using EXPO. You
                  can also clone my GitHub repository. The app is available for
                  IOS and Android users.
                </Card.Text>

                <Button
                  href="https://github.com/Gabriel-Moraes-CAD/Space-Explorer-React-Native.git"
                  target="_blank"
                  variant="light"
                >
                  GitHub Repository
                </Button>
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
                <Card.Title>Headless CMS</Card.Title>
                <Card.Text>Currently under development.</Card.Text>
                <Button variant="light">Coming soon</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg md="12" className="text-light">
            <h1>Headless CMS with GraphQL + NextJS </h1>
            <p>
              I'm currently developing a Headless CMS with GraphQL + NextJS
              project. Stay tunned.
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
              <p> &copy; 2022 Gabriel Moraes. All rights reserved.</p>
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
                  <dd> - Headless CMS</dd>
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
