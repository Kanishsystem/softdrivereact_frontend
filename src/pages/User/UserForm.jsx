import React, { useState,useEffect } from "react";
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
import ROLE_API_URLS from "../../services/ApiUrls/RoleUrls";
import { get } from "../../services/smartApiService";

const UserForm = ({ loadTableData,dataIn }) => {
  const [formData, setFormData] = useState(dataIn ? dataIn : {});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
  const { setLoading, closeModal } = useSiteContext();
  const [roles, setRoles] = useState([]);
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
    let url = USER_API_URLS.insert;
    if(formData.ID!==undefined){
      formData["id"] = formData.ID;
      url = USER_API_URLS.update;
    }

    const subscription = post(
      url,
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
      msg: "Please enter valid name",
    },
   
  ];

  const options = [
    { value: "5", label: "Active" },
    { value: "10", label: "In-Active" },
    { value: "15", label: "Locked" },
  ];

  const ActionBUttons = () => {
    return (
      <div className="column is-12 has-text-right">
        <SmartSoftButton
          key="back"
          label="Go Back"
          leftIcon="fa-arrow-left"
          classList={["smart-cancel-button"]}
          onClick={closeModal}
        />
        <SmartSoftButton
          key="save"
          label="Save"
          leftIcon="fa-save"
          classList={["smart-action-button"]}
          onClick={handleSubmit}
        />
      </div>
    );
  };

  const loadRoleSelectOptions=()=>{    
      setLoading(true, "Please Wait....");
      const handleError = (errorMessage) => {       
        setLoading(false);
      };
      const subscription = get(ROLE_API_URLS.get_all_select, handleError).subscribe(
        (response) => {
          setRoles(response.data);
          setLoading(false);
        }
      );
      return () => {
        subscription.unsubscribe();
      };
  };
  

  
  useEffect(() => {
    loadRoleSelectOptions();
  }, []);

  return (
    <div className="columns is-multiline">
      <div className="column is-8">
        <div className="columns is-multiline">
          <div className="column is-6">
            <SmartSoftInput
              key="text-1"
              label="Employee ID"
              placeHolder="IC Number"
              value={formData?.euserid || ""}
              onChange={(value) => handleInputChange("euserid", value)}
              leftIcon="fa-solid fa-hashtag"
              validations={numericValidations}
              inputProps={{ isFocussed: true }}
              errorEnable={formSubmit}
            />
          </div>

          <div className="column is-6">
            <SmartSoftInput
              key="text-2"
              className="smart-ii"
              label="Name"
              placeHolder="Enter Your Name"
              value={formData?.ename || ""}
              onChange={(value) => handleInputChange("ename", value)}
              leftIcon="fa-user"
              validations={numericValidations}
              inputProps={{ isFocussed: true }}
              errorEnable={formSubmit}
            />
          </div>
          <div className="column is-6">
            <SmartSoftInput
              key="text-3"
              label="Mobile Number"
              placeHolder="Mobile Number"
              value={formData?.mobile_number || ""}
              onChange={(value) => handleInputChange("mobile_number", value)}
              leftIcon="fa-solid fa-phone"
              validations={numericValidations}
              inputProps={{ isFocussed: true }}
              errorEnable={formSubmit}
            />
          </div>
          <div className="column is-6">
            <SmartSoftInput
              key="text-3"
              label="Intercom Number"
              placeHolder="Intercom  Number"
              value={formData?.intercome_number || ""}
              onChange={(value) => handleInputChange("intercome_number", value)}
              leftIcon="fa-solid fa-phone"
              validations={numericValidations}
              inputProps={{ isFocussed: true }}
              errorEnable={formSubmit}
            />
          </div>
          <div className="column is-6">
            <SmartSoftInput
              key="text-2"
              label="Email"
              placeHolder="Email"
              value={formData?.email_id || ""}
              onChange={(value) => handleInputChange("email_id", value)}
              leftIcon="fa-solid fa-envelope"
              validations={numericValidations}
              inputProps={{ isFocussed: true }}
              errorEnable={formSubmit}
            />
          </div>
        </div>
      </div>

      <div className="column is-4">Image Upload</div>

      <div className="column is-12">
        <SmartSoftSelect
          label="Select Role"
          placeHolder="Please Select"
          errorEnable={formSubmit}
          options={roles}
          isMulti={true}
          onChange={(value) => handleInputChange("role", value)}
        />
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
      <hr />
      {ActionBUttons()}
    </div>
  );
};

export default UserForm;
