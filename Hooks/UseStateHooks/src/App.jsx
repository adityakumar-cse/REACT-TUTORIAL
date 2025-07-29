import { useState } from 'react'
import './App.css'

function App() {
 
const [count, setCount] = useState(0);

  const increaseCount = ()=>{
    //setCount(count+1)
    
    // for increase by 3 doing like this will not work
    // setCount(count+1) 1
    // setCount(count+1) 1
    // setCount(count+1) 1

    // for this we have to use prev
    setCount(prev=>prev+1) //1
    setCount(prev=>prev+1) //2
    setCount(prev=>prev+1) //3
    
  }
  const decreaseCount = ()=>{
    setCount(count-1)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      
    </>
  )
}

export default App
