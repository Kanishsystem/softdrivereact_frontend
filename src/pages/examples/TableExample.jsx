import React, { useEffect, useState } from "react";

import {SmartSoftTable} from 'soft_digi';
import { MAIN_PIC } from "../../services/ImageService";

const TableExample = () => {
  const [tabData, setTabData] = useState([]);

  const titleDisplay = (handleSort, handleFilter) => {
    return <p>Test</p>;
  };

  const nameTags = [{ value: "John", label: "John", class: "is-link" }];

  /**** the function input will be single row */

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
  const buttons = [
    {
      label: "", leftIcon: "fa-file",type:"icon", classList: [""], onClick: (data) => {
        console.log("data", data);
      }
    },
    {
      label: "", leftIcon: "fa-file",type:"icon", classList: [""], onClick: (data) => {
        console.log("data", data);
      }
    }
  ];

  const columns = [
    { title: "ID", index: "id", isSortable: true, type: "sno" },
    { title: "Name", index: "name" },
    { title: "Age", index: "age", isSortable: true },
    { title: "Age", index: "age", titleFunction: titleDisplay },
    { title: "Date", index: "sdate", type: "date", dateFormat: "DD-MM" },
    { title: "tags", index: "name", type: "tags", tags: nameTags },
    { title: "profile", index: "name", valueFunction: nameFunction },
    { title: "progress", index: "age", type: "progress", progressMax: 100 },
    { title: "action", index: "action", type: "buttons", buttons: buttons },
    { title: "action", index: "action", type: "action", buttons: buttons },
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

    return (
       <>
       
        <p onClick={()=>addNewObject()} > Add </p>
       
        <SmartSoftTable data={tabData}  columns={columns} paginationProps={pagination} />
       </>
    )
}

export default TableExample