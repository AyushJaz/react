import { useState } from 'react';
import './App.css'

function App() {
  let [count,setCounter]=useState(0);
  const add=()=>{
    setCounter(count+1)
  }
  const subtract= () =>{
    if(count<=0)
      return;
    setCounter(count-1)
  }
  return (
    <>
    <h1>Ayush OR code</h1>
    <h2>Counter value:{count} </h2>
    <button onClick={add}>Increase Value</button>
    <br />
    <button onClick={subtract}>Remove value</button>
    </>
  )
}

export default App
