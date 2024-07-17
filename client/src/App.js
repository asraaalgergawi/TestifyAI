import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import NavigateButton from './NavigateButton';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const handleLogout = () => {
    localStorage.clear();
    window.location = '/';
  }

  const navigateLogin = () => {
    window.location = '/login';
  };

  return (
    <BrowserRouter>
      <NavigateButton />
      <Navbar handleLogout={handleLogout} navigateLogin={navigateLogin} />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
      {/* Add your routes or components here */}
    </BrowserRouter>
  );
}

export default App;
