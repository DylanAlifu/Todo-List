import { useContext, useState } from "react";
import { TasksContext } from "../context/TaskContext";
import { PriorityMapping } from "../constants";

const TaskItem = ({ task, setTaskToBeDeleted }) => {
  const { toggleTask, updateTaskLabel } = useContext(TasksContext);
  const { label, taskId, isCompleted, priority } = task;
  const [editMode, setEditMode] = useState(false);
  const [editedLabel, setEditedLabel] = useState(label);

  const handleChange = () => {
    toggleTask(taskId);
  };

  const switchToEditMode = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditedLabel(label);
    setEditMode(false);
  };

  const handleEdit = (e) => {
    setEditedLabel(e.target.value);
  };

  const handleSaveEdit = () => {
    updateTaskLabel(taskId, editedLabel);
    setEditMode(false);
  };

  const handleEditInputKeydown = (e) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    }
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div id="label-container">
          {editMode ? (
            <input
              id="task-label-input"
              type="text"
              className="simple-input"
              value={editedLabel}
              onChange={handleEdit}
              onKeyDown={handleEditInputKeydown}
            />
          ) : (
            <>
              <div className="container">
              <input
                className="form-check-input me-1"
                type="checkbox"
                id={taskId}
                checked={isCompleted}
                onChange={handleChange}
              ></input>
                <label htmlFor={taskId} className="check">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
              </div>
              
              <label
                className={`form-check-label ${isCompleted ? "completed" : ""}`}
                htmlFor={taskId}
              >
                {label}
              </label>
            </>
          )}
        </div>
        <div id="actions-container" className="d-flex column-gap-1">
          {editMode ? (
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-sm btn-dark"
                style={{ "--bs-btn-padding-y": ".1rem" }}
                onClick={handleSaveEdit}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-sm btn-light"
                style={{ "--bs-btn-padding-y": ".1rem" }}
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div className="priority-icon">
                <i
                  className={`fa-solid ${PriorityMapping[priority].iconClass}`}
                ></i>
              </div>
              <div
                id="edit-button-container"
                className="pointer"
                onClick={switchToEditMode}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
              <div
                id="delete-button-container"
                className="pointer"
                data-bs-toggle="modal"
                data-bs-target="#taskListDeleteTask"
                onClick={() => {
                  setTaskToBeDeleted(task);
                  console.log(
                    "Clicked on trash can, and passing up data",
                    task
                  );
                }}
              >
                <i className="fa-solid fa-trash-can" aria-hidden="true"></i>
              </div>
            </>
          )}
        </div>
      </li>
    </>
  );
};

export { TaskItem };
