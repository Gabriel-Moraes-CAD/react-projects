import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link, useParams } from "react-router-dom";
import SpaceProNavBar from "./SpaceProNavBar";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import SpaceProFooter from "./SpaceProFooter";

function SpaceProSpaceGDetails() {
  const [details, setDetails] = useState({});
  let params = useParams();

  // Api call with paramss
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${params.image}&concept_tags=True`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails(params.image);
    console.log(params.image);
  }, [params.image]);

  return (
    <div>
      <SpaceProNavBar />

      <div className="details-bg">
        <Container className="image-details space-font text-center text-light">
          <h3 className="p-3">{details.title}</h3>
          <Row className=" d-flex justify-content-center text-center">
            <Col lg md="6" className="mt-3 me-3">
              <img
                className="image-details p-2 bg-dark bg-opacity-50 "
                src={details.url}
                alt="123"
              ></img>
            </Col>
            <Col lg md="6" className=" text-start p-none p-md-3 ms-3">
              <p>&copy; NASA</p>
              <p>{details.explanation}</p>

              <p> Post date: "{details.date}"</p>
              <Link to={"/SpaceProMain/"}>
                <p className="text-end text-light">
                  <MdOutlineKeyboardBackspace
                    className="text-light"
                    size="35px"
                  />{" "}
                  Go Back
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <SpaceProFooter />
    </div>
  );
}

export default SpaceProSpaceGDetails;
