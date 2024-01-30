import React, { useState } from 'react'
import { SmartSoftCheckRadioSwitch, SmartSoftInput } from 'soft_digi'
import './FileSettings.css'; 

const GeneralSettings = () => {

    const [formData, setFormData] = useState({});
    const handleInputChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const options = [
       {}
      ]
   
      
  return (

    <>
    <div className='columns'>
        <div className='column'>
            <div className='card'>
                <div className='card-header card'>
                    <div className='card-header-title'>
                    <div>GeneralSettings</div>
                    </div>
                </div>
                <div className='card-body p-4'>
                <div key={"main-field-1"} className='is-flex is-justify-content-space-between'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-1"} className='main-general-label'>Maximum single file size allowed </p>
                    <p  key={"sub-label-1"} className='sub-general-label'>(Default is 10 MB)</p>
                    </div>
                    <div className='general-input'>
                        <SmartSoftInput
                        className="smart-general-text-box"
                         />
                        
                    </div>
                </div>
                <div key={"main-field-2"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-1"} className='main-general-label'>Maximum No. of files allowed in single request </p>
                    <p  key={"sub-label-1"} className='sub-general-label'>(Default is 10 files)</p>
                    </div>
                    <div className='general-input'>
                        <SmartSoftInput
                        className="smart-general-text-box"
                         />
                        
                    </div>
                </div>
                <div key={"main-field-3"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-1"} className='main-general-label'>Enable version control of file </p>
                    <p  key={"sub-label-1"} className='sub-general-label'></p>
                    </div>
                    <div className='general-input'>
                    <SmartSoftCheckRadioSwitch        
                     options={options}
                    switchMode={true}
                    name="switchone"
                    value={formData?.switchone || ""}
                    onChange={(value) => handleInputChange("switchone", value)}
                 
                  
                 
        />
             
                        
                    </div>
                </div>
                <div key={"main-field-4"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-1"} className='main-general-label'>Allow downloading of files </p>
                    <p  key={"sub-label-1"} className='sub-general-label'>(OFF disables download)</p>
                    </div>
                    <div className='general-input'>
                    <SmartSoftCheckRadioSwitch
          options={options}
          name="checkboxone"
          value={formData?.input_eight || null}
          onChange={(value) => handleInputChange("input_eight", value)}
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

export default GeneralSettings