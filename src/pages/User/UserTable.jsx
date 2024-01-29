import React, { useEffect, useState } from "react";

import {SmartSoftButton, SmartSoftTable} from 'soft_digi';
import { useSiteContext } from "../../contexts/SiteProvider";
import UserForm from "./UserForm";


const UserTable = () => {
  const [tabData, setTabData] = useState([]);
 
    const { setLoading, setUser, openModal, closeModal, startSessionAct } = useSiteContext();
  

  // const titleDisplay=(handleSort,handleFilter)=>{
  //   return <p className="is-danger is-tag ">Test</p>
  // }


    const columns = [
        { title: 'Name', index: 'name',isSortable:true },
        { title: 'User Name', index: 'name' },
        { title: 'Email', index: 'age',isSortable:true },
        { title: 'Role', index: 'age', },
         {title:"Storage Capacity",index:"sdate",},
         {title:"Action", index:"action",}
      ];

    const data = [
      
        { id: 1, name: 'John', age: 25,sdate:"2022-05-06" },
        { id: 2, name: 'Jane', age: 30,sdate:"2024-01-15" },
        { id: 3, name: 'Doe', age: 4,sdate:"2024-01-06" },
        // ... more data
      ];
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
        setTabData(data);
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
        <div className="is-flex justify-content-end ">
          <SmartSoftButton  onClick={openMyModal} className="is-danger">Add</SmartSoftButton>
        </div>
       
       
        <SmartSoftTable data={tabData}  columns={columns} paginationProps={pagination} />
       </>
    )
}

export default UserTable