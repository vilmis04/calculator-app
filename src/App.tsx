import React, { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import InputKeys from './components/InputKeys/InputKeys';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import { darkMode, lightMode, contrastMode } from './colorSchemes';

function App() {

  const [ colorScheme, setColorTheme ] = useState(darkMode);

  return (
    <div id='app'>
      <div id='header'>
        <div id='logo'>calc</div>
        <ThemeSelector theme={colorScheme} />
      </div>
      <Display />
      <InputKeys />
    </div>
  );
}

export default App;