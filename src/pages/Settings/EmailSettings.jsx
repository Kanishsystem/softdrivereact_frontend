import React, { useState } from 'react'
import { SmartSoftButton, SmartSoftCheckRadioSwitch, SmartSoftInput, SmartSoftSelect } from 'soft_digi'
import './sitestyles.css';



const EmailSettings = () => {

  const [formData, setFormData] = useState({});
  const handleInputChange = (name, value) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const options = [
     {value:"1",label:""}
    ]
  return (
   <>
   <div className='container'>
    <div className='columns'>
      <div className='column is-6'>
      <div className='card'>
        <div className='card-header card'> 
        <div className='card-title has-text-weight-bold p-3'>
          Email Settings
        </div>
        </div>
        <div className='card-body p-4'>
        <div className='is-flex is-justify-content-space-between my-2'>
          <div> Send Mode</div>
          <div className='select-box'> <SmartSoftSelect
          key={"text-1"}
           /></div>
        </div>
        <div className='is-flex is-justify-content-space-between my-2'>
          <div> Encryption</div>
          <div className='select-box'> <SmartSoftSelect
            key={"text-2"}
           /></div>
        </div>
        <div className='is-flex is-justify-content-space-between my-2'>
          <div> From Email ID</div>
          <div className='select-box'> <SmartSoftInput 
            key={"text-3"}
          /></div>
        </div>
        <div className='is-flex is-justify-content-space-between my-2'>
          <div> Server Address</div>
          <div className='select-box'> <SmartSoftInput 
          placeHolder='IP or Domain'
            key={"text-4"}
          /></div>
        </div>
        <div className='is-flex is-justify-content-space-between my-2'>
          <div> Server Port</div>
          <div className='select-box'> <SmartSoftInput 
            key={"text-5"}
          /></div>
        </div>
        <div className='is-flex is-justify-content-space-between my-2'>
          <div> Authentication</div>
          <div className='select-box'> <SmartSoftCheckRadioSwitch 
            key={"text-6"}
            options={options}
            switchMode={true}
            name="switchone"
            value={formData?.switchone || ""}
            onChange={(value) => handleInputChange("switchone", value)}
          /></div>
        </div>
        <div className='is-flex is-justify-content-space-between my-2'>
          <div> User Name</div>
          <div className='select-box'> <SmartSoftInput 
            key={"text-7"}
          /></div>
        </div>
        <div className='is-flex is-justify-content-space-between my-2'>
          <div> Password</div>
          <div className='select-box'> <SmartSoftInput 
            key={"text-8"}
          /></div>
        </div>
        <div className='is-flex is-justify-content-end'>
          <a className='is-info mr-5 mt-2 ' href='#'>Test Email</a>
          <SmartSoftButton label='Save' 
          classList={["smart-action-button"]} 
          
          />
        </div>
        </div>

      </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default EmailSettings