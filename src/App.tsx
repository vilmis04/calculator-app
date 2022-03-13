import React, { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import InputKeys from './components/InputKeys/InputKeys';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import { darkMode, lightMode, contrastMode } from './colorSchemes';
// import { parseInput, performAction } from './functions/functions';


function App() {

  const [ colorScheme, setColorScheme ] = useState(darkMode);
  const [ themeNumber, setThemeNumber ] = useState('1');
  const [ output, setOutput ] = useState('0');
  const [ firstMember, setFirstMember ] = useState(NaN);
  const [ secondMember, setSecondMember ] = useState(NaN);
  const [ operand, setOperand ] = useState('');
  const [ lastKey, setLastKey ] = useState('');
  // const [ result, setResult ] = useState(NaN);
  document.querySelector('body')!.style.background = colorScheme.mainBackground;

  // console.log('first: '+firstMember);
  // console.log('second: '+secondMember);
  // console.log('operand: '+operand);


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

  function handleClick (target: any): void {
    // if (output.length >= 17) return;
    // const numbers = ['1','2','3','4','5','6','7','8','9','0'];
    const operands = ['+','-','/','x'];
    const specialCases = ['DEL', 'RESET', '=', '.'];

    const key = target.dataset.number;
    // console.log(key);


    if (specialCases.includes(key)) {
      handleSpecialCase(key);
      // check if special case can be performed
      // treat '-' as negation of number or skip to handling as operand
      // perform special case
    } else if (operands.includes(key)) {
      setOperand(key);
      if (isNaN(firstMember)) {
        setFirstMember(parseInput(output));
        setOutput('0');
      } else {
        setOutput('0');
      }
      //save the current state of output to first member if it is free
      //if result is populated and operand is used, save the result as the first member
      //if the number is not the first one - perform the action and save in the result
    } else {
      if (output.startsWith('0') && !output.startsWith('0.')) {
        setOutput(key);
      } else {
        setOutput(output.concat(key));
      }
    }
    setLastKey(key);
  }

  // helper functions

  function handleSpecialCase(key: string): void {
    switch (key) {
      case 'DEL':
        setOutput('0');
        break;
      case 'RESET':
        setOutput('0');
        setFirstMember(NaN);
        setSecondMember(NaN);
        setOperand('');
        break;
      case '=':
        if (!isNaN(firstMember) && operand && lastKey === key) {
          const result = performAction(firstMember, operand, secondMember);
          setOutput(result.toString());
          if (typeof result === 'number') setFirstMember(result);

        } else if (!isNaN(firstMember) && operand) {
        setSecondMember(parseInput(output));
        const result = performAction(firstMember, operand, parseInput(output));
        setOutput(result.toString());
        if (typeof result === 'number') setFirstMember(result);
      }
      break;
    }
  }

  function parseInput(output:string): number {
    return parseFloat(output);
  }

  function performAction(first:number, operation:string, second:number): number | string {
    switch (operation) {
        case '+':
            return first+second;
        case '-':
            return first-second;
        case 'x':
            return first*second;
        case '/':
            return second != 0 ? first/second : 'Error!';
        default:
            return 'Error!';
    }
  }

  // styles

  const appStyle = {
    color: colorScheme.secondaryText
  }

  const logoStyle = {
    fontSize: '2rem'
  }

  console.log('---------------');
  console.log('output: '+output);
  console.log('firstMember: '+firstMember);
  console.log('secondMember: '+secondMember);
  console.log('operand: '+operand);
  console.log('lastKey: '+lastKey);

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