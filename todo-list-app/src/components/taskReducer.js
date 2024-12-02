export const initialTask = [];

export default function TaskReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          id: action.id,
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
      const removeItem = state.filter((item) => item.id !== action.id);
      return removeItem;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
