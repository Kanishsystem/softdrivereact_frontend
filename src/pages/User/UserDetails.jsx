import React from "react";
const UserDetails = ({data}) => {
  return (
    <>
       <table>
         <tr><td>Name</td><td>{data?.ename}</td></tr>  
      </table>    
    </>
  );
};

export default UserDetails;
