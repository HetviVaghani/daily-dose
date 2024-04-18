import React from "react";
import bg from "D:/dailydose/src/images/register.jpg";
import "../registration/registration.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

function registration() {
  return (
    <div className="register-container">
      <img src={bg} alt="bg" />
      <div className="overlay-contant">
        <h2>Regester Now!</h2>
        <div className="form_container">
          <form>
            <div className="text-container">
              <div>
                <label className="text">
                  First Name
                  <input
                    className="input"
                    type="text"
                    name="text"
                    placeholder=" XYZ"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="text">
                  Lirst Name
                  <input
                    className="input"
                    type="text"
                    name="text"
                    placeholder=" XYZ"
                    required
                  />
                </label>
              </div>
            </div>
            <label className="text">
              Email
              <input
                className="text-field"
                type="email"
                name="email"
                placeholder="  Example@email.com"
                required
              />
            </label>

            <div className="text-container">
              <div>
                <label className="text">
                  Gender
                  <input
                    className="input"
                    type="text"
                    name="gender"
                    placeholder=" Male/Female"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="text">
                  Age
                  <input
                    className="input"
                    type="text"
                    name="age"
                    placeholder=" Enter Age"
                    required
                  />
                </label>
              </div>
            </div>

            <label className="text">
              Password
              <input
                className="text-field"
                type="password"
                name="password"
                placeholder="  At least 8 characters"
                required
              />
            </label>

            <button className="signup">Sign up</button>
            <p className="side-text">____________________________________________________ Or _____________________________________________________</p>
          
            <button className="options"><FontAwesomeIcon icon={faGoogle} /> Sign up with google</button>
            <button className="options1"><FontAwesomeIcon icon={faFacebook}/> Sign up with facebook</button>
          <p className="link-text"> Already have an account? <Link to="/">Log in</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default registration;
