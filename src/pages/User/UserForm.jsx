import React, { useState } from "react";
import {
  SmartSoftButton,
  SmartSoftCheckRadioSwitch,
  SmartSoftInput,
  SmartSoftSelect,
} from "soft_digi";
import { useSiteContext } from "../../contexts/SiteProvider";
import USER_API_URLS from "../../services/ApiUrls/UsersUrls";
import { post } from "../../services/smartApiService";
import { showNotification } from "../../services/notifyService";

const UserForm = () => {
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
      showNotification("error",errorMessage);        
      setLoading(false);      
    };
    setLoading(true, 'Details Submitting Please Wait....');
    const subscription = post(USER_API_URLS.insert, formData,handleError).subscribe((response) => {
      //console.log("response form ", response.data);
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
    {
      type: "pattern",
      msg: "Please Enter Correct Numeric Value",
      pattern: '[0-9]+'
    }
  ];


  const options = [
    { value: "5", label: "Active" },
    { value: "10", label: "In-Active" },
    { value: "15", label: "Locked" },
  ];

  const ActionBUttons = () => {
    return (
      <div className="column is-12 has-text-right">
        <SmartSoftButton key="back" label="Go Back" leftIcon="fa-arrow-left" classList={["smart-cancel-button"]} onClick={closeModal}/>
        <SmartSoftButton key="save" label="Save" leftIcon="fa-save" classList={["smart-action-button"]} onClick={handleSubmit}/>       
      </div>
    );
  };

  return (
    <div className="columns is-multiline">
      <div className="column is-8">
        <div className="columns is-multiline">
          <div className="column is-6">
            <SmartSoftInput key="text-1"
            label="Employee ID" placeHolder="IC Number" 
            value={formData?.euserid||""}
            onChange={(value) => handleInputChange("euserid", value)} 
            leftIcon="fa-solid fa-hashtag"
            validations={ numericValidations}
            inputProps={{ isFocussed: true }}   
            errorEnable={formSubmit} />
          </div>

          <div className="column is-6">
            <SmartSoftInput key="text-2"
              className="smart-ii"
              label="Name"
              placeHolder="Enter Your Name"
              value={formData?.ename||""}
              onChange={(value) => handleInputChange("ename", value)} 
              leftIcon="fa-user"
              validations={ numericValidations}
              inputProps={{ isFocussed: true }}   
              errorEnable={formSubmit}
            />
          </div>
          <div className="column is-6">
            <SmartSoftInput key="text-3"
            label="Mobile Number"
             placeHolder="Mobile Number"
             value={formData?.profile_img||""}
             onChange={(value) => handleInputChange("profile_img", value)} 
             leftIcon="fa-solid fa-phone"
             validations={ numericValidations}
             inputProps={{ isFocussed: true }}   
              errorEnable={formSubmit} />
          </div>
          <div className="column is-6">
            <SmartSoftInput key="text-3"
            label="Intercom Number"
             placeHolder="Intercom  Number"
             value={formData?.intercome_number||""}
             onChange={(value) => handleInputChange("intercome_number", value)} 
             leftIcon="fa-solid fa-phone"
             validations={ numericValidations}
             inputProps={{ isFocussed: true }}   
              errorEnable={formSubmit} />
          </div>
          <div className="column is-6">
            <SmartSoftInput key="text-2"
            label="Email" 
            placeHolder="Email" 
            value={formData?.email_id||""}
            onChange={(value) => handleInputChange("email_id", value)} 
            leftIcon="fa-solid fa-envelope"
            validations={ numericValidations}
            inputProps={{ isFocussed: true }} 
            errorEnable={formSubmit} />
          </div>
        </div>
      </div>


      <div className="column is-4">Image Upload</div>


      <div className="column is-12">
        <SmartSoftSelect label="Select Role" placeHolder="Please Select"  errorEnable={formSubmit} />
      </div>
     
      <div className="column is-12">
        <SmartSoftCheckRadioSwitch
          classList={["smart-input-label-width-30"]}
          isMulti={true}
          options={options}
          label="Select Employee Status"
          type={"radio"}
          name="active_status"
          isHorizontal={true}          
          errorEnable={formSubmit}
          value={formData?.active_status || ""}
          onChange={(value) => handleInputChange("active_status", value)}
        />
      </div>
      <hr/>
      {ActionBUttons()}
    </div>
  );
};

export default UserForm;
