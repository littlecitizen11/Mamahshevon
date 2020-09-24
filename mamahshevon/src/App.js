import React, {useState} from 'react';
import KeyPadComponent from './keypadComponent';
import Resultcomponent from "./resultcomponent"
import './App.css';


function App() {
    const [state, setState] = useState("");


    function calculate() {
        try {
            setState((eval(state) || "" ) + "")
        } catch (e) {
            setState("error")

        }
    }

    function reset(){
        setState("")
    }

    function backspace(){
        setState(state.slice(0, -1))
    }


    function onClick(button)
    {

        const buttonsToFunction = {
            "=": calculate,
            "C": reset,
            "CE": backspace
        }

        if(button in buttonsToFunction)
        {
            const functionToExec = buttonsToFunction[button];
            functionToExec();

        }

        else {
            setState(state+button)
        }
    }

  return (
    <div className="App">
        <Resultcomponent result={state}/>
        <KeyPadComponent onClick={onClick}/>
    </div>
  );
}

export default App;
