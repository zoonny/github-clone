import React from "react";
import styled from "styled-components";

const LocationSection = styled.section`
  .inner {
    padding: 80px;
  }
  #map {
    width: 100%;
    height: 400px;
    margin-top: 40px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    .inner {
      max-width: none;
      padding: 80px 20px 0 20px;
    }
  }

  @media (max-width: 768px) {
    .summary__title {
      font-size: 34px !important;
    }
    .summary__description {
      font-size: 22px;
    }
    #map {
      width: auto;
      margin: 40px -20px 0 -20px;
      border-left: none;
      border-right: none;
    }
  }
`;

function Location() {
  return (
    <LocationSection className="section">
      <div className="inner">
        <div className="summary">
          <div className="summary__title">Where is GitHub?</div>
          <div className="summary__description">
            GitHub is where people build software. More than 18 million people
            use GitHub to discover, fork, and contribute to over 48 million
            projects.
          </div>
        </div>
        <div id="map"></div>
      </div>
    </LocationSection>
  );
}

export default Location;
