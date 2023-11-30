import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TechStack = () => {
  return (
    <div
      style={{
        background: "#000000 0% 0% no-repeat padding-box",
        color: "#fff",
        padding: "2.45rem 0",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ font: "normal normal 600 3rem/72px Poppins" }}>
          Discover a Few of the Tech Stacks for
        </h1>
        <p
          style={{ font: "normal normal 600 3rem/50px Poppins" }}
          className="text"
        >
          Which We Source Remote Developers
        </p>
      </div>
      <div style={{ textAlign: "center", margin: "1.8rem 0" }}>
        <p
          style={{
            width: "45%",
            margin: "0 auto",
            font: "normal normal normal 1rem/25px Poppins",
          }}
        >
          At Kodehash, our talent acquisition extends across a broad array of
          tech stacks, ensuring that we can absolutely identify the perfect
          match for your needs!
        </p>
      </div>
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

      {/* cards */}
      <div className="Cards-Container">
        <div className="Cards-Wrapper">
          <div
            className="Cards"
            style={{
              backgroundColor:
                "transparent linear-gradient(180deg, #222222 0%, #6B6B6B 100%) 0% 0% no-repeat padding-box",
              color: "#fff",
              height: "170px",
              width: "160px",
              border: "1px solid #ccc",
              borderRadius: "1rem",
            }}
          >
            <span
              style={{
                font: "normal normal 600 17px/21px Poppins",
                padding: "0 0.4rem",
                display: "inline-block",
                color: "#fff",
              }}
            >
              Product Managers
            </span>
          </div>
          <div
            className="Cards"
            style={{
              backgroundColor:
                "transparent linear-gradient(180deg, #222222 0%, #6B6B6B 100%) 0% 0% no-repeat padding-box",
              color: "#fff",
              height: "170px",
              width: "160px",
              border: "1px solid #ccc",
              borderRadius: "1rem",
            }}
          >
            <span
              style={{
                font: "normal normal 600 17px/21px Poppins",
                padding: "0 0.4rem",
                display: "inline-block",
                color: "#fff",
              }}
            >
              Content Marketers
            </span>
          </div>
          <div
            className="Cards active-card"
            style={{
              backgroundColor:
                "transparent linear-gradient(180deg, #222222 0%, #6B6B6B 100%) 0% 0% no-repeat padding-box",
              color: "#fff",
              height: "170px",
              width: "160px",
              border: "1px solid #ccc",
              borderRadius: "1rem",
            }}
          >
            <span
              style={{
                font: "normal normal 600 17px/21px Poppins",
                padding: "0 0.4rem",
                display: "inline-block",
              }}
            >
              Full Stack Developers
            </span>
            <span
              style={{
                color: "#00C4FF",
                border: "2px solid #000",
                backgroundColor: "transparent",
                marginLeft: "0.4rem",
                borderRadius: "50%",
                padding: "0.7rem 0.8rem",
                marginTop: "1.8rem",
              }}
            >
              <FaArrowRight
                style={{ color: "#000", verticalAlign: "middle" }}
              />
            </span>
          </div>
          <div
            className="Cards"
            style={{
              backgroundColor:
                "transparent linear-gradient(180deg, #222222 0%, #6B6B6B 100%) 0% 0% no-repeat padding-box",
              color: "#fff",
              height: "170px",
              width: "160px",
              border: "1px solid #ccc",
              borderRadius: "1rem",
            }}
          >
            <span
              style={{
                font: "normal normal 600 17px/21px Poppins",
                padding: "0 0.4rem",
                display: "inline-block",
                color: "#fff !important",
              }}
            >
              UI/UX Designers & Developers
            </span>
          </div>
          <div
            className="Cards"
            style={{
              backgroundColor:
                "transparent linear-gradient(180deg, #222222 0%, #6B6B6B 100%) 0% 0% no-repeat padding-box",
              color: "#fff",
              height: "170px",
              width: "160px",
              border: "1px solid #ccc",
              borderRadius: "1rem",
            }}
          >
            <span
              style={{
                font: "normal normal 600 17px/21px Poppins",
                padding: "0 0.4rem",
                display: "inline-block",
                color: "#fff",
              }}
            >
              Frontend & Backend Developers
            </span>
          </div>
          <div
            className="Cards"
            style={{
              backgroundColor:
                "transparent linear-gradient(180deg, #222222 0%, #6B6B6B 100%) 0% 0% no-repeat padding-box",
              color: "#fff",
              height: "170px",
              width: "160px",
              border: "1px solid #ccc",
              borderRadius: "1rem",
            }}
          >
            <span
              style={{
                font: "normal normal 600 17px/21px Poppins",
                padding: "0 1.4rem",
                display: "inline-block",
                color: "#fff",
              }}
            >
              Software Tester
            </span>
          </div>
        </div>
      </div>

      {/* dots */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3rem",
          gap: "5px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "6px",
            backgroundColor: "#00C4FF",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: "#00C4FF",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: "#00C4FF",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TechStack;
