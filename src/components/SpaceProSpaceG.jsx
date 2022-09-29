import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";
import imageError from "../images/error-pic.jpg";

function SpaceProSpaceG() {
  // Space Image Statee
  const [data, setData] = useState([[]]);
  const [startDate, setStartDate] = useState("2022-03-02");
  const [endDate, setEndDate] = useState("2022-03-11");
  const [renderItems, setRenderItems] = useState(false);

  // API call Space Gallery
  const searchDateRange = async () => {
    const api = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${startDate}&end_date=${endDate}`
    );
    const data = await api.json();
    setData(data);
    setRenderItems(!renderItems);
    console.log(data);
  };

  //  Triggered by search button - conditional rendering + API call
  const trigger = () => {
    searchDateRange();
  };

  return (
    <div>
      {/* Neil A. Quote */}
      <div className="bg-dark text-light space-font p-5">
        <Container className=" mt-2 text-start">
          <h2>"That's one small step for man, one giant leap for mankind." </h2>
          <p className="text-end">(Neil Armstrong)</p>
        </Container>
      </div>

      {/* Space galery - ONLY visible once search made (button triggers redering) */}

      <div className="space-galery d-flex p-3">
        <Container className="d-flex align-items-center space-font">
          <Row>
            <h3>Space Image Gallery - Content from APO NASA </h3>
            <Row className=" d-flex justify-content-center my-4">
              <Col sm lg="4" className="d-flex flex-column my-1">
                <label
                  className="fw-bold bg-dark bg-opacity-50"
                  for="start-date"
                >
                  Start Date (YYYY-MM-DD)
                </label>
                <input
                  id="start-date"
                  className="input-box"
                  type="text"
                  placeholder="Start date (YYYY-MM-DD)"
                  value={startDate}
                  onChange={(event) => setStartDate(event.target.value)}
                ></input>
              </Col>
              <Col sm lg="4" className="d-flex flex-column  my-1">
                <label className="fw-bold bg-dark bg-opacity-50" for="end-date">
                  End Date (YYYY-MM-DD)
                </label>
                <input
                  id="end-date"
                  className="input-box"
                  type="text"
                  placeholder="End date (YYYY-MM-DD)"
                  value={endDate}
                  onChange={(event) => setEndDate(event.target.value)}
                ></input>
              </Col>
              <Col
                lg="2"
                className="d-flex flex-column justify-content-center align-items-center mt-4"
              >
                <Button
                  type="button"
                  className="btn btn-light"
                  onClick={trigger}
                >
                  Search
                </Button>
              </Col>
            </Row>

            {/* Space Cards Gallery */}
            {renderItems && (
              <Col className="d-flex justify-content-center flex-wrap">
                {/* API Mapping + Link system */}
                {data?.map((image, index) => {
                  console.log(image);
                  if (image?.copyright) {
                    return (
                      <Card
                        style={{ width: "15rem" }}
                        key={index}
                        className="m-4"
                      >
                        <Card.Img
                          variant="top"
                          style={{ width: "238px", height: "180px" }}
                          src={imageError}
                          alt="123"
                        />

                        <Card.Body className="bg-dark bg-opacity-30">
                          <Card.Title>
                            Copyright <AiOutlineCopyright size="25px" />{" "}
                          </Card.Title>
                          <Card.Text className="space-font">
                            Sorry this image is copyrighted. We hope you'll
                            enjoy the other images from your search!
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  } else {
                    return (
                      <Card
                        style={{ width: "15rem" }}
                        key={index}
                        className="m-4"
                      >
                        <Link to={"/SpaceProSpaceGDetails/" + image?.date}>
                          <Card.Img
                            variant="top"
                            style={{ width: "238px", height: "180px" }}
                            src={image?.url}
                            alt={image?.title}
                          />
                        </Link>
                        <Card.Body className="bg-dark bg-opacity-30">
                          <Card.Title>
                            {image?.title?.substring(0, 13)}
                          </Card.Title>
                          <Card.Text className="space-font">
                            {image?.explanation?.substring(0, 75) + "..."}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  }
                })}
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SpaceProSpaceG;
