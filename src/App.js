import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import remarkGfm from 'remark-gfm';
import danger from './step-by-step.md';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(danger)
      .then((response) => response.text())
      .then((text) => {
        setText(text);
      });
  }, []);

  return (
    <div className="App">
      <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default App;
