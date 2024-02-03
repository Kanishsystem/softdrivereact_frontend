import React from "react";
import "./Menubar.css";
import { MANU_LOGO } from "../services/ImageService";
import { MANU_PROFILE } from "../services/ImageService";
import { SmartSoftInput } from "soft_digi";

const Menubar = () => {
  return (
    <>
      <div className="main-top-bar">
        <nav className="navbar py-2 px-2 themes-menubar-navbar">
          <div className="navbar-brand">
            <span className="navbar-item">
              <i class="fa fa-bars" aria-hidden="true"></i>
              <img className="image pl-5" src={MANU_LOGO} alt="Logo" />
              <p className="pl-5 is-size-4-mobile themes-menubar-title">Smart Drive</p>
            </span>
          </div>
          <div className="navbar-item">
            <span className="themes-menubar-search">
              <SmartSoftInput  leftIcon="fa fa-search" rightIcon=""/>
            </span>
          </div>
          <div className="navbar-end">
            <div className="navbar-item themes-menubar-item">
              <span className="pl-2 pt-1 themes-manubar-bell">
                <a href="/site/notification">
                  <i class="fa fa-bell-o" aria-hidden="true"></i>
                </a>
              </span>
              <span className="pl-2 pt-1 themes-manubar-setting">
                <i class="fa fa-cog" aria-hidden="true"></i>
              </span>
              <span>
                <img src={MANU_PROFILE} alt="profile" className="image" />
              </span>
              <span className="dropdown is-right is-hoverable">
                <button className="button themes-menubar-dropdown">
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                <span className="dropdown-menu">
                  <span className="dropdown-content">
                    <a href="/site/profile" className="dropdown-item is-size-6">
                      <i
                        class="fa fa-user-circle-o pr-1"
                        aria-hidden="true"
                      ></i>
                      Profile
                    </a>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menubar;
