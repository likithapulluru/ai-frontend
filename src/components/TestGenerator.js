// src/components/TestGenerator.js
import React, { useState } from "react";

const TestGenerator = () => {
  const [scenario, setScenario] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const handleGenerate = async () => {
    if (!scenario.trim()) return;
const BASE_URL = process.env.REACT_APP_API_BASE_URL || window.location.origin;
    const response = await fetch(`${BASE_URL}/api/ai/generate-test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(scenario),
    });

    const data = await response.text();
    setGeneratedCode(data);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>🧪 Generate Selenium Test Case</h2>
      <textarea
        placeholder="Describe your test scenario..."
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        style={styles.textarea}
      />
      <button onClick={handleGenerate} style={styles.button}>Generate</button>
      {generatedCode && (
        <pre style={styles.output}><code>{generatedCode}</code></pre>
      )}
    </div>
  );
};

const styles = {
  card: {
    padding: "20px",
    maxWidth: "700px",
    margin: "20px auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    background: "#fefefe",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  title: {
    marginBottom: "10px",
    color: "#333"
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "10px"
  },
  button: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  output: {
    whiteSpace: "pre-wrap",
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "6px",
    marginTop: "15px",
    fontSize: "14px"
  }
};

export default TestGenerator;
