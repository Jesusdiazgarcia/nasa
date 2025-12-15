import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Marte from './components/Marte.jsx'
import DelDiafecha from './components/delDiafecha.jsx'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Exoplanetas from './components/exoplanetas.jsx'
import './index.css'
function App() {


  return (
    <>

      <Routes>


        <Route element={<Layout />} >

          <Route path="/" element={<Home />} />
          <Route path="/delDiafecha" element={<DelDiafecha />} />
          <Route path="/exoplanetas" element={<Exoplanetas />} />
          <Route path="/Marte" element={<Marte />} />

        </Route>
      </Routes>


    </>
  )
}

export default App
