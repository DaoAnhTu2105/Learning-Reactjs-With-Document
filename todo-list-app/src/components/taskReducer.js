export const initialTask = [];
export let nextId = 0;

export default function TaskReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          id: nextId++,
          taskName: action.taskName,
          status: action.status,
        },
      ];
    }
    case "update": {
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            id: action.id,
            taskName: action.taskName,
            status: action.status,
          };
        } else {
          return item;
        }
      });
    }
    case "delete": {
      return {};
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
