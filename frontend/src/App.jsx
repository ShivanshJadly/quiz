import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/page/Home'
import Quiz from '../src/page/quiz'
import Result from '../src/page/result'

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
        <Route
          path="/result"
          element={<Result />}
        />
      </Routes>
    </div>
  )
}

export default App