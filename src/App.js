import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./components/Main.js";

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </>
  )
}

export default App;