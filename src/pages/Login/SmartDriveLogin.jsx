import React, { useState } from 'react'
//import SmartInput from "../../components/core/forms/SmartInput";
//import SmartButton from "../../components/core/forms/SmartButton";
import { SmartSoftInput,SmartSoftButton } from 'soft_digi';
import './Login.css'; 
import Login from '.';

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

        const handleFormSubmit=()=>{
            setFormSubmit(true);
            console.log(formData)
           
          }
    

        const userNameValidations = [
            {
              type: "required", 
              msg: "User Name is Required"
            },
           
          ];
          const passwordValidations = [
            {
              type: "required",
              msg: " Password is Required"
            },
          
          ];
  return (
    <div>
         <section>
    <div className="login-box">
        <form action="">
            <h2>Login</h2>
            <div className="input-box">
              
                <SmartSoftInput key="username" label="User Name"
            value={formData?.userName||""}
            onChange={(value) => handleInputChange("userName", value)} 
            inputType="BORDER_LESS"     
            validations={userNameValidations}  
            errorEnable={true}             
          />
               
            </div>
            <div className="input-box">
               
                <SmartSoftInput key="password" label="Password"
            value={formData?.password||""}
            onChange={(value) => handleInputChange("password", value)} 
            inputType="BORDER_LESS"    
            validations={passwordValidations}  
            type={"password"}              
          />
            </div>
            <div className="remember-forget">
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forget Password</a>
            </div>
           

            <SmartSoftButton label="Login" className="login-button" classList={["login-button"]}
            onClick={()=>handleFormSubmit()}
          
          />
         
        </form>
    </div>
    </section>
    </div>
  )
}

export default SmartDriveLogin