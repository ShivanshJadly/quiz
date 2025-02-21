import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/page/Home'

function App() {
  return (
    <div>
      <h1>Quiz App</h1>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
      </Routes>
    </div>
  )
}

export default App
