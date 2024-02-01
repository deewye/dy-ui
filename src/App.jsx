import { Route, Routes } from "react-router-dom"
import './App.css'

import Login from "./pages/login"
import Dashboard from "./pages/dashboard.jsx"


function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} /> 
    </Routes>
    
  )
}

export default App
