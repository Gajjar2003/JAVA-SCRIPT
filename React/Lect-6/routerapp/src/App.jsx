import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom";
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import About from './Components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} /> 
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
