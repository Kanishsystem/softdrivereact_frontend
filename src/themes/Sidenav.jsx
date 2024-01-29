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
    <div  >
      <ul className="card smart-side-nav-view py-1 px-5">
        {items.map((item) => (
          <li onClick={() => handleNavigation(item.link)} key={item.id}   className={location.pathname === item.link ? 'active' : 'smart-side-nav-view  py-2'}>
            <span className="pr-3">{item.icon}</span>
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
      label: "MY DRIVE",
      icon: <i class="fa fa-hdd-o" aria-hidden="true"></i>,
    },
    {
      id: 2,
      label: "All Files",
      icon: <i class="fa fa-folder-o" aria-hidden="true"></i>,
      link:"/site/all-files"
    },
    {
      id: 3,
      label: "Photos",
      icon: <i class="fa fa-camera" aria-hidden="true"></i>,
    },
    {
      id: 4,
      label: "Videos",
      icon: <i class="fa fa-video-camera" aria-hidden="true"></i>,
    },
    {
      id: 5,
      label: "Shared with me",
      icon: <i class="fa fa-users" aria-hidden="true"></i>,
      link:"/site/share-with-me"
    },
    {
      id: 6,
      label: "Recent",
      icon: <i class="fa fa-clock-o" aria-hidden="true"></i>,
    },
    {
      id: 7,
      label: "Starred",
      icon: <i class="fa fa-star-o" aria-hidden="true"></i>,
    },
    {
      id: 8,
      label: "Bin",
      icon: <i class="fa fa-trash-o" aria-hidden="true"></i>,
      link:"/site/recycle-bin"
    },
  ];

  const sidebarItemAdmin = [
    {
      id: 1,
      label: "Insights",
      icon: <i class="fa fa-bar-chart" aria-hidden="true"></i>,
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
      label: "Storage",
      icon: <i class="fa fa-archive" aria-hidden="true"></i>,
    },
    {
      id: 5,
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
    },
  ];
  return (
    <div className="main-side-view">
      <Sidebar className="main-side-nave" items={sidebarItem} />
      <Sidebar  className="main-side-nave" items={sidebarItemAdmin} />
      <Sidebar  className="main-side-nave" items={sidebarItemLogout} />
    </div>
  );
};

export default Sidenav;
