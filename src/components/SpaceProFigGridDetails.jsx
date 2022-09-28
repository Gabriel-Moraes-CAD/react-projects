import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { Link, useParams } from "react-router-dom";
import SpaceProNavBar from "./SpaceProNavBar";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import SpaceProFooter from "./SpaceProFooter";
import Row from "react-bootstrap/esm/Row";

function SpaceProFigGridDetails() {
  const [details, setDetails] = useState([[]]);
  let params = useParams();

  // Api call with params
  const fetchDetails = async () => {
    const data = await fetch(
      `https://images-api.nasa.gov/search?q=sun&page=1&media_type=image&nasa_id=${params.id}&year_start=2022&year_end=2022`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails(params.id);
    console.log(params.id);
  }, [params.id]);

  return (
    <div>
      <SpaceProNavBar />
      <div className="details-bg">
        {details?.collection?.items?.map((items, index) => {
          const copyrighted = items?.data?.some((data) =>
            data.hasOwnProperty("photographer")
          );
          if (copyrighted) {
            return false;
          } else {
            return (
              <Container
                key={index}
                className=" space-font text-center text-light"
              >
                {items?.links?.map((links) => {
                  const nasaId = items?.data?.map((data) => {
                    return data.nasa_id;
                  });
                  return (
                    <Row className=" d-flex justify-content-center text-center">
                      <Col lg md="6" className=" mt-3 me-3">
                        <img
                          className="image-details p-2 bg-dark bg-opacity-50 "
                          src={links?.href}
                          alt="123"
                        ></img>
                      </Col>
                      {items?.data?.map((data) => {
                        return (
                          <Col
                            lg
                            md="6"
                            className="text-start p-none p-md-3 ms-3"
                          >
                            <h3>{data?.title}</h3>
                            <p>{data?.description}</p>
                            <p>&copy; {data?.secondary_creator}</p>
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
                        );
                      })}
                    </Row>
                  );
                })}
              </Container>
            );
          }
        })}
      </div>
      <SpaceProFooter />
    </div>
  );
}

export default SpaceProFigGridDetails;
