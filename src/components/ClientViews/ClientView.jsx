import React from "react";
import hash from "../../assets/images/left-quote.svg";
import "./ClientView.css";

function ClientView() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "35rem",
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            width: "100%",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1 style={{ color: "white" }}>
            Client{" "}
            <span className="text" style={{ fontSize: "2rem" }}>
              Views
            </span>
          </h1>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "345px",
              height: "364px",
              position: "relative",
              backgroundColor: "black",
              border: "3px solid #032A36",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                left: "40%",
              }}
            >
              <img src={hash} alt="" srcset="" />
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                alignContent: "center",
                marginTop: "50px",
                fontSize: "13px",
                padding: "5px",
                color: "white",
                letterSpacing: " 0.36px",
                font: "normal normal 300 18px/28px Poppins",
              }}
            >
              Choose Kodehash for unparalleled expertise, reliability, and
              transformative strategies in cloud computing. Choose Kodehash for
              unparalleled expertise, reliability, and transformative strategies
              in cloud computing.
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
                color: "white",
              }}
            >
              <div>Mark John</div>
              <div style={{ fontSize: "12px", marginTop: "5px" }}>Doe</div>
            </div>
          </div>

          <div
            className="card-image"
            style={{
              width: "370px",
              height: "400px",
              position: "relative",
              backgroundColor: "black",
              //   border: "3px solid #032A36",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-9px",
                left: "40%",
              }}
            >
              <img src={hash} alt="" srcset="" />
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                alignContent: "center",
                marginTop: "70px",
                fontSize: "13px",
                padding: "6px",
                color: "white",
                letterSpacing: " 0.36px",
                font: "normal normal 300 18px/28px Poppins",
              }}
            >
              Choose Kodehash for unparalleled expertise, reliability, and
              transformative strategies in cloud computing. Choose Kodehash for
              unparalleled expertise, reliability, and transformative strategies
              in cloud computing.
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "30px",
                color: "white",
              }}
            >
              <div>Mark John</div>
              <div style={{ fontSize: "12px", marginTop: "5px" }}>Doe</div>
            </div>
          </div>

          <div
            style={{
              width: "345px",
              height: "364px",
              position: "relative",
              backgroundColor: "black",
              border: "3px solid #032A36",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                left: "40%",
              }}
            >
              <img src={hash} alt="" srcset="" />
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                alignContent: "center",
                marginTop: "50px",
                fontSize: "13px",
                padding: "5px",
                color: "white",
                letterSpacing: " 0.36px",
                font: "normal normal 300 18px/28px Poppins",
              }}
            >
              Choose Kodehash for unparalleled expertise, reliability, and
              transformative strategies in cloud computing. Choose Kodehash for
              unparalleled expertise, reliability, and transformative strategies
              in cloud computing.
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
                color: "white",
              }}
            >
              <div>Mark John</div>
              <div style={{ fontSize: "12px", marginTop: "5px" }}>Doe</div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            gap: "5px",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "10px",
              backgroundColor: "#00C4FF",
              borderRadius: "10px",
            }}
          ></div>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#00C4FF",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#00C4FF",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ClientView;
