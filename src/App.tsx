import React from 'react';
import './App.css';
import Display from './components/Display/Display';
import InputKeys from './components/InputKeys/InputKeys';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';

function App() {
  return (
    <div id='app'>
      <div id='header'>
        <div id='logo'>calc</div>
        <ThemeSelector />
      </div>
      <Display />
      <InputKeys />
    </div>
  );
}

export default App;