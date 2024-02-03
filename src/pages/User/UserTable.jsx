import React, { useEffect, useState } from "react";
import { SmartSoftButton, SmartSoftTable } from "soft_digi";
import { useSiteContext } from "../../contexts/SiteProvider";
import UserForm from "./UserForm";
import { post,get } from "../../services/smartApiService";
import { showNotification } from "../../services/notifyService";
// url
import USER_API_URLS from "../../services/ApiUrls/UsersUrls";
import UserDetails from "./UserDetails";

const UserTable = () => {
  const [tabData, setTabData] = useState([]);
  const {setLoading, openModal, closeModal } = useSiteContext();
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


  const buttons = [
    {
      label: "",
      leftIcon: "fa-eye",
      type: "icon",
      classList: ["has-text-link-dark smart-icon-background"],
      onClick: (data) => {
        console.log("data", data);
      },
    },
  
  
    {
      label: "",
      leftIcon: "fa-pencil-square-o",
      type: "icon",
      classList: ["has-text-info"],
      onClick: (data) => {
        console.log("data", data);
      },
    },
 
    {
      label: "",
      leftIcon: "fa-trash-o",
      type: "icon",
      classList: ["has-text-danger"],
      onClick: (data) => {
       // console.log("data", data);
       openDeleteModal(data["ID"],data["ename"]);
      },
    },
    {
      label: "",
      leftIcon: "fa-lock",
      type: "icon",
<<<<<<< Updated upstream
      classList: ["is-primary"],
      onClick: (data) => {
        openResetModal(data["ID"],data["ename"])
      },
    },
    {
      label: "",
      leftIcon: "fa-pencil-square-o",
      type: "icon",
      classList: ["is-primary"],
      onClick: (data) => {
        viewEditData(data["ID"],"EDIT")
      },
    },
    {
      label: "",
      leftIcon: "fa-eye",
      type: "icon",
      classList: ["is-primary"],
=======
      classList: ["has-text-warning"],
>>>>>>> Stashed changes
      onClick: (data) => {
        viewEditData(data["ID"],"VIEW");
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

  const openMyModal = (dataIn={}) => {
    let modalObject = {
<<<<<<< Updated upstream
      title: "Add New User",
      body: <UserForm loadTableData={loadTableData} dataIn={dataIn} />,
=======
      title: 'Add New User',
      body: <UserForm loadTableData={loadTableData} />,
>>>>>>> Stashed changes
      modalClass: "smart-modal-90",     
    };
    openModal(modalObject);
  };


  const deleteData = (id) => {
    setLoading(true, "Please Wait....");
    const handleError = (errorMessage) => {
      showNotification("error", errorMessage);     
      setLoading(false);
    };
    const subscription = post(USER_API_URLS.delete_one,{id:id}, handleError).subscribe(
      (response) => {
        showNotification("success","Deleted Successfully...")
        closeModal();
        loadTableData();       
       // setLoading(false);
      }
    );
    return () => {
      subscription.unsubscribe();
    };
  };

  const resetPassword = (id) => {
    setLoading(true, "Please Wait....");
    const handleError = (errorMessage) => {
      showNotification("error", errorMessage);     
      setLoading(false);
    };
    const subscription = post(USER_API_URLS.admin_reset,{id:id}, handleError).subscribe(
      (response) => {
        showNotification("success","Password Reset Successfully...")
        closeModal();
        loadTableData();
      }
    );
    return () => {
      subscription.unsubscribe();
    };
  };

  const viewEditData = (id,type) => {
    setLoading(true, "Please Wait....");
    const handleError = (errorMessage) => {
      showNotification("error", errorMessage);     
      setLoading(false);
    };
    const subscription = post(USER_API_URLS.get_one,{id:id}, handleError).subscribe(
      (response) => {
        if(type=="EDIT"){
          openMyModal(response.data);
        }else{
          viewModal(response.data);
        }        
        setLoading(false);       
      }
    );
    return () => {
      subscription.unsubscribe();
    };
  };

  const openDeleteModal=(id,name)=>{
    let modelObject = {
      title:"Do you want to Delete The Employee / User",
      body:"Note: The user will be deleted! Action cannot be reverted",
      okFunction:()=>{
        deleteData(id);      
      },
      cancelFunction:()=>{
        closeModal();
       // console.log("cancel function")
      }
    }
    openModal(modelObject);
  }

  const openResetModal=(id,name)=>{
    let modelObject = {
      title:"Do you want to Reset Password of The Employee / User",
      body:"Note: The password will be reset to Employee ID! Action cannot be reverted",
      okFunction:()=>{
        resetPassword(id);      
      },
      cancelFunction:()=>{
        closeModal();
       // console.log("cancel function")
      }
    }
    openModal(modelObject);
  }

  const viewModal = (data) => {
    let modalObject = {
      title: data?.ename,
      body: <UserDetails data={data} />,
      modalClass: "smart-modal-70",     
    };
    openModal(modalObject);
  };

  return (
    <>
      <div className="is-flex is-justify-content-space-between mb-3">
        <h1 className="is-size-4 is-3 ">User Management</h1>

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
