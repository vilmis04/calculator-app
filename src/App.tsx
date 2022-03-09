import React, { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import InputKeys from './components/InputKeys/InputKeys';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import { darkMode, lightMode, contrastMode } from './colorSchemes';

function App() {

  const [ colorScheme, setColorScheme ] = useState(darkMode);
  const [ themeNumber, setThemeNumber ] = useState('1');
  const [ output, setOutput ] = useState(0);
  document.querySelector('body')!.style.background = colorScheme.mainBackground;

  function changeTheme(target: any) {
    const selectedTheme = target.dataset.theme;
    let theme = undefined;
    switch (selectedTheme) {
      case '1':
        theme = darkMode;
        break;
      case '2':
        theme = lightMode;
        break;
      case '3':
        theme = contrastMode;
        break;
      default:
        theme = darkMode;
    }
    setColorScheme(theme);
    setThemeNumber(selectedTheme);
  }



  // styles

  const appStyle = {
    color: colorScheme.secondaryText
  }

  const logoStyle = {
    fontSize: '2rem'
  }

  return (
    <div id='app' style={appStyle}>
      <div id='header'>
        <div id='logo' style={logoStyle}>calc</div>
        <ThemeSelector colors={colorScheme} theme={themeNumber} changeTheme={changeTheme}/>
      </div>
      <Display output={output} color={colorScheme.screenBackground}/>
      <InputKeys colors={colorScheme} theme={themeNumber} />
    </div>
  );
}

export default App;