import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Global.css";

const Global = () => {
  return (
    <div className="Global-Content-Container">
      <div className="Global-Content-Wrapper">
        <div className="Global-Content-Top">
          <div>
            <h2 style={{font: 'normal normal 600 50px/72px Poppins'}}>Find Us</h2>
            <p style={{font: 'normal normal 600 50px/48px Poppins'}} className="text">WorldWide</p>
          </div>
          <div style={{width:"57%"}}>
            <p style={{font: 'normal normal 400 17px/32px Poppins'}}>
              Access top-tier remote developer teams with exceptional technical
              prowess, offering borderless hiring. Our professionals are
              prepared to commence work within 24 hours, with a minimum 4-hour
              time zone overlap.
            </p>
          </div>
        </div>
        <div className="Global-Content-Middle">
            <div style={{position:"relative"}}>
                <span className="circle-back"></span>
                <div style={{position:"absolute",top:'-20px',left:'19px'}}>
                    <p><span className='number-sign'>15+</span></p>
                    <span className="label-spot">CANDIDATES</span>
                </div>
            </div>
            <div style={{position:"relative"}}>
                <span className="circle-back"></span>
                <div style={{position:"absolute",top:'-20px',left:'19px'}}>
                    <p><span className='number-sign'>100+</span></p>
                    <span className="label-spot">CITIES</span>
                </div>
            </div>
            <div style={{position:"relative"}}>
                <span className="circle-back"></span>
                <div style={{position:"absolute",top:'-20px',left:'19px'}}>
                    <p><span className='number-sign'>10+</span></p>
                    <span className="label-spot">COUNTRIES</span>
                </div>
            </div>
            <div style={{position:"relative"}}>
                <span className="circle-back"></span>
                <div style={{position:"absolute",top:'-20px',left:'19px'}}>
                    <p><span className='number-sign'>25+</span></p>
                    <span className="label-spot">TECHNOLOGIES</span>
                </div>
            </div>
            <div style={{position:"relative"}}>
                <span className="circle-back"></span>
                <div style={{position:"absolute",top:'-20px',left:'19px'}}>
                    <p><span className='number-sign'>50+</span></p>
                    <span className="label-spot">CUSTOMERS</span>
                </div>
            </div>
        </div>
        <div className="Global-Content-Bottom">
        <div style={{marginTop:'3.9rem',textAlign:'center'}}>
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
                Request Candidates
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
      </div>
    </div>
  );
};

export default Global;
