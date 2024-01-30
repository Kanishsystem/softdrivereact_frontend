import React, { useState } from 'react'
import { SmartSoftCheckRadioSwitch, SmartSoftInput, SmartSoftSelect } from 'soft_digi'

const UserForm = () => {
  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors,setFormErrors] = useState(false);
  const [type, setType] = useState("password");

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
};

const options = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'In-Active' },
  { value: 'locked', label: 'Locked' }
]

  return (
    <div>
      <div className='container'>
        <div className='columns is-multiline'>
          <div className='column is-8'>
            <div className='columns is-multiline'>
              <div className='column is-6'>
                <SmartSoftInput
                label='Employee ID' 
                placeHolder='IC Number'
                />
              </div>
              <div className='column is-6'>
              <SmartSoftInput className="smart-ii"
              label='Name'
              placeHolder='Enter Your Name'/>
              </div>

              <div className='column is-6'>
              <SmartSoftInput
              label='Mobile Number'
              placeHolder='Mobile Number'

              
              />
              </div>

              <div className='column is-6'>
              <SmartSoftInput
              label='Email' 
              placeHolder='Email'
              />
              </div>

            </div>
          </div>
          <div className='column is-4 has-text-white'>Image Upload</div>
          <div className='column is-8'>
            <SmartSoftSelect
            label='Select Role'
            placeHolder='Please Select' />
           
          </div>

          <div className='column is-8'>
          <SmartSoftCheckRadioSwitch
           isMulti={true}
           options={options}
            label='Select Employee Status' 
            type={"radio"}
            name="radioone"
          value={formData?.radioone || ""}
          onChange={(value) => handleInputChange("radioone", value)}
                 
        />



          </div>

        </div>
        
      </div>
    </div>
  )
}

export default UserForm