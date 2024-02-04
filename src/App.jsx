import { Route, Routes } from "react-router-dom"
import './App.css'

import Login from "./pages/login"
import Dashboard from "./pages/dashboard.jsx"
import { createContext } from "react"

export const UserContext = createContext()

function App() {
  const url = 'https://api-gateway.test.tibiti.io/api/v1'
  return (
    <UserContext.Provider value={{url}}> 
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} /> 
    </Routes>
    </UserContext.Provider>
  )
}

export default App
