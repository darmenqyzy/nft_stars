import React from "react";

//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import LoginAndSignUp from "../loginAndSignUp/loginAndSignUp";

const signUp = () => {
  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>SignUp</h1>
        <LoginAndSignUp />
        <p className={Style.login_box_para}>
          Already have an account? <a href="/login">Log in.</a>
        </p>
      </div>
    </div>
  );
};

export default signUp;
