import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const obj={
    name:'shahnil',
    age:20
  }

  return (
    <>
     <h1 className='bg-purple-500' >This is shahnil</h1>
    <Card productName='Lether jacket' productPrice='100.0'/>
    <Card productName='Denim jacket' productPrice='200.0' btnText='Add to Cart'/>
    </>
   
  )
}

export default App