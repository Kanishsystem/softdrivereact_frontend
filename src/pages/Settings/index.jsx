import React,{useState} from "react";
import SiteSettings from "./SiteSettings";
import FileSettings from "./FileSettings";
import LoginSettings from "./LoginSettings";
import RemoteServerSettings from "./RemoteServerSettings";
import EmailSettings from "./EmailSettings";





const Settings = () => {
  console.log("testing settings");

  const [tab, setTab] = useState("site");
  const tabs = [
    {
      title: "Site Settings",
      icon: "fa-image",
      link: "site",
    },
    {
      title: "File Settings",
      icon: "fa-file",
      link: "file",
    },
    {
      title: "Login Settings",
      icon: "fa-file",
      link: "login",
    },
    {
      title: "Remote Settings",
      icon: "fa-file",
      link: "remote",
    },
    {
      title: "Email Settings",
      icon: "fa-file",
      link: "email",
    },
  ];

  const tabs_display=()=>{
    return (
      <div className="tabs is-toggle">
      <ul>
        {tabs.map((item, index) => (
          <li key={index} onClick={()=>setTab(item.link)} className={tab===item.link ? "is-active":""}>           
            <a>
              <span className="icon is-small">
                <i className={"fa " + item?.icon} aria-hidden="true"></i>
              </span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    )
  }
  return (
    <div>
      {tabs_display()}
      {tab==="site" && <SiteSettings />}
      {tab==="file" && <FileSettings />}
      {tab==="login" && <LoginSettings />}
      {tab==="remote" && <RemoteServerSettings />}
      {tab==="email" && <EmailSettings />}
    </div>
  );
};

export default Settings;
