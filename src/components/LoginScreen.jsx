import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

export default function LoginComponents() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="/public/NetflixLogo.png"
          alt=""
          className="loginScreen__logo"
        />

        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign in{" "}
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input
                  onChange={(event) => email(event.target.value)}
                  type="email"
                  className="common-input"
                  placeholder="Email or Phone number"
                />

                <button
                  onClick={() => setSignIn(true)}
                  className="logiScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
