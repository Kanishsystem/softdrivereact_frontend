import React, { useState } from 'react'
import SmartInput from "../../components/core/forms/SmartInput";
import './Login.css'; 

const SmartDriveLogin = () => {

    const [formData, setFormData] = useState({});
    const [formSubmit, setFormSubmit] = useState(false);
    const [formErrors,setFormErrors] = useState(false);
    const [type, setType] = useState("password");

    
    const handleInputChange = (name, value) => {
        //console.log(" name " ,name , "   value " , value)
          setFormData((prev) => ({ ...prev, [name]: value }));
      };
      const handleErrorChange = (name, value) => {
          setFormErrors((prev) => {
            // Create a copy of the previous state
            const updatedFormData = { ...prev };      
            // Check if the value is null or empty
            if (value === null || value === '') {
              // If true, remove the property from the updated state
              delete updatedFormData[name];
            } else {
              // Otherwise, update or add the property in the updated state
              updatedFormData[name] = value;
            }    
          
            return updatedFormData;
          });
        };
  return (
    <div>
         <section>
    <div class="login-box">
        <form action="">
            <h2>Login</h2>
            <div class="input-box">
              
                <SmartInput key="username" label="User Name"
            value={formData?.userName||""}
            onChange={(value) => handleInputChange("userName", value)} 
            inputType="BORDER_LESS"                    
          />
               
            </div>
            <div class="input-box">
                <span class="icon">
                  
                </span>
                <SmartInput key="password" label="Password"
            value={formData?.password||""}
            onChange={(value) => handleInputChange("password", value)} 
            inputType="BORDER_LESS"                    
          />
            </div>
            <div class="remember-forget">
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forget Password</a>
            </div>
            <button  className ="login-button"type="submit">Login</button>
         
        </form>
    </div>
    </section>
    </div>
  )
}

export default SmartDriveLogin