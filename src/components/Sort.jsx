import { useContext } from "react";
import { TasksContext } from "../context/TaskContext";

const Sort = () => {
  const { sortOrder, setSortOrder } = useContext(TasksContext);

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="d-flex align-items-center column-gap-1">
      <span className="sort">Sort by:</span>
      <select
        className="form-select sort-select"
        value={sortOrder}
        onChange={handleSortOrderChange}
      >
        <option value="default">Default</option>
        <option value="plh">Priority: Low - High</option>
        <option value="phl">Priority: High - Low</option>
      </select>
    </div>
  );
};

export { Sort };
