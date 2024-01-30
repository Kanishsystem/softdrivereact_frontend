import React from 'react'

import './Login.css'; 
import { SmartSoftInput } from 'soft_digi';

const ForgetPassword = () => {
  return (
    <div>
             <section className='login-section'>
    <div className="login-box forget-box">
        <form action="">
            <h2>Forget Password</h2>
            <div className="input-box mt-2">
              
                <SmartSoftInput key="forget" label="Enter Your Email "
        
         
            inputType="BORDER_LESS"     
        
                   
          />

         
               
            </div>
          
           
           
           <button type="button" className='login-button my-4'   > Submit </button>

       
         
        </form>
    </div>
    </section>
    </div>
  )
}

export default ForgetPassword