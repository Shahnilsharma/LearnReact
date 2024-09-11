import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter]=useState(3)
  const addValue = ()=>{
    setCounter(++counter)
  }
  const removeValues = ()=>{
    setCounter(--counter)
  }
  return (
    <>
     <div>
      <h1>Counter {counter}</h1>
      <button onClick={addValue}>Add values</button>
      <button onClick={removeValues}>Remove values</button>
     </div>
    </>
  )
}

export default App
