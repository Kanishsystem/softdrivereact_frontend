import React, { useState } from "react";
import {
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
    setLoading(true, 'Logging in Please Wait....');
    const subscription = post(USER_API_URLS.insert, formData,handleError).subscribe((response) => {
      console.log("response form ", response.data);
      closeModal();
     // setUser(response.data);
      setLoading(false);      
    });
    return () => {
      subscription.unsubscribe();
    };
  };

  const handleLogin = () => {
    // let data = { username: 'kminchelle', password: '0lelplR' };
     setLoading(true, 'Logging in Please Wait....');
     const subscription = post(USER_API_URLS.insert, formData).subscribe((response) => {
      //  setUser(response.data);
       setLoading(false);
      //  startSessionAct();
      //  navigate('/site/all-files');
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
    { value: "active", label: "Active" },
    { value: "inactive", label: "In-Active" },
    { value: "locked", label: "Locked" },
  ];

  const MyFooterContent = () => {
    return (
      <div className="is-flex is-justify-content-end ">
        <button className="button is-success is-small">Go back</button>
        <button className="button  is-link is-small"  onClick={()=>handleLogin()}>
          Submit
        </button>
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
            value={formData?.input_four||""}
            onChange={(value) => handleInputChange("input_four", value)} 
            leftIcon="fa-user"
            validations={ numericValidations}
            inputProps={{ isFocussed: true }}   
            errorEnable={formSubmit} />
          </div>

          <div className="column is-6">
            <SmartSoftInput key="text-2"
              className="smart-ii"
              label="Name"
              placeHolder="Enter Your Name"
              value={formData?.input_four||""}
              onChange={(value) => handleInputChange("input_four", value)} 
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
             value={formData?.input_four||""}
             onChange={(value) => handleInputChange("input_four", value)} 
             leftIcon="fa-user"
             validations={ numericValidations}
             inputProps={{ isFocussed: true }}   
              errorEnable={formSubmit} />
          </div>
          <div className="column is-6">
            <SmartSoftInput key="text-2"
            label="Email" 
            placeHolder="Email" 
            value={formData?.input_four||""}
            onChange={(value) => handleInputChange("input_four", value)} 
            leftIcon="fa-user"
            validations={ numericValidations}
            inputProps={{ isFocussed: true }} 
            errorEnable={formSubmit} />
          </div>
        </div>
      </div>
      <div className="column is-4">Image Upload</div>
      <div className="column is-8">
        <SmartSoftSelect label="Select Role" placeHolder="Please Select" errorEnable={formSubmit} />
      </div>

      <div className="column is-8">
        <SmartSoftCheckRadioSwitch
          isMulti={true}
          options={options}
          label="Select Employee Status"
          type={"radio"}
          name="radioone"
          errorEnable={formSubmit}
          value={formData?.radioone || ""}
          onChange={(value) => handleInputChange("radioone", value)}
        />
      </div>
      {MyFooterContent()}
    </div>
  );
};

export default UserForm;
