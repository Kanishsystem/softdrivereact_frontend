import React, { useEffect, useState } from "react";

import {SmartSoftButton, SmartSoftTable} from 'soft_digi';
import { useSiteContext } from "../../contexts/SiteProvider";
import RoleForm from "./RoleForm";
import { get } from "../../services/smartApiService";
import { showNotification } from "../../services/notifyService";

import ROLE_API_URLS from "../../services/ApiUrls/RoleUrls";

const RoleTable = () => {
  

    const [tabData, setTabData] = useState([]);
 
    const { setLoading, setUser, openModal, closeModal, startSessionAct } = useSiteContext();

    const picture_display=(inputLabel)=>{
       let firstTwoCharacters = inputLabel.slice(0, 2).toUpperCase();
       return firstTwoCharacters;
      // return <span>{firstTwoCharacters}</span>
    }

    const nameTags = [{ value: "John", label: "John", className: "is-light" },
                     { value: "Jane", label: "Jane", className: "is-light" },
                    { value: "Doe", label: "Doe", className: "is-light" }];

                    const OuterComponent = (row) => {
                     // console.log("emps " , row["employees"]);
                      let employees = row && row["employees"] && Array.isArray(row["employees"]) ? row["employees"] : [];
                     // console.log("testigs",employees)
                      return (
                        <div>
                          {employees.map((subItem, subIndex) => (
                          <span  className="tag is-rounded" key={subIndex}>{picture_display(subItem.label)}</span>
                        ))}                                                
                         
                      </div>
                   );
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
      { title: 'S.No', index: 'id',isSortable:true,type:"sno" },
      { title: 'Role Name', index: 'role_name' },
      { title: 'Employee', index: 'employees',valueFunction: OuterComponent    },
      { title: "Action", index: "action", type: "action", buttons: buttons },
    ];

  const data = [
      { id: 1, name: 'John',sdate:"2022-05-06" },
      { id: 2, name: 'Jane',sdate:"2024-01-15" },
      { id: 3, name: 'Doe',sdate:"2024-01-06" },
      // ... more data
    ];
    const pagination = {
      navigationIcon:"fa-chevron"
    }

    const loadTableData = () => {   
      setLoading(true, 'Logging in Please Wait....');
      const handleError = (errorMessage) => {
        showNotification("error",errorMessage); 
        setTabData([]);    
        setLoading(false);      
      };
      const subscription = get(ROLE_API_URLS.get_all,handleError).subscribe((response) => {    
       
        setTabData(response.data);
        console.log("api data",response.data)
        setLoading(false);
      });
      return () => {   
        subscription.unsubscribe();
      };
    };
  
    useEffect(() => {
      loadTableData()
    }, []);
   

    const addNewObject = () => {
      // Create a new object to be added
      const newObject =   { id: 1, name: 'John', age: 25,sdate:"2023-05-06" };
  
      // Use the state updater function to add the new object to the state
      setTabData(prevData => [...prevData, newObject]);
    };

    useEffect(() => {
      // setTabData(data);
    }, []);
    /*
  const basicTable=()=>{
      return (
          <SmartTable data={tabData}  columns={columns} />
      )
  }*/
 



  const openMyModal = () => {
    let modalObject = {
       title: 'Add New Role',
     body: <RoleForm loadTableData={loadTableData} />,
      // footer: <MyFooterContent /> 
    };
    openModal(modalObject);
  };
  return(
  <>
   <div className="is-flex is-justify-content-space-between mb-3">
      <h1 className="is-size-4 is-3 ">Role Management</h1>
   
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
    paginationProps={pagination} />
 </>
  )
}

export default RoleTable