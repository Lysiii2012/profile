import React, { useRef } from "react";
import styles from './styles.module.css';
import ava from '../../../media/avatar.svg'

const AvatarUploader = ({ avatar, isEditing, onAvatarChange }) => {
  const fileInputRef = useRef();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => onAvatarChange(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.avatar_container} onClick={() => isEditing && fileInputRef.current.click()}>
      {avatar ? (
        <img src={avatar} alt="Avatar" className={styles.avatar_preview} />
      ) : (
        <div className={styles.avatar_placeholder}>
          <img src={ava} alt="photo" className={styles.camera_icon}/>
        </div>
      )}
      {isEditing && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleAvatarChange}
        />
      )}
    </div>
  );
};

export default AvatarUploader;
 
