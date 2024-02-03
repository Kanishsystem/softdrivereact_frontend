import React, { useEffect, useState } from "react";
import SmartInput from "../../components/core/forms/SmartInput";
import {
  ALLOW_FLOAT,
  ALLOW_FLOAT_DYNAMIC,
  ALLOW_NUMERIC,
} from "../../services/PatternSerivce";
import SmartButton from "../../components/core/forms/SmartButton";
import { isEmptyObject } from "../../services/core/CommonService";
import {SmartSoftForm} from "soft_digi"

const SmartFormExample = () => {
  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
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
      if (value === null || value === "") {
        // If true, remove the property from the updated state
        delete updatedFormData[name];
      } else {
        // Otherwise, update or add the property in the updated state
        updatedFormData[name] = value;
      }

      return updatedFormData;
    });
  };

  const numericValidations = [
    {
      type: "required",
      msg: "Numeric Value is Required",
    },
    {
      type: "pattern",
      msg: "Please Enter Correct Numeric Value",
      pattern: "[0-9]+",
    },
  ];

  const handleFormSubmit = () => {
    console.log("formdata" , formData);
    setFormSubmit(true);
    console.log("form errors ", formErrors);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];


  const formElements = [
     {
      type:"TEXT_BOX",
      width:"3",
      name:"input_one",
      element:{
        label:"Enter Name",
        validations:numericValidations
      }
     },
     {
      type:"TEXT_BOX",
      width:"3",
      name:"input_two",
      element:{
        label:"Enter ID",
        validations:numericValidations
      }
     },
     {
      type:"SELECT_BOX",
      width:"3",
      name:"select_one",
      element:{
        label:"Select Role",
        options:options
      }
     }
  ]
   

  const inputWithIconValidation = () => {
    return (
      <div className="card">

        <SmartSoftForm formData={formData} 
        setFormData={handleInputChange} 
        elements={formElements}
         formSubmit={formSubmit}
         handleErrorChange={handleErrorChange} />

        <SmartButton
          label="submit"
          classList={["is-primary", "is-small", "is-inverted"]}
          onClick={() => handleFormSubmit()}
          disabled={!isEmptyObject(formErrors)}
        />
      </div>
    );
  };

  return <>{inputWithIconValidation()}</>;
};

export default SmartFormExample;
