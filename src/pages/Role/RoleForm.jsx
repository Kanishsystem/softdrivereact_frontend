import React, { useState } from 'react'

import {
  SmartSoftCheckRadioSwitch,
  SmartSoftButton,
  SmartSoftInput,
  SmartSoftSelect,
} from "soft_digi";
import { useSiteContext } from "../../contexts/SiteProvider";
import ROLE_API_URLS from "../../services/ApiUrls/UsersUrls";
import { post } from "../../services/smartApiService";
import { showNotification } from "../../services/notifyService";


const RoleForm = (loadTableData) => {

  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
  const { setLoading,closeModal } = useSiteContext();
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
      ROLE_API_URLS.insert,
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

  const numericValidations = [
    {
      type: "required",
      msg: "Please enter valid name"
    },
   
  ];

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
 

  const ActionBUttons = () => {
    return (
      <div className="column is-12 has-text-right">
        <SmartSoftButton key="back" label="Go Back" leftIcon="fa-arrow-left" classList={["smart-cancel-button"]} onClick={closeModal}/>
        <SmartSoftButton key="save" label="Save" leftIcon="fa-save" classList={["smart-action-button"]} onClick={handleSubmit}/>       
      </div>
    );
  };

  return (
    <div>
    <div className='container'>
          <div className='columns is-multiline'>
            <div className='column is-12'>
              <SmartSoftInput
              label='Role Name' 
              placeHolder='Enter Your Name'
              errorEnable={formSubmit}
              value={formData?.role_name||""}
              leftIcon="fa-user"
            
              inputProps={{ isFocussed: true }}   
              onChange={(value) => handleInputChange("role_name", value)}
              />
            </div>

            <div className='column is-12'>
          <SmartSoftSelect
          label='Select Employee' 
          options={options}
          errorEnable={formSubmit}
          value={formData?.users||""}
         
          inputProps={{ isFocussed: true }}  
          onChange={(value) => handleInputChange("users", value)}
          />
        </div>
       </div>
      </div>
   
      <hr/>
      {ActionBUttons()}
      
    </div>
  
  )
}

export default RoleForm