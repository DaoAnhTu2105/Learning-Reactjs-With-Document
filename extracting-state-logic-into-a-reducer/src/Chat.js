import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  return (
    <section>
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
        className="chat-container"
      ></textarea>
      <br />
      <div style={{ marginTop: 10 }}>
        <button
          onClick={() => {
            alert(`Sending "${message}" to ${contact.email}`);
            dispatch({
              type: "edited_message",
              message: "",
            });
          }}
          className="btn-send"
        >
          Send to {contact.email}
        </button>
        &nbsp; &nbsp;
        <button
          onClick={() => {
            dispatch({
              type: "clear_message",
              message: "",
            });
          }}
          className="btn-send"
        >
          Clear message
        </button>
      </div>
    </section>
  );
}
