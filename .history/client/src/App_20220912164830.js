import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("http://localhost:4000");

function App() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage('')
  };

  useEffect(() => {
    socket.on("message", (message) => console.log(message));

    return () => {
      socket.off("message", (message) => console.log(message));
    };
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setMessage(e.target.value)}
        value={message}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
