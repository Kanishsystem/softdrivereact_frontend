// LoginLayout.js
import React from "react";
import Header from "./MainTheme/Header";
import test from "../assets/images/sidetest.png";
import { useSiteContext } from "../contexts/SiteProvider";
import "./MainLayoutStyle.css";
import Menubar from "./Menubar";
import Sidenav from "./Sidenav";

const MainLayout = ({ children }) => {
  const { user, setUser } = useSiteContext();
  const handleLogout = () => {
    setUser();
  };
  return (
    <>
      <div className="smart-site-header">
        <Menubar />
      </div>
      <div className="smart-site-sidenav">
        <Sidenav />
      </div>
        <div className="smart-site-middile">{children}</div>
     
    </>
  );
};

export default MainLayout;
