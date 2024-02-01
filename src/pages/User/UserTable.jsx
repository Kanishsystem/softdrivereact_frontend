import React, { useEffect, useState } from "react";

import { SmartSoftButton, SmartSoftTable } from "soft_digi";
import { SmartSoftCheckRadioSwitch } from "soft_digi";
import { useSiteContext } from "../../contexts/SiteProvider";
import UserForm from "./UserForm";
import { MAIN_PIC } from "../../services/ImageService";
import { get } from "../../services/smartApiService";
import { showNotification } from "../../services/notifyService";

// url
import USER_API_URLS from "../../services/ApiUrls/UsersUrls";

const UserTable = () => {
  const [tabData, setTabData] = useState([]);

  const { setLoading, openModal, closeModal } = useSiteContext();
  const roleTags = [{ class: "is-link" }];

  const nameFunction = (row) => {
   // console.log("User", row);
    return (
      <div className="is-flex">
        <figure className="image is-32x32 mr-2">
          <img className="is-rounded" src={row["profile_img"]} />
        </figure>
        {row["ename"] || ""}
      </div>
    );
  };

  const roleFunction = (role) => {
    if (role === "Admin") {
      return <span className="tag is-success">Administrator</span>;
    } else {
      return <span className="tag is-info">User</span>;
    }
  };
  const buttons = [
    {
      label: "",
      leftIcon: "fa-trash-o",
      type: "icon",
      classList: [""],
      onClick: (data) => {
       // console.log("data", data);
       openDeleteModal(data["ID"],data["ename"]);
      },
    },
    {
      label: "",
      leftIcon: "fa-lock",
      type: "icon",
      classList: ["is-primary"],
      onClick: (data) => {
        console.log("data", data);
      },
    },
    {
      label: "",
      leftIcon: "fa-pencil-square-o",
      type: "icon",
      classList: ["is-primary"],
      onClick: (data) => {
        console.log("data", data);
      },
    },
    {
      label: "",
      leftIcon: "fa-eye",
      type: "icon",
      classList: ["is-primary"],
      onClick: (data) => {
        console.log("data", data);
      },
    },
  ];

  const columns = [
    { title: "Name", index: "ename", valueFunction: nameFunction },
    { title: "Employee ID", index: "euserid", isSortable: true },
    { title: "Email", index: "email_id", isSortable: true },
    {
      title: "Role",
      index: "role",
      className: "is-link",
      valueFunction: roleFunction,
    },
    {
      title: "Storage Capacity",
      index: "active_status",
      type: "progress",
      progressMax: 100,
    },
    { title: "Action", index: "action", type: "action", buttons: buttons },
  ];

  const pagination = {
    navigationIcon: "fa-chevron",
  };

  const loadTableData = () => {
    setLoading(true, "Logging in Please Wait....");
    const handleError = (errorMessage) => {
      showNotification("error", errorMessage);
      setTabData([]);
      setLoading(false);
    };
    const subscription = get(USER_API_URLS.get_all, handleError).subscribe(
      (response) => {
        setTabData(response.data);
        console.table("testing", response.data);
        setLoading(false);
      }
    );
    return () => {
      subscription.unsubscribe();
    };
  };

  useEffect(() => {
    loadTableData();
  }, []);

  const openMyModal = () => {
    let modalObject = {
      title: "Add New User",
      body: <UserForm loadTableData={loadTableData} />,
      modalClass: "smart-modal-90",     
    };
    openModal(modalObject);
  };

  const openDeleteModal=(id,name)=>{
    let modelObject = {
      title:"Do you want to Delete The Employee / User",
      body:"Note: The user will be deleted! Action cannot be reverted",
      okFunction:()=>{
        console.log("of function")
      },
      cancelFunction:()=>{
        closeModal();
        console.log("cancel function")
      }
    }
    openModal(modelObject);
  }

  return (
    <>
      <div className="is-flex is-justify-content-space-between mb-3">
        <h1 className="is-size-4 is-3 ">Users</h1>

        <div className="is-flex is-justify-content-end ">
          <SmartSoftButton
            label="Add"
            onClick={openMyModal}
            className="is-danger"
          />
        </div>
      </div>
      <SmartSoftTable
        data={tabData}
        columns={columns}
        paginationProps={pagination}
      />
    </>
  );
};

export default UserTable;
