import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputbox from './components/Inputbox'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <div>
     
       
      <Inputbox/>
     
    

     
   
    </div>
     
    </>
  )
}

export default App