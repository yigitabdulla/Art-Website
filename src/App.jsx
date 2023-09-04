import { useState } from 'react'
import Home from "./pages/Home"
import Art from "./pages/Art"
import Contact from "./pages/Contact"
import About from "./pages/About"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Art" element={<Art/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
