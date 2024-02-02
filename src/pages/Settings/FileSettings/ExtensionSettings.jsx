
import React, { useState } from 'react'
import { SmartSoftButton, SmartSoftCheckRadioSwitch, SmartSoftInput,SmartSoftSelect } from 'soft_digi'
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
                <div>ExtensionSettings</div>
                </div>
            </div>
            <div className='card-body p-4'>
            <div key={"main-field-1"} className=' is-justify-content-space-between'>
                <div className='general-label is-flex is-flex-direction-column '>
                </div>
                <div className=' select-box'>
                    <SmartSoftSelect
                     placeHolder='MicroSoft Document'
                     classList={[""]}
                      />
                        
                   
                    
                </div>
                
            </div>
            
            <div key={"main-field-2"} className=' is-justify-content-space-between my-4'>
                <div className='general-label is-flex is-flex-direction-column '>

                </div>
                <div className='select-box'>
                <SmartSoftSelect placeHolder='Spread Sheet' />
                        
                       
                        
    
                    
                </div>
            </div>
            <hr></hr>




            <div key={"main-field-3"} className='is-flex is-justify-content-space-between my-4'>
                <div className='general-label is-flex is-flex-direction-column '>
                <SmartSoftInput  label="Extension" className="box-model" id="boxmodel"/> 
                </div>
                
            </div>
            <div key={"main-field-4"} className='is-flex is-justify-content-space-between-is table-responsive-lg my-4'>
                <div className='general-label is-flex is-flex-direction-column '>
                <SmartSoftInput  label="Title"/> 

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