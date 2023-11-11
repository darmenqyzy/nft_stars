import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./AuthorTaps.module.css";

const AuthorTaps = ({
  setCollectiables,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = () => {
    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;
    console.log(btnText);
    if (btnText == "Collectiables") {
      setCollectiables(true);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setActiveBtn(1);
    } else if (btnText == "Created") {
      setCollectiables(false);
      setCreated(true);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setActiveBtn(2);
    } else if (btnText == "Liked") {
      setCollectiables(false);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(true);
      setActiveBtn(3);
    } else if (btnText == "Following") {
      setCollectiables(false);
      setCreated(false);
      setFollower(false);
      setFollowing(true);
      setLike(false);
      setActiveBtn(4);
    } else if (btnText == "Followers") {
      setCollectiables(false);
      setCreated(false);
      setFollower(true);
      setFollowing(false);
      setLike(false);
      setActiveBtn(5);
    }
  };

  
};

export default AuthorTaps;
