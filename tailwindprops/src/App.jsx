import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Components/Heading'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    {/* <Heading user = "Adnan"/> */}
    <div className='container' style={{backgroundColor:color}}>
        
        <button onClick={()=>setColor("yellow")} className='yellow'>yellow</button>
        <button onClick={()=>setColor("red")} className='red'>red</button>
        <button onClick={()=>setColor("green")} className='green'>green</button>
        <button onClick={()=>setColor("blue")} className='blue'>blue</button>
        <button onClick={()=>setColor("orange")} className='orange'>orange</button>
        <button onClick={()=>setColor("white")} className='white'>white</button>
        <button onClick={()=>setColor("black")} className='black'>black</button>
        <button onClick={()=>setColor("Gray")} className='gray '>Gray</button>
    </div>
    </>
  )
}

export default App
