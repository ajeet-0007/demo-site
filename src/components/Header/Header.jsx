import React from "react";
import { FaArrowRight } from "react-icons/fa";
import KodeHash from "../../assets/images/Kodehash.svg";
import hash from "../../assets/images/hash.svg";
import square from "../../assets/images/square.svg";
import "./Header.css";

const Header = () => {
  return (
    <div style={{ background: "#000", padding: "1rem" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <div>
          <div
            style={{
              width: "25%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={square} alt="" srcset="" height={40} />
            <img src={hash} alt="" height={40} />
            <p style={{ color: "#fff", marginLeft: "0.7rem" }}>
              <span style={{ fontSize: "1.5rem" }}>Kode</span>
              <span style={{ fontWeight: "700", fontSize: "1.5rem" }}>
                hash
              </span>
            </p>
          </div>
        </div>
        <div style={{ width: "60%" }}>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <li style={{ listStyleType: "none", color: "#fff" }}>
              Company<span style={{ paddingLeft: "0.3rem" }}>+</span>
            </li>
            <li
              style={{ listStyleType: "none", color: "#00C4FF" }}
              className="current-active-nav"
            >
              Solutions<span style={{ paddingLeft: "0.3rem" }}>-</span>
            </li>
            <li style={{ listStyleType: "none", color: "#fff" }}>
              Industries<span style={{ paddingLeft: "0.3rem" }}>+</span>
            </li>
            <li style={{ listStyleType: "none", color: "#fff" }}>On Demand</li>
            <li style={{ listStyleType: "none", color: "#fff" }}>Portfolio</li>
            <li>
              <button
                style={{
                  color: "#00C4FF",
                  border: "2px solid #ffffff",
                  backgroundColor: "transparent",
                  padding: "0.7rem 4rem",
                  borderRadius: "2rem",
                }}
              >
                Contact Us
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
            </li>
          </ul>
        </div>
      </nav>

      <div style={{color:"#fff",marginTop:"2rem"}}>
        <div style={{textAlign:'center'}}>
          <h4 style={{font: 'normal normal bold 65px/125px Poppins'}} className="text">Recruit Leading 1% of</h4>
          <h1 style={{font: 'normal normal bold 67px/60px Poppins'}}>Remote Developers in Just 24Hrs</h1>
          <p style={{font: 'normal normal normal 23px Poppins',paddingTop:'3rem'}}>
            <span style={{display:"inline-block",width:'75%'}}>
            Assemble your ideal remote software development team, perfectly
            aligned with your time zone and work preferences. Optimise your
            hiring process and resources with Kodehash, your gateway to skilled
            remote talent.
            </span>
          </p>
          <div style={{marginTop:'3.9rem'}}>
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
                Find Candidates
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
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
