import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function SpaceProFigGrid() {
  // Figure gallery  Image Api
  const [data, setData] = useState([[]]);

  useEffect(() => {
    searchDateRange();
  }, []);

  // API call Space Fig Grid Gallery hard coded search!
  const searchDateRange = async () => {
    const check = localStorage.getItem("Figures");

    if (check) {
      setData(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://images-api.nasa.gov/search?q=sun&page=1&media_type=image&year_start=2022&year_end=2022`
      );
      const data = await api.json();

      localStorage.setItem("Figures", JSON.stringify(data));
      setData(data);
      console.log(data);
    }
  };

  return (
    <div>
      {/* NewsLetter section */}
      <div className="bg-dark text-light space-font p-5">
        <Container className=" mt-2 text-center ">
          <Row>
            <Col sm={6}>
              {" "}
              <h2>Astronomy NewsLetter</h2>
            </Col>
            <Col sm={6}>
              {" "}
              <InputGroup className="mb-0" size="md">
                <Form.Control
                  placeholder="Enter your Email (currently disabled)"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className=""
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Sign Up
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Space Pro Fig Grid - Seach term: Sun, date: 2022/2022 from: NASA IMAGE AND VIDEO LIBRARY */}

      <div className="space-font space-galery2 p-5">
        <Container className="text-light ">
          <h3>Astronomy Gallery - Content from NASA Image Library </h3>
          <Row className=" d-flex text-light ">
            <Col className=" d-flex justify-content-center flex-wrap ">
              {data?.collection?.items?.map((items, index) => {
                const copyrighted = items?.data?.some((data) =>
                  data.hasOwnProperty("photographer")
                );
                if (copyrighted) {
                  return false;
                } else {
                  return (
                    <div key={index} className="d-flex justify-items-center">
                      <Card style={{ width: "15rem" }} className="m-4">
                        {items?.links?.map((links) => {
                          const nasaId = items?.data?.map((data) => {
                            return data.nasa_id;
                          });
                          return (
                            <>
                              <Link to={"/SpaceProFigGridDetails/" + nasaId}>
                                <Card.Img
                                  variant="top"
                                  style={{ width: "238px", height: "180px" }}
                                  src={links?.href}
                                  alt="123"
                                ></Card.Img>
                              </Link>
                              <Card.Body className="bg-dark text-light bg-opacity-30">
                                {items?.data?.map((data) => {
                                  return (
                                    <>
                                      <Card.Title>
                                        {data?.title?.substring(0, 15)}
                                      </Card.Title>
                                      <Card.Text>
                                        {data?.description?.substring(0, 75) +
                                          "..."}
                                      </Card.Text>
                                    </>
                                  );
                                })}
                              </Card.Body>
                            </>
                          );
                        })}
                      </Card>
                    </div>
                  );
                }
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SpaceProFigGrid;
