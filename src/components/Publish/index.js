import React from "react";
import "./styled.css";
import img from "./check-sign.png";
import { useNavigate } from "react-router";

const Publish = () => {
  const navigate = useNavigate();
  return (
    <div className="color-publish">
      <div className="container-publish">
        <div className="publish">
          <h1>Your Website Is Publish</h1>
        </div>
        <img src={img} alt="sign-page" />
        <h2>Click Here For QR Code</h2>
        <div className="qr-code">
          <button className="publish-but" onClick={() => navigate("/QrCODE")}>
            GET QR CODE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
