import React from "react";
import "./Menubar.css";
import { MANU_LOGO } from "../services/ImageService";
import { MANU_PROFILE } from "../services/ImageService";

const Menubar = () => {
  return (
    <div>
      <nav className="navbar py-2 px-2 themes-menubar-navbar">
        <div className="navbar-brand">
          <span className="navbar-item">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <img className="image pl-5" src={MANU_LOGO} alt="Logo" />
            <span className="pl-5 is-size-4-mobile themes-menubar-title">Smart Drive</span>
          </span>
        </div>
        <div className="navbar-item">
          <span className="control has-icons-left has-icons-right">
            <input className="input  themes-menubar-input" type="text" placeholder="Search..."/>
            <span className="icon is-medium is-left has-text-grey">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <span className="icon is-medium is-right has-text-grey">
              <i class="fa fa-filter" aria-hidden="true"></i>
            </span>
          </span>
        </div>
        <div className="navbar-end">
          <div className="navbar-item themes-menubar-item">
            <span className="pl-2 pt-1 themes-manubar-bell">
              <i class="fa fa-bell-o" aria-hidden="true"></i>
            </span>
            <span className="pl-2 pt-1 themes-manubar-setting">
              <i class="fa fa-cog" aria-hidden="true"></i>
            </span>
            <span>
              <img src={MANU_PROFILE} alt="profile" />
            </span>
            <span>
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
