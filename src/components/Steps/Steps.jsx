import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Steps.css";
import Mask from "../../assets/images/Mask1.png";
import Mask2 from "../../assets/images/Mask2.png";
import Mask3 from "../../assets/images/Mask3.png";

export default function Steps() {
  return (
    <div className="App">
      <div className="main-div">
        <div
          style={{
            width: "80%",
            // height: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "18%",
              display: "flex",
              gap: "22px",
            }}
          >
            <div
              style={{
                width: "50%",
                // height: "100%",
                // border: "1px solid green",
                display: "flex",
                flexDirection: "column",
                marginTop: "3px",
              }}
            >
              <h1 style={{ color: "#fff", fontSize: "3.6rem" }}>
                Craft Your Dream Development Team
              </h1>
              <h1
                className="bordered-text text"
                style={{
                  // color: "#fff",
                  fontSize: "3.5rem",
                  position: "relative",
                  //   bottom: "1.1rem",
                  //   textShadow: " #fff 0px 0px 3px, 4px 3px 3px",
                }}
              >
                In 3 Effortless Steps
              </h1>
            </div>
            <div
              style={{
                width: "50%",
                // height: "100%",
                // border: "1px solid green",
                marginTop: "0.6rem",
              }}
            >
              <p className="letter-right-div">
                Utilise the expertise of top-tier remote developers and make a
                significant impact in the tech industry without enduring the
                arduous hiring process. Discover the path to hiring remote
                developers with exceptional technical acumen and impeccable
                communication skills, effortlessly and swiftly.
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              //   height: "195px",
              display: "flex",
              marginTop: "5rem",
              gap: "25px",
              // position:"relative",
              // bottom:"35px"
              //   display:"flex"
            }}
          >
            <div className="cards-section">
              <div className="cards-profile">
                <img src={Mask} />
              </div>
              <div
                style={{
                  width: "92%",
                  //   height: "63%",

                  color: "#fff",
                  position: "relative",
                  bottom: "32px",
                  textAlign: "center",
                }}
              >
                <div style={{ width: "100%" }}>
                  <p style={{ font: "normal normal 600 20px/26px Poppins" }}>
                    What is Your Requirement?
                  </p>
                  <span
                    style={{
                      font: "normal normal normal 14px/19px Poppins",
                      textAlign: "center",
                      display: "inline-block",
                      marginTop: "1.9rem",
                    }}
                  >
                    Complete the online form on our platform, providing details
                    about your remote developer or team-building timeline, the
                    specific skills you require, the number of team members
                    desired, and a brief introduction to your organisation.
                  </span>
                </div>
              </div>
            </div>
            <div className="cards-section">
              <div className="cards-profile">
                <img src={Mask2} />
              </div>
              <div
                style={{
                  width: "87%",
                  height: "63%",

                  color: "#fff",
                  position: "relative",
                  bottom: "32px",
                  textAlign: "center",
                }}
              >
                <p style={{ font: "normal normal 600 20px/26px Poppins" }}>
                  Schedule a Call
                </p>
                <span
                  style={{
                    font: "normal normal normal 14px/19px Poppins",
                    textAlign: "center",
                    display: "inline-block",
                    marginTop: "1.9rem",
                  }}
                >
                  Book a conversation at your convenience to delve into your
                  requirements and the goals you aim to achieve with your
                  software development team.
                </span>
              </div>
            </div>
            <div className="cards-section">
              <div className="cards-profile">
                <img src={Mask3} />
              </div>
              <div
                style={{
                  width: "89%",
                  height: "63%",
                  color: "#fff",
                  position: "relative",
                  bottom: "32px",
                  textAlign: "center",
                }}
              >
                <p style={{ font: "normal normal 600 20px/26px Poppins" }}>
                  Acquire Suitable Remote Developers in Under 24 Hours
                </p>
                <span
                  style={{
                    font: "normal normal normal 14px/19px Poppins",
                    textAlign: "center",
                    display: "inline-block",
                    marginTop: "1.9rem",
                  }}
                >
                  We will connect you with software developers who best align
                  with your specifications, swiftly building your engineering
                  team with the right remote talent for your company within a
                  day.
                </span>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "5rem" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#fff", fontSize: "3.5rem" }}>
                Discover a Few of the Tech Stacks for
              </p>
              <p style={{ color: "#fff", fontSize: "3.6rem" }}>
                Which We Source Remote Developers
              </p>
            </div>
            <div
              style={{
                width: "70%",
                textAlign: "center",
                color: "#fff",
                margin: "auto",
                position: "relative",
                top: "2rem",
              }}
            >
              <span style={{ fontSize: "21px" }}>
                At Kodehash, our talent acquisition extends across a broad array
                of tech stacks, ensuring that we can absolutely identify the
                perfect match for your needs!
              </span>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              // border: "1px solid red",
              justifyContent: "center",
              gap: "10px",
              marginTop: "5rem",
            }}
          >
           

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2rem 0",
                gap: "1rem",
              }}
            >
              <p>
                <button
                  style={{
                    color: "#00C4FF",
                    border: "2px solid #ffffff",
                    backgroundColor: "transparent",
                    padding: "0.7rem 4rem",
                    borderRadius: "2rem",
                  }}
                >
                  Technology
                </button>
                <span
                  style={{
                    color: "#00C4FF",
                    border: "2px solid #ffffff",
                    backgroundColor: "transparent",
                    marginLeft: "0.4rem",
                    borderRadius: "50%",
                    padding: "0.7rem 0.8rem",
                  }}
                >
                  <FaArrowRight
                    style={{ color: "#00C4FF", verticalAlign: "middle" }}
                  />
                </span>
              </p>

              <p>
                <span
                  style={{
                    color: "#00C4FF",
                    border: "2px solid #ffffff",
                    backgroundColor: "transparent",
                    marginLeft: "0.4rem",
                    borderRadius: "50%",
                    padding: "0.7rem 0.8rem",
                  }}
                >
                  <FaArrowRight
                    style={{ color: "#00C4FF", verticalAlign: "middle" }}
                  />
                </span>
                <button
                  style={{
                    color: "#fff",
                    border: "none",
                    backgroundColor: "#00C4FF",
                    padding: "0.7rem 4rem",
                    borderRadius: "2rem",
                    fontWeight: "600",
                  }}
                >
                  My Role
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
