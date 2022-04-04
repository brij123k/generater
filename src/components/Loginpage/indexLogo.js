import React from "react";
import "./styled.css";

const indexLogo = () => {
  return (
    <div className="container-login">
      <h2>LOGIN</h2>
      <p className="number-proceed">Enter your phone number to proceed</p>
      <p className="number-digit">10 digit mobile number</p>
      <label>
        <input
          type="tel"
          className="mobileNumber"
          name="mobile"
          id="mobile"
        ></input>
      </label>
      <div>
        <span className="india-num">+91-</span>
      </div>
      <div className="button-dec">
        <button className="phone-button">ENTER PHONE NUMBER <span className="CONTINUE">CONTINUE</span></button>
      </div>
      <dvi className="bottom-dec">
        By clicking, I accept the{" "}
        <span className="term-condation">Terms & Condation</span>{" "}
        <span className="and">&</span>{" "}
        <span className="privacy-policy">Privacy Policy</span>
      </dvi>
    </div>
  );
};

export default indexLogo;
