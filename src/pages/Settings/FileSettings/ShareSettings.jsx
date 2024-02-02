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
                <div>ShareSettings</div>
                </div>
            </div>
            <div className='card-body p-4'>
            <div key={"main-field-1"} className='is-flex is-justify-content-space-between'>
                <div className='general-label is-flex is-flex-direction-column '>

                </div>
                <div className='general-input'>
                
                     
                    
                </div>
            </div>
            <div key={"main-field-2"} className='is-flex is-justify-content-space-between my-4'>
                <div className='general-label is-flex is-flex-direction-column '>
                <p key={"main=label-1"} className='main-general-label'>Allow folder sharing </p>
                <p  key={"sub-label-1"} className='sub-general-label'>(This allows folder share among users)</p>
                </div>
                <div className='general-input'>
                <div className='general-input'>
                <SmartSoftCheckRadioSwitch
      options={options}
      name="checkboxone"
      value={formData?.input_eight || null}
      onChange={(value) => handleInputChange("input_eight", value)}
    />  </div>

    

                    
                </div>
            </div>
            <div key={"main-field-3"} className='is-flex is-justify-content-space-between my-4'>
                <div className='general-label is-flex is-flex-direction-column '>
                <p key={"main=label-1"} className='main-general-label'>Allows Remote Sharing</p>
                <p  key={"sub-label-1"} className='sub-general-label'>(This allows files to be shared among users)</p>
                </div>
                <div className='general-input'>
                <SmartSoftCheckRadioSwitch
      options={options}
      name="checkboxone"
      value={formData?.input_eight || null}
      onChange={(value) => handleInputChange("input_eight", value)}
    />  </div>

            </div>
            <div key={"main-field-4"} className='is-flex is-justify-content-space-between my-4'>
                <div className='general-label is-flex is-flex-direction-column '>
                <p key={"main=label-1"} className='main-general-label'>Minimum number of dats a share expires</p>
                <p  key={"sub-label-1"} className='sub-general-label'>(Default is 30 days,0 indicates no expiry)</p>
                </div>
            </div>
            <div className='general-button is-flex is-justify-content-end'>
                <SmartSoftButton 
                label='Save'
                classList={["smart-action-button"]} 
                />
            </div>
            </div>
            
        </div>
    </div>
</div>

</>

  )
}

export default ExtensionSettings