import React, { useState } from "react";
import NavBar from "../../components/navBar/navBar.jsx";
import Footer from "../../components/footer/footer.jsx";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <NavBar navItem="home" />
      </header>
      <div className={classes.homePageContainer}>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <div className={classes.welcomeSign}>
              <img src="/bienventid@s.png" alt="imagen de bienvenida" />
            </div>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;