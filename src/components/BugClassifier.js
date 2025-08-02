// src/components/BugClassifier.js
import React, { useState } from "react";

const BugClassifier = () => {
  const [bugReport, setBugReport] = useState("");
  const [classification, setClassification] = useState("");

  const handleClassify = async () => {
    if (!bugReport.trim()) return;
    const BASE_URL = process.env.REACT_APP_API_BASE_URL || window.location.origin;
    const response = await fetch(`${BASE_URL}/api/ai/classify-bug`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bugReport),
    });

    const data = await response.text();
    setClassification(data);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>🐞 Bug Classifier</h2>
      <textarea
        placeholder="Paste your bug report here..."
        value={bugReport}
        onChange={(e) => setBugReport(e.target.value)}
        style={styles.textarea}
      />
      <button onClick={handleClassify} style={styles.button}>Classify</button>
      {classification && (
        <div style={styles.output}><strong>Classification:</strong><br />{classification}</div>
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
    background: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  output: {
    marginTop: "15px",
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "6px",
    fontSize: "14px"
  }
};

export default BugClassifier;
