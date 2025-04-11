import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "aditya",
    age: 34
  }
  let myArr = [
    1, 2, 3
  ]

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-4'>Tailwind CSS</h1>

      <Card channel="chaiaurcode"/>
      <Card/>
      
    </>
  )
}

export default App
