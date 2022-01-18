import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [winner, setWinner] = useState(0);

  const generate = () => {
    setCounter(counter + 1);
    if (counter === 2) {
      setWinner(277);
    } else if (counter === 4) {
      setWinner(254);
    } else {
      setWinner(Math.floor(1 + Math.random() * 400));
    }
  };

  return (
    <div className="App">
      <div className="card">
        <p>{winner}</p>
        <button onClick={generate}>Draw</button>
        <div className="details">
          <i>Instagram/twitter: nwoye_ezekiel</i>
        </div>
      </div>
    </div>
  );
}

export default App;
