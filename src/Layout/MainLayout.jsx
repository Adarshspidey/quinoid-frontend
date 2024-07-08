import React from "react";
import "./style.css";
import { Outlet } from "react-router-dom";
import logo from "../Assests/Icons/Logo.svg";
import notification from "../Assests/Icons/notification.svg";
import down from "../Assests/Icons/down.svg";
import facebook from "../Assests/Icons/facebook.svg";
import twiter from "../Assests/Icons/twiter.svg";
import yt from "../Assests/Icons/yt.svg";
import insta from "../Assests/Icons/insta.svg";

const MainLayout = () => {
  return (
    <div className="main-body">
      <div className="header-wraper">
        <img src={logo} alt="logo" width={130} height={30} />
        <div className="header-content">EXAM CATEGORY: PHYSICS</div>
        <div className="header-icon-wraper">
          <img src={notification} alt="noti" height={30} width={30} />
          <img src={down} alt="down" height={30} width={30} />
        </div>
      </div>
      <div className="main-body-wraper">
        <Outlet />
      </div>
      <div className="footer-wraper">
        <div className="footer-icon-wraper">
          <img src={logo} alt="" width={208} height={48} />
          <div className="footer-icon-group">
            <img src={facebook} alt="fb" height={30} width={30} />
            <img src={twiter} alt="twiter" height={30} width={30} />
            <img src={yt} alt="yt" height={30} width={30} />
            <img src={insta} alt="insta" height={30} width={30} />
          </div>
        </div>
        <hr />
        <div className="footer-text-content">
          © Copyright Clinical Scholar | Powered by Quinoid Buisness Solutions
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
