import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(2)

  const addVlue = ()=>{
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    //if you want to update multiple jobs at a time this is not the right approach
    //because setCount in the function addvalue all the jobs are batched and 
    // compilor consider it the same so it only adds this once and returns a callback ()=>
    // thats why we use prevCount to do so

    setCount((prevCount)=>prevCount+1)
    setCount((prevCount)=>prevCount+1)
    setCount((prevCount)=>prevCount+1)
    //now this will work as we put it in callback and it will add 3 each time

  }

  const obj={
    name:'shahnil',
    age:20
  }

  return (
    <>
     <h1 className='bg-purple-500' >This is shahnil</h1>
    <Card productName='Lether jacket' productPrice='100.0'/>
    <Card productName='Denim jacket' productPrice='200.0' btnText='Add to Cart'/>
    <button onClick={addVlue} >Counter {count}</button>
    </>
   
  )
}

export default App



