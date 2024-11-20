import React from "react";
import styles from "./styles.module.css";

const FormButtons = ({ isEditing, onSave, onCancel, enableEditing }) => {
    return (
      <div className={styles.form_btn_group}>
        {isEditing ? (
          <>
            <button type="submit" onClick={onSave}>Save</button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </>
        ) : (
          <button type="button" onClick={enableEditing}>
            Edit
          </button>
        )}
      </div>
    );
  };
  
  export default FormButtons;
  