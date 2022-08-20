import React from 'react'
import Pay from '../src/components/Pay'
import Success from '../src/components/Success'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='pay' element={<Pay />} />
      <Route path='success' element={<Success />} />
    </Routes>
  )
}

export default App