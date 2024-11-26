export const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  },
};

export function messengerReducer(state, action) {
  console.log("State in messengerReducer: ", state);
  console.log("Action in messengerReducer: ", action);
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    case "clear_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
