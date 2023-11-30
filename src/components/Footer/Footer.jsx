import React from "react";
import KodeHash from "../../assets/images/Kodehash.svg";
import hash from "../../assets/images/hash.svg";
import square from "../../assets/images/square.svg";
import { CiTwitter } from "react-icons/ci";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div
        className="footer"
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div
            style={{
              width: "25%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={square} alt="" srcset="" height={30} />
            <img src={hash} alt="" height={30} />
            <img
              src={KodeHash}
              alt=""
              srcset=""
              height={40}
              style={{ marginLeft: "0.5rem" }}
            />
          </div>
          <div style={{ width: "25%", color: "white" }}>Solutions : </div>
          <div style={{ width: "25%", color: "white" }}>On Demand:</div>
          <div style={{ width: "25%", color: "white" }}>Subscribe: </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "25%",
              padding: "25px",
              marginRight: "20px",
            }}
          >
            <p
              style={{
                color: "white",
                textAlign: "left",
                font: 'normal normal 300 16px/26px Poppins'
              }}
            >
              Kodehash Technologies specialises in Software and Mobile
              Development & have a deep understanding of software development
              best practices & methodo- logies. We work closely with our clients
              to understand their unique needs and requirements.
            </p>
            <hr style={{ color: "grey", marginTop: "1rem" }}></hr>
            <ul
              style={{
                display: "flex",
                textDecoration: "none",
                listStyleType: "none",
                padding: "10px",
                marginTop: "15px",
              }}
            >
              <li>
                <FaTwitter
                  style={{ color: "white", padding: "0px" }}
                ></FaTwitter>
              </li>
              <li>
                <FaLinkedin
                  style={{ color: "white", marginLeft: "12px" }}
                ></FaLinkedin>
              </li>
              <li>
                <FaFacebook
                  style={{ color: "white", marginLeft: "12px" }}
                ></FaFacebook>
              </li>
              <li>
                <FaYoutube
                  style={{ color: "white", marginLeft: "12px" }}
                ></FaYoutube>
              </li>
            </ul>
          </div>
          <div style={{ width: "25%" }}>
            <ul
              style={{
                textDecoration: "none",
                color: "white",
                listStyleType: "none",
                font: "Poppins",
              }}
            >
              <li style={{ paddingBottom: "20px" }}>Cloud Solutions</li>
              <li style={{ paddingBottom: "20px" }}>Data Analytics</li>
              <li style={{ paddingBottom: "20px" }}>Engineering Design</li>
              <li style={{ paddingBottom: "20px" }}>QA Automation</li>
              <li style={{ paddingBottom: "20px" }}>Cutting Edge Solutions</li>
              <li style={{ paddingBottom: "20px" }}> Dev Ops Consulting</li>
            </ul>
          </div>
          <div style={{ width: "25%" }}>
            <ul
              style={{
                textDecoration: "none",
                color: "white",
                listStyleType: "none",
                font: "Poppins",
              }}
            >
              <li style={{ paddingBottom: "20px" }}>Product Managers</li>
              <li style={{ paddingBottom: "20px" }}>Content Marketers</li>
              <li style={{ paddingBottom: "20px" }}>Full Stack Developers</li>
              <li style={{ paddingBottom: "20px" }}>
                UI/UX Designers Developers
              </li>
              <li style={{ paddingBottom: "20px" }}>
                Frontend and Backend Developers
              </li>
              <li style={{ paddingBottom: "20px" }}> Software Tester</li>
              <li style={{ paddingBottom: "20px" }}>Data Scientists</li>
              <li style={{ paddingBottom: "20px" }}>Backend Developers</li>
              <li style={{ paddingBottom: "20px" }}>DevOps Engineer</li>
              <li style={{ paddingBottom: "20px" }}>
                Digital Marketing Managers
              </li>
              <li style={{ paddingBottom: "20px" }}>SEO Managers</li>
              <li
                style={{
                  paddingBottom: "20px",
                  color: "#00C4FF",
                }}
              >
                Find More HEROES
                <span>
                  <FaArrowRight
                    style={{
                      marginLeft: "0.4rem",
                      textAlign: "center",
                    }}
                  ></FaArrowRight>
                </span>
              </li>
            </ul>
          </div>
          <div style={{ width: "25%" }}>
            <ul
              style={{
                textDecoration: "none",
                color: "white",
                listStyleType: "none",
                font: "Poppins",
              }}
            >
              <li style={{ paddingBottom: "20px" }}>
                Subscribe for the newsletter and receive email notification of
                every future post.
              </li>
              <li style={{ paddingBottom: "20px" }}>
                <input
                  type="text"
                  placeholder="Email"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid white",
                    backgroundColor: "#032A36",
                    color: "white",
                  }}
                ></input>
                <span
                  style={{
                    border: "2px solid white",
                    padding: "7px",
                    borderRadius: "50%",
                  }}
                >
                  <FaArrowRight
                    style={{
                      marginLeft: "0.4rem",
                      color: "#00C4FF",
                    }}
                  ></FaArrowRight>
                </span>
              </li>
              <li
                style={{
                  paddingBottom: "20px",
                  fontWeight: "145px",
                }}
              >
                <h3>Company:</h3>{" "}
              </li>
              <li style={{ paddingBottom: "20px" }}>About Us</li>
              <li style={{ paddingBottom: "20px" }}>Career</li>
              <li style={{ paddingBottom: "20px" }}>Events</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
            padding: "1.5rem",
            borderTop:"2px solid #ccc",
            width:"95%",
            margin:"0 auto"
          }}
        >
          <p>Privacy Policy I Terms & Conditions</p>
          <p>Copyright© 2020 Kodehash Technologies. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
