import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Prueba from './components/fetch.jsx'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import './index.css'
function App() {


  return (
    <>

      <Routes>


        <Route element={<Layout />} >

          <Route path="/" element={<Home />} />



        </Route>
      </Routes>


    </>
  )
}

export default App
