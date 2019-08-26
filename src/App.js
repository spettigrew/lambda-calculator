import React, { useState } from "react";
import "./App.scss";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from './components/DisplayComponents/Display';


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should receive 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [displayValue, setDisplayValue] = useState('0');
  const addNumber = (number) => {
    setDisplayValue(displayValue => displayValue + number)
  };
  // const addOperator = (operator) => {
  //   if (operator === '=') {
  //     setDisplayValue(displayValue => eval(displayValue));
  //   } else {
  //       setDisplayValue(displayValue => display Value + ' ' + operator + ' ')
  //   }
  // }

  return (
    <div className="container">
      <div className="App">
        <Logo />
        <div className="Display">
        <div className="Specials">
        <div className="Numbers">
          </div>
        <div className="Operators">

        {/* STEP 4 - Render (means</>) your components here and be sure to properly import/export all files */}
        <Display number={displayValue} />
        <Numbers addNumber={addNumber} />
        <Operators />
        <Specials />
        {/* Display is a function and can be called by a cb = props. (which is an object) */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
