import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Conponets/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Well come To User-infromation</h1>
     <Home user = {{username:'Jenil',email : "Jenil@gamil.com",phone :'9874561223'}}/>
    </>
  )
}

export default App
