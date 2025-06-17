import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Pass from './pages/pass'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path="/pass" element={<Pass />} />
      </Routes>
    </>
  )
}

export default App
