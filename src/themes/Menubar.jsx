import React from "react";
import "./Menubar.css";
import logo from "../../assets/images/logo.jpg";
import icon from "../../assets/images/icon.jpg";
import { IoReorderThreeSharp } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { RxGear } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Menubar = () => {
  return (
    <div className="card is-size-4-mobile cap1">
      <nav className="navbar has-background-white">
        {/* Logo */}
        <div className="navbar-brand">
          <span className="navbar-item cap2">
            <IoReorderThreeSharp />
          </span>
          <span className="navbar-item">
            <img src={logo} alt="logo" className="mx-2 my-2" />
            <span className="navbar-item">
              <p className="text">Smart Drive</p>
            </span>
          </span>
        </div>
        <div className="navbar-menu">
          <span className="navbar-item is-hidden-desktop">
            <CiSearch />
          </span>
          <div className="navbar-item cap3">
            <input className="input" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="navbar-menu">
          <span className="navbar-end">
            <span className="navbar-item">
              <CiBellOn />
              <RxGear />
              <img src={icon} alt="logo" className="mx-2 my-2 is-rounded img" />
              <FaAngleDown />
            </span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
