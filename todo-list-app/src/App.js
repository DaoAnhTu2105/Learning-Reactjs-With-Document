import "./App.css";
import "./reset.css";
import AddTask from "./components/addTask";
import { useReducer } from "react";
import TaskReducer, { initialTask } from "./components/taskReducer";
import ListTask from "./components/listTask";

function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialTask);

  console.log("state: ", state);
  return (
    <>
      <section className="main-container">
        <div>
          <h1 className="title">List tasks today</h1>
          <AddTask dispatch={dispatch} />
          <ListTask task={state} dispatch={dispatch} />
        </div>
      </section>
    </>
  );
}

export default App;
