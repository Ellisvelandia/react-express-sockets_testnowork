import "./App.css";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  return(
  <div className="App">Hello world</div>;

  )
  
}

export default App;
