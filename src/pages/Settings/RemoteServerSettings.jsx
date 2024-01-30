import React from 'react'
import { SmartSoftInput } from 'soft_digi';

const RemoteServerSettings = () => {
  return (
    
    <div className="page-container1"> 
   <div className="page-body is-flex is-flex-direction-row">
     <div className="side-bar1 is-flex is-flex-direction-row">
      <div className="part-container1">
      <div className="icon-container1 is-flex is-flex-direction-row">
      <i class="fa fa-line-chart" aria-hidden="true"></i>
      <i class="fa fa-share" aria-hidden="true"></i>
      <i class="fa fa-square-o" aria-hidden="true"></i>
       </div>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjGm1SHuZZCBX1vmKw3-YAH1uJWaVAww9M0SQf4n_qnHhcIKgyQBIh27_uRLkpIJYWHs&usqp=CAU" className="logo"/>
       <div className="icon-container2">
       <i class="fa fa-eyedropper" aria-hidden="true"></i>
       
       </div>

      </div>

       </div>
       <div className="part-container1">
        <div className="icon-container1 is-flex is-flex-direction-row">
        <i class="fa fa-line-chart" aria-hidden="true"></i>
        <i class="fa fa-share" aria-hidden="true"></i>
        <i class="fa fa-square-o" aria-hidden="true"></i>
         </div>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjGm1SHuZZCBX1vmKw3-YAH1uJWaVAww9M0SQf4n_qnHhcIKgyQBIh27_uRLkpIJYWHs&usqp=CAU" className="logo"/> 
       <div className="icon-container2">
       <i class="fa fa-eyedropper" aria-hidden="true"></i>
       </div>
       
       </div>
       
      
       <div className="icon-container3">
       <i class="fa fa-th" aria-hidden="true"></i>
       </div> 
       <div className="part-container2">
       {/* <p className="Server-Url">Server Url
       <input type="text" className="box1"/>
        </p> */}

        {/* <p className="Server-Way">Server Way
       <input type="text" className="box1"/>
        </p> */}
         <SmartSoftInput  label="Server Url" className="box-model" id="boxmodel"/> 
        <SmartSoftInput  label="Server Way"/> 
        
        <SmartSoftInput  label="Server file"/> 
       
      <div className="buuton-block is-flex is-flex-direction-row">
       <button className="Next">Next</button>
       <button className="Added">Added File</button>
       </div>

       </div> 
      
   </div>  

</div>

);
 
}

export default RemoteServerSettings