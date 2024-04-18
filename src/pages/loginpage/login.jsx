import React, { useState } from "react";
import bg from "D:/dailydose/src/images/login.jpg";
import "../loginpage/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

function Login() {

  return (
    <div className="login-container">
      <img src={bg} alt="Logo" />
      <div className="overlay-contant">
        <h1>Welcome Back 👋</h1>
        <p>
          Experience the power of seamless caregiving at your <br />
          fingertips! Log in today and discover hiw our platform can <br />
          revolutionize your approach to senior care.{" "}
        </p>
        <div className="form-container">
          <form>
            <label className="text">
              Email
              <input
                className="text-input"
                type="email"
                name="email"
                placeholder=" Example@email.com"
                required
              />
              <label className="text">
                Password
                <input
                  type="password"
                  className="inputtext"
                  name="password"
                  placeholder=" At least 8 characters"
                  required
                />
              </label>
            </label>
          </form>
        </div>
        <p className="forgot-password"><Link to='/forgotpassword'>Forgot Password?</Link></p>
        <button>Sign in</button>
        <p className="signin">_________________________________ Or sign in with _________________________________ </p>
        <div className="button-container">
            <button className="option"><FontAwesomeIcon icon={faGoogle}/></button>
            <button className="option1"><FontAwesomeIcon icon={faFacebook}/></button>
        </div>
        <p className="account">Don't you have an account? <Link to="/registration">Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;
