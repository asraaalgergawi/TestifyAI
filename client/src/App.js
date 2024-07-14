import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import NavigateButton from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {

  return (
    <BrowserRouter>
      <NavigateButton />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      {/* Add your routes or components here */}
    </BrowserRouter>
  );
}

export default App;
