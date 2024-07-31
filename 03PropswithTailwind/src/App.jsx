import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-red-400 text-black p-5 rounded-2xl'> Fun with Tailwind </h1>
     <Cards username = "Shivansh" btnText = "click me!"/>
     <Cards username = "Pathak" btnText = "visit me!"/>
    </>
  )
}

export default App
