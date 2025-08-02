// src/App.js
import React from "react";
import TestGenerator from "./components/TestGenerator";
import BugClassifier from "./components/BugClassifier";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>🧠 AI-Powered Test Case Generator and Bug Classifier</h1>
      <TestGenerator />
      <BugClassifier />
    </div>
  );
}

export default App;
