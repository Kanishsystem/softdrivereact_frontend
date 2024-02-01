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
      label: "", leftIcon: "fa-trash-o",type:"icon", classList: [""], onClick: (data) => {
        console.log("data", data);
      }
    },
    {
      label: "", leftIcon: "fa-lock",type:"icon", classList: ["is-primary"], onClick: (data) => {
        console.log("data", data);
      }
    },
    {
      label: "", leftIcon: "fa-pencil-square-o",type:"icon", classList: ["is-primary"], onClick: (data) => {
        console.log("data", data);
      }
    },
    {
      label: "", leftIcon: "fa-eye",type:"icon", classList: ["is-primary"], onClick: (data) => {
        console.log("data", data);
      }
    },
  ];


  const columns = [
    { title: "Name", index: "ename", valueFunction: nameFunction },
    { title: "User Name", index: "ename", isSortable: true },
    { title: "Email", index: "emailid", isSortable: true },
    {
      title: "Role",
      index: "role",
      className: "is-link",
      valueFunction: roleFunction,
    },
    {
      title: "Storage Capacity",
      index: "age",
      type: "progress",
      progressMax: 100,
    },
    { title: "Action", index: "action", type: "action", buttons: buttons },
  ];

  const userData = [
    {
      id: 1,
      name: "John",
      age: 25,
      sdate: "2022-05-06",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
    {
      id: 2,
      name: "Jane",
      age: 30,
      sdate: "2024-01-15",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
    {
      id: 3,
      name: "Doe",
      age: 4,
      sdate: "2024-01-06",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
    {
      id: 4,
      name: "John",
      age: 25,
      sdate: "2022-05-06",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
    {
      id: 5,
      name: "Jane",
      age: 30,
      sdate: "2024-01-15",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
    {
      id: 6,
      name: "Doe",
      age: 4,
      sdate: "2024-01-06",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
    {
      id: 7,
      name: "John",
      age: 25,
      sdate: "2022-05-06",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
    {
      id: 8,
      name: "Jane",
      age: 30,
      sdate: "2024-01-15",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
    {
      id: 9,
      name: "Doe",
      age: 4,
      sdate: "2024-01-06",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
    {
      id: 10,
      name: "John",
      age: 25,
      sdate: "2022-05-06",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
    {
      id: 11,
      name: "Jane",
      age: 30,
      sdate: "2024-01-15",
      email: "test@gmail.com",
      role: "Admin",
      action: "b",
    },
  ];
  const pagination = {
    navigationIcon: "fa-chevron",
  };

  const loadTableData = () => {   
    setLoading(true, 'Logging in Please Wait....');
    const handleError = (errorMessage) => {
      showNotification("error",errorMessage); 
      setTabData([]);    
      setLoading(false);      
    };
    const subscription = get(USER_API_URLS.get_all,handleError).subscribe((response) => {    
     
      setTabData(response.data);
      console.table("testing",response.data)
      setLoading(false);
    });
    return () => {   
      subscription.unsubscribe();
    };
  };

  useEffect(() => {
    loadTableData()
  }, []);
 

  const openMyModal = () => {
    let modalObject = {
      title: "Add New User",
      body: <UserForm />,
    //  footer: <MyFooterContent />,
    };
    openModal(modalObject);
  };

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
