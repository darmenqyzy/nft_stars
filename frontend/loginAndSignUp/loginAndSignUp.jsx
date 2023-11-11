import React, { useState } from "react";
import Image from "next/image";

//INTERNALIMPORT
import Style from "./loginAndSignUp.module.css";
import images from "../img";
import { Button } from "../components/componentsindex.js";

const loginAndSignUp = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  return (
    <div className={Style.user}>
      <div className={Style.user_box}>
 

        <div className={Style.user_box_input}>
          <div className={Style.user_box_input_box}>
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="Email" />
          </div>

          <div className={Style.user_box_input_box}>
            <label
              htmlFor="password"
              className={Style.user_box_input_box_label}
            >
              Password </label>
              <br></br>
            <input type="password" placeholder="Password"/>
          </div>
        </div>
<br></br>
        <Button btnName="Continue" classStyle={Style.button} />
      </div>
    </div>
  );
};

export default loginAndSignUp;
