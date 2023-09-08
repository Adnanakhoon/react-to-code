import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const increasevalue =()=>{
    if(counter<20){
      setCounter(counter + 1)
    }
  }
  const decreasevalue =()=>{
    if(counter>0){
      setCounter(counter - 1)
    }
   
  }

  return (
    <>
      <h2>Counter value :{counter}</h2>
      <button onClick={increasevalue}>increase</button>
      <button onClick={decreasevalue}>decrease</button>
    </>
  )
}

export default App
