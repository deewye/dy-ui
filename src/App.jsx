import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {   Route, Routes } from "react-router-dom";
import Sidebar from './Components/Sidebar'; 
import Item from './Components/Item';






  function App() { 

    
   return( 
    
    
   <Routes>
          <Route path="/" element={<Login />} > </Route>
          <Route path="/Sidebar" element={<Sidebar />} >  </Route>
          <Route path="/Item" element={<Item/>}> </Route>
          
      </Routes> 
      
     )
  }

  
export default App
