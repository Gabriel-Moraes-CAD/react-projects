import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";

function SpaceProFooter() {
  return (
    <div className="bg-dark text-light text-center p-3">
      <Container className="text-light ">
        <Row>
          <Col className="text-light text-center pt-5">
            <h4>Gabriel Moraes - Front End Developer</h4>
          </Col>
          <Row>
            <Col className="d-flex justify-content-center p-2 mb-5">
              <a
                href="https://www.linkedin.com/in/gabriel-moraes-a51ab3143/"
                className="text-light"
                target="_blank"
              >
                <AiFillLinkedin size="40px" />
              </a>
              <a
                href="mailto:mr.gabriel.moraes@gmail.com"
                className="text-light"
              >
                <AiOutlineMail className="mx-3" size="40px" />
              </a>
              <a
                href="https://github.com/Gabriel-Moraes-CAD"
                target="_blank"
                className="text-light"
              >
                <AiFillGithub size="40px" />
              </a>
            </Col>
            <p>
              This project is not affiliated with NASA. All images displayed on
              this project is NASA copyrighted. I created this page for
              educational/personal purpose only
            </p>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default SpaceProFooter;
