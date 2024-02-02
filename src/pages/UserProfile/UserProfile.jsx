import React from 'react'
import { SmartSoftButton, SmartSoftInput } from 'soft_digi';

const UserProfile = () => {
  return (
    <>
    <div className='container'>
      <div className='columns is-multiline'>
        <div className='column is-8'>
         <div className='card'>
         <div className='card-header card'>
                    <div className='card-header-title'>
                    <div>Profile Details</div>
                    </div>
                </div>
          <div className="card-content ">
            
             <div className='columns is-multiline'>
              <div className='column is-4'>
                Profile Image
              </div>
           
              <div className='column is-4'>
              <SmartSoftInput
               key="text-1"
              label='Full Name'
              placeHolder='Your Full Name'
              leftIcon="fa-user"
               
              
               />
                 <SmartSoftInput 
                  key="text-2"
                  label='Phone Number'
                  placeHolder='Your Phone number'
                  leftIcon="fa-solid fa-phone"
           
            
            />
               </div>
          
        <div className='column is-4'>
          

            <SmartSoftInput 
                  key="text-3"
                  label='Email'
                  placeHolder='Your Email Address'
                  leftIcon="fa-solid fa-envelope"
              
             
            />
             <SmartSoftInput
            key="text-4"
           label='Address'
           placeHolder='Your postal address'
           leftIcon="fa-solid fa-address-book"
           
            />
            </div>
         </div>



         <div className='columns is-multiline'>
         <div className='column is-12'>
                Groups<br/>
                You are member of the following groups:<br/>
                admin

                <div>
                   Password

                <div className='columns is-multiline'>
                      <div className='column is-4'>
                        <SmartSoftInput
                            key="text-4"
                            placeHolder='Current Password'
                        />
                      </div>
          
                      <div className='column is-4'>
                        <SmartSoftInput 
                            key="text-5"
                            placeHolder='New Password'
                            leftIcon="fa-eye"
                        />
                      </div>

                
                       <div className='column is-4'>
                        <SmartSoftInput 
                             key="text-6"
                             placeHolder='Change Password'
                        />
                        <div className='is-flex is-justify-content-end'>
                      <SmartSoftButton 
                        classList={["smart-action-button"]}
                        label='Save'/>
                      </div>
                      </div>

                      

                 </div>


                  

                </div>
                
          </div>

         </div>




          </div>
          </div>
          </div>

         </div>
        </div>
       
    
   


    </>

    
  )
}

export default UserProfile