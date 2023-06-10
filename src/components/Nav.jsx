import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/profile");
  };
  const redirectBack = () => {
    navigate("/homeScreen");
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={redirectBack}
          src="/public/NetflixLogo.png"
          alt=""
          className="nav__logo"
        />

        <img
          onClick={redirect}
          src="/public/Netflix-user.png"
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
