import React, { useState } from "react";
import "./SignupScreen.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
        navigate("/profile");
      })
      .catch(() =>
        alert("This email is not register, please sign up first")
      );
  };

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/profile");
  };

  return (
    <div className="signupScreen">
      <h1>Sign In</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
      <h4 className="signupScreen__area">
        <span className="signupScreen__gray"> New to Netflix?</span>
        <span className="signupScreen__link" onClick={register}>
          Sign Up now.
        </span>
      </h4>
    </div>
  );
};

export default SignupScreen;
