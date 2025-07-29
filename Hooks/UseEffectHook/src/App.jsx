

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
 const [count, setCount] = useState(0)

 useEffect(()=>{
  setTimeout(()=>{
    setCount(prev=>prev+1);
  }, 1000)
 },[count])

  return (
    <>
     <h1>i have render {count} times</h1>
    </>
  )
}

export default App
