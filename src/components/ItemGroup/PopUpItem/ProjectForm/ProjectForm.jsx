import React from "react";
import styles from '../style.module.css';

const ProjectForm = ({ projectName, setProjectName, projectDetails, setProjectDetails, image, setImage }) => {
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Сохраняем изображение в виде Base64
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input 
                type="file"
                accept="image/*" 
                onChange={handleImageChange}
            />
            <input
                type="text"
                placeholder="Project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Project details"
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
            />
            {image && (
                <div className={styles.image_pop_up}>
                    <img src={image} alt="Project preview" className={styles.preview} />
                </div>
            )}
        </div>
    );
};

export default ProjectForm;
