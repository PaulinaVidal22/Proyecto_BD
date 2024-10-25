import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./navBar.module.css";
import LogInForm from "../../components/logInForm/logInForm.jsx";
import SignInForm from "../../components/signInForm/signInForm.jsx";

function NavBar({navItem}) {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showLogInForm, setShowLogInForm] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccountBtn = () => {
    setShowSignInForm(true);
    setShowLogInForm(false);
  };

  const handleGoLoginModalBtn = () => {
    setShowSignInForm(false);
    setShowLogInForm(true);
  };

  const closeModals = () => {
    setShowSignInForm(false);
    setShowLogInForm(false);
  };

  const goHome = () => {
    navigate("/home");
  };

  const goDoc = () => {
    navigate("/documentation");
  };

  const goAboutUs = () => {
    navigate("/about-us");
  };

  return (
    <div>
      <div className={classes.navBar}>
        <div className={classes.logoContainer}>
          <img
            src="/ucu-icon.png"
            style={{ alignSelf: "center", height: "85%", width: "auto" }}
          />
          <img
            src="/ucusnow-texto-sinFondo.png"
            style={{ alignSelf: "center", height: "65%", width: "auto" }}
          />
          <div className={classes.navBarOptions}>
            <button onClick={goHome} className={classes.underlineButton}>
              {navItem === "home" ? (
                <strong>
                  Home
                </strong>
              ) : (
                <span className={classes.options}>Home</span>
              )}
            </button>
            <button onClick={goDoc} className={classes.underlineButton}>
              {navItem === "documentation" ? (
                <strong>
                  Documentation
                </strong>
              ) : (
                <span className={classes.options}>Documentation</span>
              )}
            </button>
            <button onClick={goAboutUs} className={classes.underlineButton}>
              {navItem === "about-us" ? (
                <strong >
                  About us
                </strong>
              ) : (
                <span className={classes.options}>About us</span>
              )}
            </button>
          </div>
        </div>
        <div className={classes.buttonsContainer}>
          <button
            className="button"
            id={classes.signInButton}
            onClick={handleGoLoginModalBtn}
          >
            Sign in
          </button>
          <button
            className="button"
            id={classes.signUpButton}
            onClick={handleCreateAccountBtn}
          >
            Sign up
          </button>
        </div>
      </div>
      {showLogInForm && (
        <LogInForm
          createAccount={handleCreateAccountBtn}
          closeModal={closeModals}
        />
      )}
      {showSignInForm && (
        <SignInForm
          goLogin={handleGoLoginModalBtn}
          closeModal={closeModals}
        />
      )}
    </div>
  );
}

export default NavBar;