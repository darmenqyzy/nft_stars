import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Welcome to NFT Star! </h1>
          <p>
          Discover, create, buy, and sell NFTs with ease. Whether 
          you're an artist looking to mint your creations or a collector 
          seeking the next gem for your digital vault.          
          </p>
          <Button btnName="Explore Now" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;