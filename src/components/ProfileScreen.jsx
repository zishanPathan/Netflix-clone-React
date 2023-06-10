import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileScreen.css";
import Nav from "./Nav";
import { auth } from "../config/firebaseConfig";
function ProfileScreen() {
  const navigate = useNavigate();

  function basicPlan() {
    parent.location = "https://buy.stripe.com/test_5kA3et11n9bD5nqcMN";
  }
  const standardPlan = () => {
    parent.location = "https://buy.stripe.com/test_bIY2apcK55ZrbLO000";
  };
  const premiumPlan = () => {
    parent.location = "https://buy.stripe.com/test_3cseXb9xTgE56ru7su";
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img src="/public/Netflix-user.png" alt="" />
          <div className="profileScreen__details">
            <h2>{auth.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <h4>
                Basic <br />
                <span>720p(HD)</span>{" "}
              </h4>
              <button
                className="profileScreen__payment basic"
                onClick={basicPlan}
              >
                Subscribe
              </button>
              <h4>
                Standard <br />
                <span>1080p(Full HD)</span>{" "}
              </h4>
              <button
                className="profileScreen__payment standard"
                onClick={standardPlan}
              >
                Subscribe
              </button>
              <h4>
                Premium <br /> <span>4k(Ultra HD) + HDR</span>{" "}
              </h4>
              <button
                className="profileScreen__payment premium"
                onClick={premiumPlan}
              >
                Subscribe
              </button>
            </div>

            <button
              onClick={() => navigate("/")}
              className="profileScreen__signOut"
            >
              Sign Out
            </button>
            <span onClick={() => navigate("/homeScreen")}>skip</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
