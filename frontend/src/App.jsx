import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/page/Home'
import Quiz from '../src/page/Quiz'
import Result from '../src/page/Result'
import PrivateRoute from './components/auth/PrivateRoute'
import LogoutButton from './components/common/LogoutButton'

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
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          } 
        />
        <Route
          path="/result"
          element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }
        />
      </Routes>
      <LogoutButton />
    </div>
  )
}

export default App