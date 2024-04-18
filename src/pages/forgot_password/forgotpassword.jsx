import React from "react";
import bg from "D:/dailydose/src/images/forgot_password.jpg";
import "../forgot_password/forgotpassword.css";
import { Link } from "react-router-dom";

function forgotpassword() {
  return (
    <div className="forgotpassword-container">
      <img className="bg-img" src={bg} alt="background" />
      <div className="overlay-contant">
        <h1 className="top-text">Reset here !</h1>
        <div className="formcontainer">
          <form>
            <label className="text">
              Email
              <input
                className="text-input"
                type="email"
                name="email"
                placeholder="  Example@email.com"
                required
              />
            </label>
            <div className="container">
              <label className="text">
                OTP
                <input
                  className="textinput"
                  type="value"
                  name="otp"
                  placeholder="Enter OTP"
                  required
                />
              </label>
              <div className="button-container">
                <button className="otpbutton">Get OTP</button>
              </div>
            </div>

            <label className="text">
              Create Password
              <input
                className="text-input"
                type="password"
                name="password"
                placeholder=" At least 8 characters"
              />
            </label>

            <label className="text">
              Confirm Password
              <input
                className="text-input"
                type="password"
                name="password"
                placeholder=" At least 8 characters"
              />
            </label>

            <button className="resetbutton">Reset</button>
            <div className="lasttext-container">
            <p className="lasttext"> Don't have an account?<Link to="/registration">Sign up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default forgotpassword;
