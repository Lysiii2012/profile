import { useState, useEffect } from 'react';

const useProfileData = () => {
  const [formData, setFormData] = useState(() => { 
    const savedData = localStorage.getItem("profileData");
    return savedData ? JSON.parse(savedData) : {
      avatar: "",
      name: "",
      lastname: "",
      jobTitle: "",
      phone: "",
      email: "",
      address: "",
      pitch: "",
      visibility: "Private",
      scopes: [],
      interests: [],
      links: [],
    };
  });

  useEffect(() => { 
    localStorage.setItem("profileData", JSON.stringify(formData));
  }, [formData]);

  return {
    formData,
    setFormData
  };
};

export default useProfileData;
