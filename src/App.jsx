import { Route, Routes } from "react-router-dom"
import './App.css'
import { useState, useEffect } from "react";
import Login from "./pages/login"
import Dashboard from "./pages/dashboard.jsx"
import { createContext } from "react"
import SignUp from "./pages/signUp.jsx"
import Conference from "./pages/conference.jsx"

export const UserContext = createContext()

function App() {
  const token = JSON.parse(localStorage.getItem('apiToken')) || null;
    const url = import.meta.env.VITE_URL;
  

  
  return (
    <UserContext.Provider> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={ < SignUp/>}/>
        <Route path="/conference/:id" element={<Conference />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
