import React, { useState, useEffect } from "react";
import Image from "next/image";

import { BsSearch } from "react-icons/bs";
//import { Navbar, Nav, Button } from 'react-bootstrap'

import Style from "./Navbar.module.css";
import { Discover, HelpCenter} from "./index";
import { Button } from "../componentsindex";
import images from "../../img";

const Navbar = ({ web3Handler, account }) => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
    } else {
      setDiscover(false);
      setHelp(false);
    }
  };
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="NFT MARKET PLACE"
              width={200}
              height={100}              />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* //END OF LEFT SECTION */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>

            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}} />
          </div>

          {/* CONNECT WALLETE */}

          <div className={Style.navbar_container_right_profile_box}>
          {account ? (
                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4"
                                  btnName={account.slice(0, 5) + '...' + account.slice(38, 42)}>
                                <Button variant="outline-light">
                                    
                                </Button>

                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} className={Style.navbar_container_right_profile_box_button} btnName="Connect" variant="outline-light">Connect Wallet</Button>
                        )}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Navbar