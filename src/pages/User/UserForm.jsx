import React from 'react'
import { SmartSoftInput, SmartSoftSelect } from 'soft_digi'

const UserForm = () => {
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
              <SmartSoftInput 
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
        </div>
        
      </div>
    </div>
  )
}

export default UserForm