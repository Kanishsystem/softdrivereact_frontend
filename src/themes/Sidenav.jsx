import React from "react";
import "./Sidenav.css";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <div className="">
      <ul className="smart-side-nav-view p-4 is-hidden-mobile py-1 px-5">
        {items.map((item) => (
          <li onClick={() => handleNavigation(item.link)} key={item.id} className={location.pathname === item.link ? 'active' : 'smart-side-nav-view py-2'}>
            <span className="pr-1">{item.icon}</span>
            <span >{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Sidenav = () => {
  const sidebarItem = [
    {
      id: 1,
      label: "All Files",
      icon: <i class="fa fa-folder" aria-hidden="true"></i>,
      link:"/site/all-files"
    },
    {
      id: 2,
      label: "Photos",
      icon: <i class="fa fa-camera" aria-hidden="true"></i>,
    },
    {
      id: 3,
      label: "Videos",
      icon: <i class="fa fa-video-camera" aria-hidden="true"></i>,
    },
    {
      id: 4,
      label: "Shared with me",
      icon: <i class="fa fa-users" aria-hidden="true"></i>,
      link:"/site/share-with-me"
    },
    {
      id: 5,
      label: "Recent",
      icon: <i class="fa fa-clock-o" aria-hidden="true"></i>,
    },
    {
      id: 6,
      label: "Starred",
      icon: <i class="fa fa-star" aria-hidden="true"></i>,
    },
    {
      id: 7,
      label: "Bin",
      icon: <i class="fa fa-trash" aria-hidden="true"></i>,
      link:"/site/recycle-bin"
    },
  ];

  const sidebarItemAdmin = [
    {
      id: 1,
      label: "Insights",
      icon: <i class="fa fa-bar-chart" aria-hidden="true"></i>,
      link: "/site/insights"
    },
    {
      id: 2,
      label: "Users",
      icon: <i class="fa fa-user" aria-hidden="true"></i>,
      link:"/site/users"
    },
    {
      id: 3,
      label: "Roles",
      icon: <i class="fa fa-users" aria-hidden="true"></i>,
      link:"/site/roles"
    },
    {
      id: 4,
      label: "Settings",
      icon: <i class="fa fa-cog" aria-hidden="true"></i>,
      link:"/site/settings"
    },
  ];

  const sidebarItemLogout = [
    {
      id: 1,
      label: "Log out",
      icon: <i class="fa fa-sign-out" aria-hidden="true"></i>,
      link: "/"
    },
  ];
  return (
    <div className="main-side-view card">
      <Sidebar items={sidebarItem} />
      <Sidebar items={sidebarItemAdmin} />
      <Sidebar items={sidebarItemLogout} />
    </div>
  );
};

export default Sidenav;
