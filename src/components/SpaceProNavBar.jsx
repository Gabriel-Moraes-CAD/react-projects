import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImRocket } from "react-icons/im";
import { RiArrowGoBackLine } from "react-icons/ri";

function SpaceProNavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="nav-bar">
        <Container>
          <Navbar.Brand href="/spacepromain/">
            {" "}
            <ImRocket /> Space Explorer{" "}
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">
              Main page <RiArrowGoBackLine />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default SpaceProNavBar;
