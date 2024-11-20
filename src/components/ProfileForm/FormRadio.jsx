import React from "react";
import styles from './styles.module.css';
const FormRadio = ({ label, name, options, value, onChange, disabled }) => {
  return (
    <div>
      <h4>{label}:</h4>
      <div className={styles.radio_group}>
        {options.map((option) => (
            <label key={option}>
            <input
                type="radio"
                name={name}
                value={option}
                checked={value === option}
                onChange={onChange}
                disabled={disabled}
            />
            {option}
            </label>
        ))}
      </div>
    </div>
  );
};

export default FormRadio;
