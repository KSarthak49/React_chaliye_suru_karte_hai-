import React, { useState } from 'react'
function App() {
  const [color, setcolor] = useState("white")

  return (
  <div className="w-full h-screen duration-200"
  style={{backgroundColor: color}}
  >
    <div className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2 ">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white
      px-3 py-2 rounded-3xl'> 
      <button onClick={()=>{setcolor('red')}} 
      className='outline-none px-4 py-1 rounded-full text-white shodow-lg'
      style={{backgroundColor: 'red'}}
      >Red</button>
       <button onClick={()=>{setcolor('blue')}} 
      className='outline-none px-4 py-1 rounded-full text-white shodow-lg'
      style={{backgroundColor: 'blue'}}
      >Blue</button>
       <button onClick={()=>{setcolor("green")}} 
      className='outline-none px-4 py-1 rounded-full text-white shodow-lg'
      style={{backgroundColor: 'green'}}
      >Green</button>
       <button onClick={()=>{setcolor("yellow")}} 
      className='outline-none px-4 py-1 rounded-full text-white shodow-lg'
      style={{backgroundColor: 'yellow'}}
      >Yellow</button>
       <button onClick={()=>{setcolor("purple")}} 
      className='outline-none px-4 py-1 rounded-full text-white shodow-lg'
      style={{backgroundColor: 'purple'}}
      >purple</button>
       <button onClick={()=>{setcolor("violet")}} 
      className='outline-none px-4 py-1 rounded-full text-white shodow-lg'
      style={{backgroundColor: 'violet'}}
      >violet</button>
       <button onClick={()=>{setcolor("silver")}} 
      className='outline-none px-4 py-1 rounded-full text-white shodow-lg'
      style={{backgroundColor: 'silver'}}
      >silver</button>
       <button onClick={()=>{setcolor("pink")}} 
      className='outline-none px-4 py-1 rounded-full text-white shodow-lg'
      style={{backgroundColor: 'pink'}}
      >pink</button>
      </div>
    </div>


  </div>
  )
}

export default App
