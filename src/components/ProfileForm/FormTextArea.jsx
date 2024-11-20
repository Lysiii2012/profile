import React from "react";

const FormTextArea = ({ placeholder, name, value, onChange, disabled }) => {
  return (
    <div> 
        <textarea
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        ></textarea> 
    </div>
  );
};

export default FormTextArea;