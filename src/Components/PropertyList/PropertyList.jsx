import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./PropertyList.css"; 
import {FaRegHourglass} from "react-icons/fa";
import PropertyCard from "../PropertyCard/PropertyCard";


const PropertyList = () => {
  const [activeTab, setActiveTab] = useState("New York"); 
  const properties = useSelector((state) => state.properties[activeTab]);
  const [displayCount, setDisplayCount] = useState(6); // Number of properties to display
  const [showMore, setShowMore] = useState(true); // Track if "Show More" or "Show Less" button should be displayed

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
    setDisplayCount(6); // Reset display count when switching tabs
    setShowMore(true); // Reset to "Show More" when switching tabs
  };

  // Slice the properties array based on the displayCount
  const displayedProperties = properties ? properties.slice(0, displayCount) : [];

  const handleShowMoreOrLess = () => {
    // Toggle between "Show More" and "Show Less" states
    if (showMore) {
      // If currently showing 6 properties, show 9 properties
      setDisplayCount(properties.length);
    } else {
      // If currently showing 9 properties, show 6 properties
      setDisplayCount(6);
    }
    setShowMore(!showMore); // Toggle the button text
  };

  return (
    <div className="property-list mt-5 px-5">
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        id="property-list-tabs"
        className="mb-3"
      >
        <Tab eventKey="New York" title="New York">
          <Row>
            {displayedProperties.map((property, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="g-4">
                <PropertyCard property={property} />
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="Mumbai" title="Mumbai">
          <Row>
            {displayedProperties.map((property, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="g-4">
                <PropertyCard property={property}/>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="London" title="London">
          <Row>
            {displayedProperties.map((property, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="g-4">
                <PropertyCard property={property}/>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="Paris" title="Paris">
          <Row>
            {displayedProperties.map((property, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="g-4">
                <PropertyCard property={property}/>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>

      {properties.length > 6 && (
        <button onClick={handleShowMoreOrLess} className="show-more-button mt-5">
        <FaRegHourglass/>  {showMore ? "Show More" : "Show Less"}
        </button>
      )}
    </div>
  );
};

export default PropertyList;