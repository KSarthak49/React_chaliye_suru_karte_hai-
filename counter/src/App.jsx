import { useState } from 'react'
import './App.css'

function App() {

  // wee have to use useState to create a state variable(hooks)
 let [counter,setcounter]=useState(0)
  // here counter is a variable and setcounter is a function
  // counter will perform opreation and set counter will set the value of counter
const addvalue = () => {
setcounter(counter+1)
};
// here we have created a function addvalue to increase the value of counter
const decreasevalue = () => {
  if(counter>0){
    setcounter(counter-1)
  }
  };
  // after creating a function we need to put semicolon to end the function else no output error will be showing on the server site
return(
      <>
      <h1>React with Sarthak</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue}>
        Add value{counter} </button>
      <br/>
      <button onClick={decreasevalue}>
        Remove value{counter}</button>
      </>
  )
}

export default App




