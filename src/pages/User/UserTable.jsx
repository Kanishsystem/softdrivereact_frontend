import React, { useEffect, useState } from "react";

import {SmartSoftButton, SmartSoftTable} from 'soft_digi';
import { useSiteContext } from "../../contexts/SiteProvider";
import UserForm from "./UserForm";
import { MAIN_PIC } from "../../services/ImageService";


const UserTable = () => {
  const [tabData, setTabData] = useState([]);
 
    const { setLoading, setUser, openModal, closeModal, startSessionAct } = useSiteContext();
  

  // const titleDisplay=(handleSort,handleFilter)=>{
  //   return <p className="is-danger is-tag ">Test</p>
  // }
  const roleTags = [{   class: "is-link" }];
  const nameFunction = (row) => {
    return (
      <div className="is-flex">
        <figure className="image is-32x32 mr-2">
          <img className="is-rounded" src={MAIN_PIC} />
        </figure>
        {row["name"] || ""}
      </div>
    );
  };
  const roleFunction =(role)=>{
    if(role==="Admin"){
      return <span className="tag is-success">Administrator</span>;
    }else{
      return <span className="tag is-info">User</span>;
    }
  
  }

    const columns = [
      { title: "Name", index: "name", valueFunction: nameFunction, },
        { title: 'User Name', index: 'name',isSortable:true },
        { title: 'Email', index: 'email',isSortable:true },
        { title: 'Role', index: 'role' ,className:"is-link",valueFunction: roleFunction,},
        { title: "Storage Capacity", index: "age", type: "progress", progressMax:100 },
        {title:"Action", index:"action",}
      ];

   

      const userData=[
        { id: 1, name: 'John', age: 25,sdate:"2022-05-06",email:"test@gmail.com",role:"Admin", action:"b" },
        { id: 2, name: 'Jane', age: 30,sdate:"2024-01-15",email:"test@gmail.com",role:"Admin", action:"b"   },
        { id: 3, name: 'Doe', age: 4,sdate:"2024-01-06",email:"test@gmail.com",role:"Admin",  action:"b"  },
        { id: 4, name: 'John', age: 25,sdate:"2022-05-06",email:"test@gmail.com",role:"Admin", action:"b" },
        { id: 5, name: 'Jane', age: 30,sdate:"2024-01-15",email:"test@gmail.com",role:"Admin", action:"b"   },
        { id: 6, name: 'Doe', age: 4,sdate:"2024-01-06",email:"test@gmail.com",role:"Admin",  action:"b"  },
        { id: 7, name: 'John', age: 25,sdate:"2022-05-06",email:"test@gmail.com",role:"Admin", action:"b" },
        { id: 8, name: 'Jane', age: 30,sdate:"2024-01-15",email:"test@gmail.com",role:"Admin", action:"b"   },
        { id: 9, name: 'Doe', age: 4,sdate:"2024-01-06",email:"test@gmail.com",role:"Admin",  action:"b"  },
        { id: 10, name: 'John', age: 25,sdate:"2022-05-06",email:"test@gmail.com",role:"Admin", action:"b" },
        { id: 11, name: 'Jane', age: 30,sdate:"2024-01-15",email:"test@gmail.com",role:"Admin", action:"b"   },

      ]
      const pagination = {
        navigationIcon:"fa-chevron"
      }

      const addNewObject = () => {
        // Create a new object to be added
        const newObject =   { id: 1, name: 'John', age: 25,sdate:"2023-05-06" };
    
        // Use the state updater function to add the new object to the state
        setTabData(prevData => [...prevData, newObject]);
      };

      useEffect(() => {
        setTabData(userData);
      }, []);
      /*
    const basicTable=()=>{
        return (
            <SmartTable data={tabData}  columns={columns} />
        )
    }*/
    const MyFooterContent = () => {
      return (
        <div className="is-flex is-justify-content-end float-end">
          <button className="button is-success is-small">Go back</button>
          <button className="button  is-link is-small" onClick={closeModal}>Submit</button>
        </div>
      );
    };
  
 
  
    const openMyModal = () => {
      let modalObject = { title: 'Add New User', body: <UserForm />, footer: <MyFooterContent /> };
      openModal(modalObject);
    };

    return (
       <>
        <div className="is-flex is-justify-content-center ">
          <SmartSoftButton label="Add New User"  onClick={openMyModal} className="is-danger">Add</SmartSoftButton>
        </div>
       
       
        <SmartSoftTable data={tabData}  columns={columns} paginationProps={pagination} />
       </>
    )
}

export default UserTable