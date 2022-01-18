import { useState } from "react";
import "./App.css";

function App() {
  const [winner, setWinner] = useState(100);
  // const winners = [];
  const generate = () => {
    setWinner(Math.floor(1 + Math.random() * (300 + 1 - 1)));
  };
  return (
    <div className="App">
      <div className="card">
        <p>{winner}</p>
        <button onClick={generate}>Draw</button>
      </div>
    </div>
  );
}

export default App;
