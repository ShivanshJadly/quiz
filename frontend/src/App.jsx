import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/page/Home'
import Quiz from '../src/page/quiz'

function App() {
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/quiz" 
          element={<Quiz />} 
        />
      </Routes>
    </div>
  )
}

export default App