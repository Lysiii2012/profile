import React, { useState } from "react";
import styles from "./style.module.css";
import ProjectForm from "./ProjectForm/ProjectForm";
import TaskForm from "./TaskForm/TaskForm";

const PopUpItem = ({ type, onClose, onCreate }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [image, setImage] = useState("");

  const handleCreate = () => {
    if (
      (type === "project" && projectName.trim() && projectDetails.trim()) ||
      (type === "task" && taskName.trim() && taskDetails.trim())
    ) {
      const newItem = {
        id: Date.now(),
        name: type === "project" ? projectName : taskName,
        details: type === "project" ? projectDetails : taskDetails,
        type,
        image: type === "project" ? image : null,
      };

      onCreate(newItem);

      setProjectName("");
      setProjectDetails("");
      setTaskName("");
      setTaskDetails("");
      setImage("");
      onClose();
    }
  };

  return (
    <div className={styles.pop_up_container}>
      <div className={styles.pop_up_content}>
        <button onClick={onClose} className={styles.close_button}>
          X
        </button>
        <h4>{type === "project" ? "Create Project" : "Create Task"}</h4>
        {type === "project" ? (
          <ProjectForm
            projectName={projectName}
            setProjectName={setProjectName}
            projectDetails={projectDetails}
            setProjectDetails={setProjectDetails}
            image={image}
            setImage={setImage}
          />
        ) : (
          <TaskForm
            taskName={taskName}
            setTaskName={setTaskName}
            taskDetails={taskDetails}
            setTaskDetails={setTaskDetails}
          />
        )}
        <button onClick={handleCreate} className={styles.create_button}>
          Save
        </button>
      </div>
    </div>
  );
};

export default PopUpItem;
