import { useState } from 'react'
import './App.css'

function App() {
 let [counter,setcounter]=useState(0)
const addvalue = () => {
setcounter(counter+1)
};
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


