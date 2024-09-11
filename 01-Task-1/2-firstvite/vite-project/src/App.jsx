import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  //lets create a variable and use evaluation function
  const username = "shahnil"
  //in the curly braces below we write evaluaton of the js not the code 
  return (
    <>
   <h1>The user name is {username}</h1>
    </>
  )
}

export default App
