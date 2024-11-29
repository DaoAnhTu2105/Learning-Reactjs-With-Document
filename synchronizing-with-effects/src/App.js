import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

function App() {
  console.log("mount");
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    // return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}

export default App;
