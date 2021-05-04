import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (
    <div>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
