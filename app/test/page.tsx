"use client";
import { useEffect, useState } from "react";

export default function TestPage() {
  const [serverStatus, setServerStatus] = useState("Checking...");

  useEffect(() => {
    const testServer = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/test');
        if (response.ok) {
          const data = await response.json();
          setServerStatus(`✅ Server is running: ${data.message}`);
        } else {
          setServerStatus(`❌ Server responded with status: ${response.status}`);
        }
      } catch (error) {
        setServerStatus(`❌ Cannot connect to server: ${error.message}`);
      }
    };

    testServer();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-gray-100 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Server Connection Test</h1>
        <p className="text-lg">{serverStatus}</p>
        <div className="mt-4 text-sm text-gray-600">
          <p>Expected server URL: http://localhost:5000</p>
          <p>Make sure to run: <code>cd Server && npm run dev</code></p>
        </div>
      </div>
    </div>
  );
}