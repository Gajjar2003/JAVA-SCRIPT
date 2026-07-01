import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './Componets/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <User/>
    </>
  )
}

export default App
