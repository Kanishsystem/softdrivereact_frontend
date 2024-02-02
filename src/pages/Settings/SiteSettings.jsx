import React, { useState } from 'react'
import { SmartSoftButton, SmartSoftInput } from 'soft_digi';
import './sitestyles.css';
import { ALLOW_NUMERIC } from '../../services/PatternSerivce';

const SiteSettings = () => {

  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors,setFormErrors] = useState(false);
  const [type, setType] = useState("textarea");
  const handleInputChange = (name, value) => {
    //console.log(" name " ,name , "   value " , value)
      setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  return (

    <>
    <div className='container'>
      <div className='columns'>
        <div className='column is-6'>
         <div className='card'>
          <div className="card-content ">
            <div className='is-flex is-justify-content-space-between mb-2'>
           
              <div className='is-size-6'>URL/IP Address</div>
              <SmartSoftInput
                key={"text-1"}
                pattern={ALLOW_NUMERIC}
                value={formData?.site_url_ip_address||""}
                onChange={(value) => handleInputChange("site_url_ip_address", value)}
               />
            </div>
            <div className='is-flex is-justify-content-space-between mb-2'>
           
           <div className='is-size-6'>Title</div>
           <SmartSoftInput
               key={"text-2"}
              value={formData?.site_title||""}
              onChange={(value) => handleInputChange("site_title", value)}
            />
         </div>
         <div className='is-flex is-justify-content-space-between mb-2'>
           
           <div className='is-size-6'>Short Name</div>
           <SmartSoftInput
             value={formData?.site_short_name||""}
             key={"text-3"}
             onChange={(value) => handleInputChange("site_short_name", value)}
            />
         </div>
         <div className='is-flex is-justify-content-space-between mb-2'>
           
           <div className='is-size-6'>Theme</div>
           <SmartSoftInput
             value={formData?.theme||""}
             key={"text-4"}
             onChange={(value) => handleInputChange("theme", value)}
            />
         </div>
         <div className='is-flex is-justify-content-space-between mb-2'>
           
           <div className='is-size-6'>Footer</div>
           <SmartSoftInput
            value={formData?.site_footer||""}
            key={"text-5"}
            onChange={(value) => handleInputChange("site_footer", value)}
            type={type}
             
            />
         </div>
            
           <div className='is-flex is-justify-content-end'>
           <SmartSoftButton 
           classList={["smart-action-button"]}
            label='Save'/>
           </div>
         
          </div>
          </div>

         </div>
        </div>
        <div className='column is-6' >
          
        </div>
      </div>
   


    </>

    
);


  
  
}

export default SiteSettings