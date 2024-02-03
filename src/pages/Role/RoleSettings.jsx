import React, { useState } from 'react'
import { SmartSoftButton, SmartSoftCheckRadioSwitch} from 'soft_digi'


const options = [
    {value:"1",label:""},
    {value:"2",label:""},
   ]

const RoleSettings = () => {

    const [formData, setFormData] = useState({});
   

    const handleInputChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

  return (
    <>
    <div className='columns'>
        <div className='column'>
            <div className='card-body'>
               
                <div key={"main-field-1"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                        <p key={"main=label-1"} className='main-general-label'>Allow users to upload files </p>
                    </div>

                      <div>
                         <SmartSoftCheckRadioSwitch
                         options={options}
                         name="checkboxone"
                         value={formData?.checkboxone || null}
                         onChange={(value) => handleInputChange("checkboxone", value)}
                         isRight={true}
                         /> 
                      </div>
                </div>

                
                <div key={"main-field-2"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                        <p key={"main=label-2"} className='main-general-label'>Allow users to share files </p>
                    </div>

                      <div>
                         <SmartSoftCheckRadioSwitch
                         options={options}
                         name="checkboxtwo"
                         value={formData?.checkboxtwo || null}
                         onChange={(value) => handleInputChange("checkboxtwo", value)}
                         isRight={true}
                         /> 
                      </div>
                </div>

                <div key={"main-field-3"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                        <p key={"main=label-3"} className='main-general-label'>Allow users to share files remotely </p>
                    </div>

                      <div>
                         <SmartSoftCheckRadioSwitch
                         options={options}
                         name="checkboxthree"
                         value={formData?.checkboxthree || null}
                         onChange={(value) => handleInputChange("checkboxthree", value)}
                         isRight={true}
                         /> 
                      </div>
                </div>

                <div key={"main-field-4"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                        <p key={"main=label-4"} className='main-general-label'>Allow users to edit files </p>
                    </div>

                      <div>
                         <SmartSoftCheckRadioSwitch
                         options={options}
                         name="checkboxfour"
                         value={formData?.checkboxfour || null}
                         onChange={(value) => handleInputChange("checkboxfour", value)}
                         isRight={true}
                         /> 
                      </div>
                </div>

                <div key={"main-field-5"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                        <p key={"main=label-5"} className='main-general-label'>Allow users to download files </p>
                    </div>

                      <div>
                         <SmartSoftCheckRadioSwitch
                         options={options}
                         name="checkboxfive"
                         value={formData?.checkboxfive || null}
                         onChange={(value) => handleInputChange("checkboxfive", value)}
                         isRight={true}
                         /> 
                      </div>
                </div>

                <div key={"main-field-6"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                        <p key={"main=label-6"} className='main-general-label'>Encrypt the files uploaded by this role users </p>
                    </div>

                      <div>
                         <SmartSoftCheckRadioSwitch
                         options={options}
                         name="checkboxsix"
                         value={formData?.checkboxsix || null}
                         onChange={(value) => handleInputChange("checkboxsix", value)}
                           isRight={true}
                         /> 
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
    
    
    </>
   
  )
}

export default RoleSettings