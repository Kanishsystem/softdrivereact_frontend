import React, { useState } from 'react'
import { SmartSoftButton, SmartSoftCheckRadioSwitch, SmartSoftInput } from 'soft_digi'


const LoginSettings = () => {

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
                    <div>Password Policy</div>
                    </div>
                </div>
                <div className='card-body p-4'>
                <div key={"main-field-1"} className='is-flex is-justify-content-space-between'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-1"} className='main-general-label'>Minimum password length </p>
                    <p  key={"sub-label-1"} className='sub-general-label'>(Default is 18 Characters)</p>
                    </div>
                    <div className='general-input'>
                        <SmartSoftInput
                        className="smart-general-text-box"
                         />
                        
                    </div>

                </div>
                

                <div key={"main-field-3"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-1"} className='main-general-label'>Number of failed login attempts before the user logged account is </p>
                    <p  key={"sub-label-1"} className='sub-general-label'></p>
                    </div>
               
                </div>
                <div key={"main-field-4"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-1"} className='main-general-label'>Enforce Numeric Characters </p>
                    <p  key={"sub-label-1"} className='sub-general-label'></p>
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
                    <p key={"main=label-1"} className='main-general-label'>Enforce Special Characters</p>
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
                    <p key={"main=label-1"} className='main-general-label'>Allow User to reset Using Email OTP </p>
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
                    </div>
                    <div className='general-input'>
                    <SmartSoftCheckRadioSwitch
                   options={options}
          name="checkboxone"
          
          value={formData?.input_eight || null}
          onChange={(value) => handleInputChange("input_eight", value)}
        />  </div>

                
                </div>
              
                </div>
                
            </div>
        </div>
    </div>



    <div className='card'>
                <div className='card-header card'>
                    <div className='card-header-title'>
                    <div>Expiry&Lock</div>
                    </div>
                </div>
                <div className='card-body p-4'>
                <div key={"main-field-1"} className='is-flex is-justify-content-space-between'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-1"} className='main-general-label'>Number of Days Until Password Expires </p>
                    <p  key={"sub-label-1"} className='sub-general-label'>(Default is 90 Days)</p>
                    </div>
                    <div className='general-input'>
                        <SmartSoftInput
                        className="smart-general-text-box"
                         />
                        
                    </div>

                </div>
                

                <div key={"main-field-3"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-1"} className='main-general-label'>Number of failed login attempts before the user account is  locked</p>
                    <p  key={"sub-label-1"} className='sub-general-label'>(Default is 5)</p>

                    <div className='general-input'>
                        <SmartSoftInput
                        className="smart-general-text-box"
                         />
                        
                    </div>

                    </div>
               
                </div>
                <div key={"main-field-4"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-2"} className='main-general-label'>Allow User to Unlock Using Email OTP</p>
                    <p  key={"sub-label-2"} className='sub-general-label'></p>
                    </div>
                    <div className='general-input'>
                    <SmartSoftCheckRadioSwitch
                   options={options}
          name="checkboxone"
          
          value={formData?.input_eight || null}
          onChange={(value) => handleInputChange("input_eight", value)}
        />  </div>

        
                </div>
                



            
              
                </div>




                
            </div>
        
    

 <div className='card'>
                <div className='card-header card'>
                    <div className='card-header-title'>
                    <div>Two factor Authentication </div>
                    </div>
                </div>
                <div className='card-body p-4'>
              
                

               
                <div key={"main-field-4"} className='is-flex is-justify-content-space-between my-4'>
                    <div className='general-label is-flex is-flex-direction-column '>
                    <p key={"main=label-2"} className='main-general-label'>Allow Two factor Authentication using Email OTP</p>
                    <p  key={"sub-label-2"} className='sub-general-label'></p>
                    </div>
                    <div className='general-input'>
                    <SmartSoftCheckRadioSwitch
                   options={options}
          name="checkboxone"
          
          value={formData?.input_eight || null}
          onChange={(value) => handleInputChange("input_eight", value)}
        />  </div>

        
                </div>
                



            
              
                </div>



                
                
            </div>
        


    
    </>
   
  )
}

export default LoginSettings