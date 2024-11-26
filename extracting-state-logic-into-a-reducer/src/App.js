import Chat from "./Chat";
import ContactList from "./ContactList";
import { useReducer } from "react";
import { initialState, messengerReducer } from "./messengerReducer";
import "./App.css";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

function App() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];
  console.log("State: ", state);
  const contact = contacts.find((item) => item.id === state.selectedId);
  return (
    <>
      <div className="main-container">
        <ContactList
          contacts={contacts}
          selectedId={state.selectedId}
          dispatch={dispatch}
        />
        <Chat
          key={contact.id}
          message={message}
          contact={contact}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}

export default App;
