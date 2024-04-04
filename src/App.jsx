import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Bases from "./components/ui/Bases";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="bases" element={ <Bases /> } />
      </Routes>
    </div>
  );
}

export default App;
