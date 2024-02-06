import { ClearTask } from "./components/ClearTask";
import { TasksList } from "./components/TasksList";
import { Filters } from "./components/Filters";
import { AddTask } from "./components/AddTask";
import { Sort } from "./components/Sort";

function App() {
  return (
    <div id="main-container" className="card">
      <div className="card2">
        <div className="d-flex justify-content-between mb-3">
          <Sort />
          <AddTask />
        </div>
        <TasksList />
        <Filters />
        <ClearTask />
      </div>
    </div>
  );
}

export default App;
