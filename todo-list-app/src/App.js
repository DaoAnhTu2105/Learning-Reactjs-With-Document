import "./App.css";
import "./reset.css";
import AddTask from "./components/addTask";
import ListTask from "./components/listTask";
import { TaskProvider } from "./components/taskContext";

function App() {
  return (
    <>
      <TaskProvider>
        <section className="main-container">
          <div>
            <h1 className="title">List tasks today</h1>
            <AddTask />
            <ListTask />
          </div>
        </section>
      </TaskProvider>
    </>
  );
}

export default App;
