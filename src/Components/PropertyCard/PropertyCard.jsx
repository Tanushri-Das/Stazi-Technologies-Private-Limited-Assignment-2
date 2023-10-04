import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineApartment, MdOutlineBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { BsArrowsFullscreen, BsHeart } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  const {
    id,
    image,
    location,
    area,
    room,
    bed,
    bath,
    distance,
    amount,
    status,
    popularities,
  } = property;

  return (
    <Link to={`/property/${id}`} className="text-decoration-none">
      <Card className="p-2">
        <div className="d-flex flex-column position-relative">
          <Card.Img variant="top" style={{ height: "15rem" }} src={image} />
          <div className="position-absolute popular-div-position">
            {popularities && (
              <div className="text-start">
                <p className="popular">{popularities}</p>
              </div>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center img-overlay img-inside-text">
            <div>
              <button className="status">{status}</button>
            </div>
            <div className="heart-icon">
              <BsHeart className="heart" />
            </div>
          </div>
        </div>

        <Card.Body className="property-card">
          <Card.Text className="text-start fw-semibold card-lcn d-flex align-items-center">
            <HiOutlineLocationMarker className="location-icon" />
            <span className="ms-2">{location}</span>
          </Card.Text>
          <Card.Text className="fs-3 fw-bold text-start ">{area}</Card.Text>
          <Container className="pb-3 border-row">
            <Row className="mt-4">
              <Col xs={3}>
                <div>
                  <div className="d-flex">
                    <MdOutlineApartment />
                  </div>
                  <Card.Text className="room text-start">{room} Room</Card.Text>
                </div>
              </Col>
              <Col xs={3} className="border-left border-dashed">
                <div>
                  <div className="d-flex">
                    <MdOutlineBed />
                  </div>
                  <Card.Text className="room text-start">{bed} Bed</Card.Text>
                </div>
              </Col>
              <Col xs={3} className="border-left border-dashed">
                <div>
                  <div className="d-flex">
                    <BiBath />
                  </div>
                  <Card.Text className="room text-start">{bath} Bath</Card.Text>
                </div>
              </Col>
              <Col xs={3} className="border-left border-dashed">
                <div className="d-flex">
                  <BsArrowsFullscreen />
                </div>
                <div>
                  <Card.Text className="room text-start sft">
                    {distance} sft
                  </Card.Text>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <h5>
                <span className="amount">{amount}</span> /month
              </h5>
            </div>
            <div>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PropertyCard;
