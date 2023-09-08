import { useCallback, useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [charallowed, setCharallowed] = useState(false)
  const [numberallowed, setNumberallowed] = useState(false)
  const [password, setPassword] = useState("")

   const passwordref = useRef(null)

   const passwordGenerator = useCallback(()=>{
     let pass="";
     let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(numberallowed) str += "0123456789";
      

    
    if(charallowed)    str +="!@#$%^&*()_{}-\|."
   
    

    for (let i = 0; i <= length; i++) {
      let char =Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
      
    } 
    setPassword(pass)


   },
    [length,charallowed,numberallowed,setPassword])
    
   useEffect(() => {
    passwordGenerator()

   }, 
   [length,numberallowed, charallowed,passwordGenerator])

   const copytoclipboard = useCallback(()=>{
   
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,88);
    
    window.navigator.clipboard.writeText(password)

   },[password])
    
   
   
     
  return (
    <>
     <div className='container'>
      <h1>password Generator</h1>
      <div className='inputbutton'>
        <input 
        type="text"
        placeholder='password'
        value={password} 
        readOnly
        ref={passwordref}
        />
        <button onClick={copytoclipboard} className='btn'>
          Copy
        </button>

      </div>
      <div className='secondline'>
        <div className='tree'>
        <input type="range"
        min={6}
        max={50}
        value={length}
        style={{cursor:'pointer'}}
        onChange={(e)=>{setLength(e.target.value)}}
         />
         <label htmlFor="range">length:{length}</label>
         </div>


         <div className='tree'>
         <input type="checkbox"
         defaultChecked ={numberallowed}
         id='numberinput'
         onChange={()=>{setNumberallowed((prev)=>!prev); 
         }} />
         <label htmlFor="checkbox">number</label>
         </div>

         <div className='tree'>
<input type="checkbox"
defaultChecked ={charallowed}
id='charinput'
onChange={()=>{setCharallowed((prev)=>!prev); 
}} />

<label htmlFor="checkbox">character</label>
</div>
        
        
        
      </div>

     </div>
    </>
  )
}


export default App
