import { createContext } from "react";
import { useReducer } from "react";
import TaskReducer, { initialTask } from "./taskReducer";

export const TasksContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(TaskReducer, initialTask);
  return (
    <TasksContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
