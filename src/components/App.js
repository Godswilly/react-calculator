import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div>
      <h1>My calculator</h1>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
