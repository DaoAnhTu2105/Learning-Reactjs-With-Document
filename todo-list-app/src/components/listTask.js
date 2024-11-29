import { useState } from "react";
export default function ListTask({ task, dispatch }) {
  const [editId, setEditId] = useState(null);
  const [changeTask, setChangeTask] = useState("");
  const [taskStatus, setTaskStatus] = useState(null);

  const handleSave = (item) => {
    let confirmUpdate = window.confirm("Do you want to update this task ?");
    if (confirmUpdate === true) {
      dispatch({
        type: "update",
        taskName: changeTask,
        id: item.id,
        status: taskStatus,
      });
    }
    setEditId(null);
  };
  return (
    <>
      {task.length === 0 ? (
        <h1 className="list-task__title">
          No tasks available, please add new task!
        </h1>
      ) : (
        <div>
          <ul>
            {task.map((item) => {
              return (
                <li key={item.id} className="list-task__item">
                  <input
                    type="checkbox"
                    name="status"
                    id="status"
                    value={taskStatus}
                    className="item-checkbox"
                    onChange={(e) => {
                      console.log(e.target.checked);
                      setTaskStatus(e.target.checked);
                    }}
                    disabled={editId === null}
                  />
                  {editId === item.id ? (
                    <input
                      type="text"
                      name="edit"
                      value={changeTask}
                      className="item-input"
                      onChange={(e) => {
                        setChangeTask(e.target.value);
                      }}
                    />
                  ) : (
                    <h2 style={{ fontSize: "24px", padding: "0 15px" }}>
                      {item.taskName}
                    </h2>
                  )}
                  <button
                    className="update-task"
                    onClick={() => {
                      if (editId === item.id) {
                        handleSave(item);
                      } else {
                        setEditId(item.id);
                        setChangeTask(item.taskName);
                        setTaskStatus(item.status);
                      }
                    }}
                  >
                    {editId === item.id ? "Save" : "Edit"}
                  </button>
                  <button className="delete-task">Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
