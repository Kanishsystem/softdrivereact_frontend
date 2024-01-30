import React from 'react'
import { SmartSoftInput } from 'soft_digi';
import './sitestyles.css';

const SiteSettings = () => {
  return (

    <div className="page-container">
      

    <div className="page-body is-flex is-flex-direction-row">

      <div className="content d-flex flex-column">
         <div className="is-flex is-flex-direction-row">
          <label className="Uruip">URUIP Adress</label>
          {/* {/* <SmartSoftInput/} */}
           <input type="text" className="input-box1"/> 
         </div>
   
         <div className="is-flex is-flex-direction-row">
          <label className="Title">Title</label>
          {/* <SmartSoftInput placeholder="bhai"/> */}
          <input type="text" className="input-box2" placeholder="input text"/>
         </div>
           

         <div className="is-flex is-flex-direction-row">
          <label className="Short-Name">Short Name</label>
          {/* <SmartSoftInput className="Chinna"/> */}
          <input type="text" className="input-box3" placeholder="input text"/>
         </div>
         
         <div className="is-flex is-flex-direction-row">
          <label className="Theme">Theme</label>
          {/* <SmartSoftInput className="Chinna"/> */}
          <input type="text" className="input-box4" placeholder="input text"/>

         </div>  

         <div className="is-flex is-flex-direction-row">
          <label className="Foot">Footer</label>
         
          
           <input type="text" className="input-box5" placeholder="input text"/> 
           
         </div>
      </div>

      <div className="side-bar is-flex is-flex-direction-row">
        <div className="side-bar1 is-flex is-flex-direction-column">
        <h1 className="Site-logo"> Site Logo</h1>
        <div className="container1">
          <div className="sub-container1"></div>
         
          <button className="Select-button">Select</button>
        </div>
        </div>

        <div className="side-bar2 d-flex flex-column">
        <h1 className="Site-loginlogo"> Site Login Logo</h1>
        <div class="container2">
          <div className="sub-container2"></div>
           <button className="Select-button">Select</button> 
        </div>
        
      </div>
      </div>



    </div>

  </div>

);




    // <div className="page-container">
    //   <div className="side-block is-flex">
    //     <h1 className="Uruip">URUIP Adress</h1>
    //     <SmartSoftInput placeholder="inputtext"/>

    //   </div>
    //   {/* <label className="uruip">URUIP Adress</label>
    //   <SmartSoftInput/> */}









  // </div>
  
  
}

export default SiteSettings