import React from "react";
import augmented_reality from "../../assets/images/augmented_reality.png";
import website from "../../assets/images/website.png";
import virtual from "../../assets/images/virtual.png";
import mobile from "../../assets/images/mobile.png";
import designlogo from '../../assets/images/design-logo.png';

import "./Trust.css";

const Trust = () => {
  return (
    <div className="Trust-content-wrapper">
      <div className="inner-content-wrapper">
        <div>
          <h3 style={{ font: "normal normal 600 2.5rem/95px Poppins",textAlign:'center' }}>
            Kodehash Talent that
          </h3>
          <p
            className="text"
            style={{ font: "normal normal 600 2.4rem/9px Poppins" }}
          >
            Top-Tier Companies Trust
          </p>
        </div>
        <div className="ImageWrappedContainer">
          <div className="image-wrapper">
            <img
              src={augmented_reality}
              alt="augmented reality"
              style={{ height: "100%", width: "100%",objectFit:'contain' }}
            />
          </div>
          <div className="image-wrapper">
            <img
              src={website}
              alt="website"
              style={{ height: "100%", width: "100%",objectFit:'contain' }}
            />
          </div>
          <div className="image-wrapper">
            <img
              src={virtual}
              alt="virtual"
              style={{ height: "100%", width: "100%",objectFit:'contain' }}
            />
          </div>
          <div className="image-wrapper">
            <img
              src={mobile}
              alt="mobile"
              style={{ height: "100%", width: "100%",objectFit:'contain' }}
            />
          </div>

          <div className="image-wrapper">
            <img
              src={designlogo}
              alt="designlogo"
              style={{ height: "100%", width: "100%",objectFit:'contain' }}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Trust;
