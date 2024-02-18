import { Route, Routes } from "react-router-dom"
import './App.css'

import Login from "./pages/login"
import Dashboard from "./pages/dashboard.jsx"
import { createContext } from "react"
import SignUp from "./pages/signUp.jsx"

export const UserContext = createContext()

function App() {
  
  return (
    <UserContext.Provider> 
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={ < SignUp/>}/>
    </Routes>
    </UserContext.Provider>
  )
}

export default App
