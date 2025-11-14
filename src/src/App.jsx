import { useState } from "react";
import Transmit from "./Transmit";
import Receive from "./Receive";

export default function App() {
  const [tab, setTab] = useState("transmit");

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Audio Streaming App</h1>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setTab("transmit")}>Transmit</button>
        <button onClick={() => setTab("receive")} style={{ marginLeft: 10 }}>
          Receive
        </button>
      </div>

      {tab === "transmit" ? <Transmit /> : <Receive />}
    </div>
  );
}
