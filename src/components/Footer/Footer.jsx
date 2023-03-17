import React from "react";
import style from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../image/Group.png";
import logo1 from "../image/Layer 2.png";
import logo2 from "../image/microsoft.png";
const Footer = () => {
  return (
    <>
    <div className={style.footer_1} style={{background : "black" , color:"white"}}>
      <div className={style.footer}>
        <div className={style.option}>
          Home | Terms & Conditions | Privacy Policy | Collection Statements |
          Help | Manage Accounts
        </div>
        <div className={style.demo}>Copyright © 2022 Demo Streaming. All rights reserved.</div>
        <div className={style.logo}>
          <div className={style.icon}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
          <div className={style.lmg}>
            <img src={logo} height="30px" alt="AppStore Logo" />
            <img src={logo1} height="30px" alt="AppStore Logo" />
            <img src={logo2} height="30px" alt="AppStore Logo" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
