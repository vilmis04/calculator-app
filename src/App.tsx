import React, { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import InputKeys from './components/InputKeys/InputKeys';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import { darkMode, lightMode, contrastMode } from './colorSchemes';

function App() {

  const [ colorScheme, setColorScheme ] = useState(darkMode);
  const [ themeNumber, setThemeNumber ] = useState('1');
  const [ output, setOutput ] = useState('0');
  const [ firstMember, setFirstMember ] = useState(NaN);
  const [ secondMember, setSecondMember ] = useState(NaN);
  const [ operand, setOperand ] = useState('');
  const [ lastKey, setLastKey ] = useState('');
  const [ specialPressed, setSpecialPressed ] = useState(false);
  const [ negateNext, setNegateNext ] = useState(false);
  document.querySelector('body')!.style.background = colorScheme.mainBackground;

  // theme changer

  function changeTheme(target: any): void {
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

  // calculator logic

  function handleClick (target: any): void {

    const operands = ['+','-','/','x'];
    const specialChars = ['DEL', 'RESET', '=', '.'];

    const key = target.dataset.number;

    

    if (specialChars.includes(key)) {
      handleSpecialChars(key);
    } else if (operands.includes(key)) {
      handleOperation(key);
    } else if ((output.startsWith('0') && !output.startsWith('0.')) 
      || (specialPressed && !negateNext)) {
      setOutput(key);
      setSpecialPressed(false);
    } else {
      setOutput(output.concat(key));
      setNegateNext(false);
    }

    setLastKey(key);



  //  functions

  function handleSpecialChars(key: string): void {

    const specialOperations: {[key: string]: ()=>void} = {
      'RESET': () => resetApp(),
      'DEL': () => setOutput('0'),
      '.': () => addPoint(output),
      '=': () => handleEqual()
      }

      const action = specialOperations[key];
      action();
    }
  }

  function resetApp(): void {
    setOutput('0');
    setFirstMember(NaN);
    setSecondMember(NaN);
    setOperand('');
  }

  function addPoint(output: string) {
    if (!output.includes('.')) setOutput(output.concat('.'));
  }

  function handleOperation(key: string) {
    if (specialPressed && key === '-') {
      setOutput('-');
      setNegateNext(true);
      return;
    } else if (specialPressed && negateNext) {
      setOutput('');
      setNegateNext(false);
      setOperand(key);
      return;

    } else if (specialPressed) {
      setOperand(key);
      return;
    }

    setSpecialPressed(true);
    setOperand(key);

    if (isNaN(firstMember)) {
      setFirstMember(parseFloat(output));
    } else {
      const result = calculate(firstMember, parseFloat(output));
      setFirstMember(result);
      setSecondMember(parseFloat(output));
      setOutput(result.toString());
    }
  }

  function calculate(first:number, second:number):number {
    const operations: {[key: string]:(a:number, b:number) => number} = {
      '+': (a,b) => a+b,
      '-': (a,b) => a-b,
      '/': (a,b) => a/b,
      'x': (a,b) => a*b
    }

    const action = operations[operand];
    return action(first, second);

  }

  function handleEqual ():void {
    setSpecialPressed(true);
    if (lastKey === '=') {
      const result = calculate(firstMember, secondMember);
      setFirstMember(result);
      setOutput(result.toString());
      return;
      }

      const result = calculate(firstMember, parseFloat(output));
      setOutput(result.toString());
      setFirstMember(result);
      setSecondMember(parseFloat(output));
      setOutput(result.toString());
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
      <InputKeys colors={colorScheme} theme={themeNumber} handleClick={handleClick} />
    </div>
  );
}

export default App;