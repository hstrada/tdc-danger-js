import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import danger from './step-by-step.md';
import './App.css';

const App = () => {
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
      step-by-step
      <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default App;
