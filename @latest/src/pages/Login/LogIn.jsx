import React, { useState } from "react";
import LogInForm from "../../components/logInForm/logInForm.jsx";
import SignInForm from "../../components/signInForm/signInForm.jsx";
import classes from "./LogIn.module.css";

const LoginPage = () => {
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleCreateAccountBtn = () => {
    setShowCreateAccountForm(true);
    setShowLoginForm(false);
  };

  const handleGoLoginModalBtn = () => {
    setShowCreateAccountForm(false);
    setShowLoginForm(true);
  }

  return (
    <div className="loginPage">
      {showLoginForm && <LogInForm createAccount={handleCreateAccountBtn}/>}
      {showCreateAccountForm && <SignInForm closeModal={handleGoLoginModalBtn}/>}
    </div>
  );
};

export default LoginPage;