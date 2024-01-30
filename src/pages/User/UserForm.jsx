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
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
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
                />
              </div>
              <div className='column is-6'>
              <SmartSoftInput className="smart-ii"
              label='Name'/>
              </div>

              <div className='column is-6'>
              <SmartSoftInput
              label='Mobile Number'

              
              />
              </div>

              <div className='column is-6'>
              <SmartSoftInput
              label='Email' />
              </div>

            </div>
          </div>
          <div className='column is-4 has-text-white'>Image Upload</div>
          <div className='column is-8'>
            <SmartSoftSelect
            label='Select Role' />
          </div>

          <div className='column is-8'>
          {/* <SmartSoftCheckRadioSwitch
           isMulti={true}
           options={options}
            label='Select Employee Status' 
            type={"radio"}
            name="status"
          value={formData?.radioone || ""}
          onChange={(value) => handleInputChange("status", value)}
                 
        /> */}

<SmartSoftCheckRadioSwitch
          isMulti={true}
          options={options}
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