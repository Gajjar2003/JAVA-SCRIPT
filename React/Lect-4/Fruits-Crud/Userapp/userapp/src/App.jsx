import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './Components/User'
import Userdata from './Components/Userdata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <User/> */}
   <Userdata/>
   
    </>
  )
}

export default App
