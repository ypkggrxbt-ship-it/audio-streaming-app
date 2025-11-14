import { useState } from "react";

export default function Receive() {
  const [connected, setConnected] = useState(false);

  function connect() {
    setConnected(true);
    alert("Receiver feature placeholder – full WebRTC logic can be added.");
  }

  return (
    <div>
      <h2>Receive (Listen)</h2>
      <button onClick={connect}>Connect</button>

      {connected && <p>Connected ✔ (Placeholder)</p>}
    </div>
  );
}
