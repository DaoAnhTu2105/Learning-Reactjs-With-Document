import { useContext, useEffect, useRef, useState } from "react";
import { TaskDispatchContext } from "./taskContext";

export let nextId = 0;

export default function AddTask() {
  const focusRef = useRef(null);
  const [task, setTask] = useState(null);
  const dispatch = useContext(TaskDispatchContext);

  useEffect(() => {
    focusRef.current.focus();
  }, []);
  const handleAddTask = () => {
    if (task) {
      dispatch({ type: "add", taskName: task, status: false, id: nextId++ });
      setTask("");
    } else {
      alert("Task must not empty!!!");
    }
  };
  const handleInputTask = (e) => {
    setTask(e.target.value);
  };
  return (
    <>
      <div className="component__add-task">
        <input
          type="text"
          className="input-task"
          ref={focusRef}
          value={task}
          onChange={handleInputTask}
        />
        &nbsp; &nbsp;
        <button className="btn-submit" onClick={handleAddTask}>
          Add new task
        </button>
      </div>
    </>
  );
}
