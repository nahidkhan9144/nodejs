import React, { useState, Suspense } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [buttonPath, setButtonPath] = useState('/card');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const handleButtonClick = () => {
    setButtonPath('/card');
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/convert" element={<Navbar title="textutils" alert={alert} mode={mode} showAlert={showAlert} buttonClickHandler={handleButtonClick} toggleMode={toggleMode} />} />
        <Route path={buttonPath} element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
