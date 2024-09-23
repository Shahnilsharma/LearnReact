import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
   
       <div className='w-full h-screen  duration-200'  style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2' >
          <div className='flex flex-wrap justify-center gap-3 rounded-full bg-white px-2 py2
          shadow-lg' >
            <button className='outline-none rounded-full text-white px-2 py-2 my-2' style={{backgroundColor:'red'}} onClick={()=>setColor('red')} >RED</button>
            <button className='outline-none rounded-full text-white px-2 py-2 my-2' style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')} >blue</button>
            <button className='outline-none rounded-full text-white px-2 py-2 my-2' style={{backgroundColor:'green'}} onClick={()=>setColor('green')} >green</button>
            <button className='outline-none rounded-full text-white px-2 py-2 my-2' style={{backgroundColor:'yellow'}} onClick={()=>setColor('yellow')} >yellow</button>
            <button className='outline-none rounded-full text-white px-2 py-2 my-2' style={{backgroundColor:'purple'}} onClick={()=>setColor('purple')} >purple</button>
            <button className='outline-none rounded-full text-white px-2 py-2 my-2' style={{backgroundColor:'brown'}} onClick={()=>setColor('brown')} >brown</button>
          </div>
        </div>
       </div>
     
    </>
  )
}

export default App
