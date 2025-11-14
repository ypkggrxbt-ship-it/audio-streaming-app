import { useState } from "react";

export default function Transmit() {
  const [stream, setStream] = useState(null);

  async function startBroadcast() {
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });

      setStream(audioStream);
      alert("Broadcasting started! (Receiver feature will connect here)");
    } catch (err) {
      alert("Microphone access blocked!");
    }
  }

  return (
    <div>
      <h2>Transmit (Broadcast)</h2>
      <button onClick={startBroadcast}>Start Broadcasting</button>

      {stream && <p>Microphone is ON ✔</p>}
    </div>
  );
}
