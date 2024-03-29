import React, { useEffect, useState } from "react";
import { SmartSoftTable } from "soft_digi";

const ShareWithMe = () => {
  const [tableData, setTableData] = useState([]);

  const ShareTable = () => {
    const buttons = [
      {
        label: "",
        leftIcon: "fa fa-folder-open-o",
        type: "icon",
        classList: [""],
      },
      {
        label: "",
        leftIcon: "fa fa-eye",
        type: "icon",
        classList: [""],
      },
      {
        label: "",
        leftIcon: "fa fa-download",
        type: "icon",
        classList: [""],
      },
      {
        label: "",
        leftIcon: "fa fa-pencil-square-o",
        type: "icon",
        classList: [""],
      },
    ];

    const columns = [
      { title: "No", index: "no", isSortable: true, type: "sno" },
      { title: "Folder/File", index: "folder_file" },
      { title: "Shared by", index: "shared_by", isSortable: true },
      {
        title: "Shared Date",
        index: "shared_date",
        type: "date",
        dateFormat: "DD-MM-YYYY",
      },
      { title: "Expiry Date", index: "expiry_date" },
      { title: "Action", index: "action", type: "action", buttons: buttons },
    ];

    const data = [
      {
        no: 1,
        folder_file: "React",
        shared_by: "Balaji",
        shared_date: "2021-09-17",
        expiry_date: "10 Days Later",
      },
      {
        no: 2,
        folder_file: "index.js",
        shared_by: "sanjay",
        shared_date: "2021-09-19",
        expiry_date: "10 Days Later",
      },
      {
        no: 3,
        folder_file: "app.jsx",
        shared_by: "sudha",
        shared_date: "2021-09-21",
        expiry_date: "10 Days Later",
      },
      {
        no: 4,
        folder_file: "images",
        shared_by: "kalki",
        shared_date: "2021-09-29",
        expiry_date: "10 Days Later",
      },
      {
        no: 5,
        folder_file: "files",
        shared_by: "raju",
        shared_date: "2021-10-02",
        expiry_date: "10 Days Later",
        action: "",
      },
      // ... more data
    ];

    useEffect(() => {
      setTableData(data);
    }, []);

    return <SmartSoftTable data={tableData} columns={columns} />;
  };

  return <>{ShareTable()}</>;
};

export default ShareWithMe;
