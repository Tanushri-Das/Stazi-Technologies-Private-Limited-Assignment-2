import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BsArrowsFullscreen, BsHeart } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineApartment, MdOutlineBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import "./PropertyPage.css";

const PropertyPage = () => {
  const { id } = useParams();
  const properties = useSelector((state) => state.properties);

  const property = findPropertyById(properties, id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <Container className="mx-auto text-center">
      <h2 className="mb-4">Property Details</h2>
      <Row>
        <Col key={id} xs={12} md={6} className="mx-auto">
          <Card className="p-2">
            <div className="d-flex flex-column">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  style={{ height: "15rem" }}
                  src={property.image}
                />
                <div className="d-flex justify-content-between align-items-center img-overlay img-inside-text">
                  <div>
                    <button className="status">{property.status}</button>
                  </div>
                  <div className="heart-icon">
                    <BsHeart className="heart" />
                  </div>
                </div>
              </div>
              <Card.Body className="property-card">
                <Card.Text className="text-start fw-semibold card-lcn d-flex align-items-center">
                  <HiOutlineLocationMarker className="location-icon" />
                  <span className="ms-2">{property.location}</span>
                </Card.Text>
                <Card.Text className="fs-3 fw-bold text-start ">
                  {property.area}
                </Card.Text>
                <Container className="pb-3 border-row">
                  <Row className="mt-4">
                    <Col xs={3}>
                      <div>
                        <div className="d-flex">
                          <MdOutlineApartment />
                        </div>
                        <Card.Text className="room text-start">
                          {property.room} Room
                        </Card.Text>
                      </div>
                    </Col>
                    <Col xs={3} className="border-left border-dashed">
                      <div>
                        <div className="d-flex">
                          <MdOutlineBed />
                        </div>
                        <Card.Text className="room text-start">
                          {property.bed} Bed
                        </Card.Text>
                      </div>
                    </Col>
                    <Col xs={3} className="border-left border-dashed">
                      <div>
                        <div className="d-flex">
                          <BiBath />
                        </div>
                        <Card.Text className="room text-start">
                          {property.bath} Bath
                        </Card.Text>
                      </div>
                    </Col>
                    <Col xs={3} className="border-left border-dashed">
                      <div className="d-flex">
                        <BsArrowsFullscreen />
                      </div>
                      <div>
                        <Card.Text className="room text-start sft">
                          {property.distance} sft
                        </Card.Text>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div>
                    <h5>
                      <span className="amount">{property.amount}</span> /month
                    </h5>
                  </div>
                  <div>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        {" "}
        {/* Add justify-content-center */}
        <Col md={4} className="mx-auto">
          <Link to="/" className="text-decoration-none">
            <div className="custom-button">
              <div className="text font-semibold">Back to Home</div>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

const findPropertyById = (properties, id) => {
  for (const tabProperties of Object.values(properties)) {
    const property = tabProperties.find(
      (property) => property.id.toString() === id
    );
    if (property) {
      return property;
    }
  }
  return null;
};

export default PropertyPage;
