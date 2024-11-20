import React from "react";
// import styles from './style.module.css';

const TaskForm = ({ taskName, setTaskName, taskDetails, setTaskDetails }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task details"
        value={taskDetails}
        onChange={(e) => setTaskDetails(e.target.value)}
      />
    </div>
  );
};

export default TaskForm;
