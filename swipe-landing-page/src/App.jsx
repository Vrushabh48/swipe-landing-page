import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Section3 } from './components/Section3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}

export default App
