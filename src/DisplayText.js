import { useState, useEffect } from 'react';

export default function TextDisplay() {
  const [textData, setTextData] = useState(''); 

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3050'); // Connect to server

    socket.onmessage = (event) => {
        setTextData(textData => textData + event.data); // Append new chunks
    };

    return () => socket.close();  // Cleanup on unmount
  }, []);

  return (
    <div>
        <h2>Display text component</h2>
        <pre>{textData}</pre> // Use pre to preserve formatting, adjust as needed
    </div>
  );
}
