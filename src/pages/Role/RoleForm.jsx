import React from 'react'
import { SmartSoftInput, SmartSoftSelect } from 'soft_digi'


const RoleForm = () => {
  return (
    <div>
    <div className='container'>
          <div className='columns is-multiline'>
            <div className='column is-12'>
              <SmartSoftInput
              label='Role Name' 
              placeHolder='Enter Your Name'
              />
            </div>

            <div className='column is-12'>
          <SmartSoftSelect
          label='Select Employee' />
        </div>
       </div>
      </div>
      
    </div>
  
  )
}

export default RoleForm