import React, { useState } from "react";
import "./styles.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

export default function App() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">

      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Already have an account?</h1>
              <p>
                Login to an existing account to browse clubs and schedules
              </p>
              <button
                className="ghost"
                id="Login"
                onClick={() => handleOnClick("Login")}
              >
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>First time?</h1>
              <p>Create an account to start viewing university events all over Turkiye!</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}