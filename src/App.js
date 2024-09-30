import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./components/Main.js";
import NavBar from "./components/Navbar.js"

function App() {
  return(
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </>
  )
}

export default App;