import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './App.css';
import { markdown } from './markdown';

const App = () => {
  return (
    <div className="App">
      step-by-step
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default App;
