import { AddTaskModal } from "./AddTaskModal";
import { ADD_TASK_MODAL_ID } from "../constants/index";

const AddTask = () => {
  return (
    <>
      <button
        className="btn btn-dark"
        type="button"
        id="task-input"
        data-bs-toggle="modal"
        data-bs-target={`#${ADD_TASK_MODAL_ID}`}
      >
        Add Task
      </button>

      <AddTaskModal />
    </>
  );
};

export { AddTask };
