import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter]=useState(1)
  const addValue = () => {
    if(counter<20){
      counter= counter+1;
      setCounter(counter)
    }
  }
  const removeValue = () => {
    if(counter>0){
      counter= counter-1;
      setCounter(counter)
    }
  }

  // let counter = 15
// const addValue  = () =>{
  // counter = counter + 1;
  // setCounter(counter);
  
  
    // setCounter(counter +1)
    
  
 
// }
// const removeValue =()=>{
//   setCounter(counter-1)
// }


  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Count value :{counter}</h2>

      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
