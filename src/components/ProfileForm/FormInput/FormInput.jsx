import React from "react";
import styles from './styles.module.css'


const ErrorFormInput = ({ error, ...props }) => (
  <div className={styles.input_container}> 
      <input {...props} />
      {error && <p className="error">{error}</p>}
    </div>
  );
  

  export default ErrorFormInput