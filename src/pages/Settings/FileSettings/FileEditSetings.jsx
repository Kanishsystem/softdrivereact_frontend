


import React, { useState } from 'react'
import { SmartSoftButton, SmartSoftCheckRadioSwitch, SmartSoftInput } from 'soft_digi'
import './FileSettings.css'; 

const ExtensionSettings = () => {

    const [formData, setFormData] = useState({});
    const handleInputChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const options = [
       {value:"1",label:""}
      ]
   

  return (

        <>

    <div className='columns'>
    <div className='column'>
        <div className='card'>
            <div className='card-header card'>
                <div className='card-header-title'>
                <div>FileEditSettings</div>
                </div>
            </div>


            <div key={"main-field-3"} className='is-flex is-justify-content-space-between my-4'>
                <div className='general-label is-flex is-flex-direction-column '>
                <p key={"main=label-1"} className='main-general-label'>Allow editing progressing files </p>
                <p  key={"sub-label-1"} className='sub-general-label'></p>
                </div>
                <div className='general-input'>
                <SmartSoftCheckRadioSwitch        
                 options={options}
                switchMode={true}
                name="switchone3"
                value={formData?.switchone3 || ""}
                onChange={(value) => handleInputChange("switchone3", value)}  /></div>
            </div>
            <div key={"main-field-3"} className='is-flex is-justify-content-space-between my-4'>
                <div className='general-label is-flex is-flex-direction-column '>
                <p key={"main=label-1"} className='main-general-label'>Allow editing of documents </p>
                <p  key={"sub-label-1"} className='sub-general-label'>(Document editor URL is Required)</p>

                </div>
                

              
                <div className='general-input'>
                <SmartSoftCheckRadioSwitch        
                 options={options}
                switchMode={true}
                name="switchone2"
                value={formData?.switchone3 || ""}
                onChange={(value) => handleInputChange("switchone3", value)}  /></div>
            </div>


            <div className='card-body p-4'>
            <div>

                <div className='general-label is-flex is-flex-direction-column '>
                </div>
                <div>
                    <SmartSoftInput
                    label='Document Editing Server URL'
                     />
                    
                </div>
            </div>


                                     <div className='general-button is-flex is-justify-content-end'>
                    <SmartSoftButton label='Save' />
                </div>
                    
                </div>
            </div>
           
            </div>
            </div>
            
        
    


</>

  )
}

export default ExtensionSettings