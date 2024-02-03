import React, { useState } from 'react'
import { SmartSoftButton, SmartSoftInput } from 'soft_digi';
import { post } from "../../services/smartApiService";
import { showNotification } from "../../services/notifyService";
import { useSiteContext } from "../../contexts/SiteProvider";
import USER_API_URLS from "../../services/ApiUrls/UsersUrls";

const UserProfile = ({ loadTableData }) => {

  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
  const { setLoading, closeModal } = useSiteContext();
  //const [type, setType] = useState("password");

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setFormSubmit(true);
    const handleError = (errorMessage) => {
      showNotification("error", errorMessage);
      setLoading(false);
    };
    setLoading(true, "Details Submitting Please Wait....");
    const subscription = post(
      USER_API_URLS.insert,
      formData,
      handleError
    ).subscribe((response) => {
      //console.log("response form ", response.data);
      loadTableData();
      showNotification("success","Data Saved Successfully");
      closeModal();
      // setUser(response.data);
      setLoading(false);
    });
    return () => {
      subscription.unsubscribe();
    };
  };

  return (
    <>
    <div className='container card'>
      <div className='columns is-multiline'>
        <div className='column is-12'>
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
              errorEnable={formSubmit}
              value={formData?.ename || ""}
              onChange={(value) => handleInputChange("ename", value)}
             
               
              
               />
                 <SmartSoftInput 
                  key="text-2"
                  label='Mobile Number'
                  placeHolder='Your Mobile number'
                  leftIcon="fa-solid fa-phone"
                  errorEnable={formSubmit}
                  value={formData?.mobile_number || ""}
                  onChange={(value) => handleInputChange("mobile_number", value)}
                
           
            
            />
               </div>
          
        <div className='column is-4'>
          

            <SmartSoftInput 
                  key="text-3"
                  label='Email'
                  placeHolder='Your Email Address'
                  leftIcon="fa-solid fa-envelope"
                  errorEnable={formSubmit}
                  value={formData?.email_id || ""}
                  onChange={(value) => handleInputChange("email_id", value)}
                 
             
            />
             <SmartSoftInput
            key="text-4"
           label='Intercom Number'
           placeHolder='Intercom  Number'
           leftIcon="fa-solid fa-phone"
           errorEnable={formSubmit}
           value={formData?.intercome_number || ""}
           onChange={(value) => handleInputChange("intercome_number", value)}
          
           
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
                            errorEnable={formSubmit}
                            value={formData?.currentPassword || ""}
                            onChange={(value) => handleInputChange("currentPassword", value)}
                            
                        />
                      </div>
          
                      <div className='column is-4'>
                        <SmartSoftInput 
                            key="text-5"
                            placeHolder='New Password'
                            leftIcon="fa-eye"
                            errorEnable={formSubmit}
                            value={formData?.newPassword || ""}
                            onChange={(value) => handleInputChange("newPassword", value)}
                            
                        />
                      </div>

                
                       <div className='column is-4'>
                        <SmartSoftInput 
                             key="text-6"
                             placeHolder='Confirm Password'
                             errorEnable={formSubmit}
                             value={formData?.confirmPassword || ""}
                             onChange={(value) => handleInputChange("confirmPassword", value)}
                             
                        />
                        <div className='is-flex is-justify-content-end'>
                      <SmartSoftButton 
                        classList={["smart-action-button"]}
                        label='Save'
                        onClick={handleSubmit}
                        />
                        
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