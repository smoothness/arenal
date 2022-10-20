import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { Header } from './components'
import { Home, History } from './containers'

function App() {
  return (
    <main className="max-w-3xl mx-auto">
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </main>
  )
}

export default App
