import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(15)

  // let counter = 10;
  let addValue = ()=>{

      setCounter(counter + 1)
      // console.log("clicked",counter);
  }

  const removeValue = () => {
      setCounter(counter - 1)
  }

  return (
    <>
      <h1> Counter Project!!! </h1>
      <h2>Counter value : {counter}  </h2>
      <button onClick={addValue}> Add Value 
        </button>  
        <br/>
        <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App