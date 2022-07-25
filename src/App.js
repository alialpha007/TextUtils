import './App.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavigationBar'
import Form from './Components/TextForm'
import { useState } from 'react';


function App() {
  
  const [mode, setMode] = useState("primary")
  const toggleMode = ()=>{
    if (mode === "primary") {
      setMode("dark")
      document.body.style.backgroundColor="#395B64"
    }else {
      setMode("primary")
       document.body.style.backgroundColor="white"
    }

  }
  return (
    <>
      <NavBar mode={mode} toggleMode={toggleMode}/>
      <Form mode={mode}/>
      </>
  );
}

export default App;
