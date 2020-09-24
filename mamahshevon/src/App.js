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

        if(button === "="){
            calculate()
        }


        else if(button === "C"){
            reset()
        }
        else if(button === "CE"){
            backspace()
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
