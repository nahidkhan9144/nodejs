
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import AlertComponent from "./components/AlertComponent";
import './App.css';
import React, { useState } from 'react';
import Home from "./components/Home";
import News from "./components/News";
import Alert from "./components/Alert";

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  const showAlert = (type, message) => {
    updateErrorMessage({
      msg: message,
        type: type
    });

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      updateErrorMessage(null);
    }, 3000);
  };
  
  return (
    <>
      <BrowserRouter>
        <div className="App">

          <Alert alert={errorMessage} />
          <Routes>
            <Route path="/" element={<Signin showError={showAlert} updateTitle={updateTitle} />} ></Route>
            <Route path="/homeGo" element={<Home showError={updateErrorMessage} updateTitle={updateTitle} />} ></Route>
            <Route path="/viewNews" element={<News showError={updateErrorMessage} updateTitle={updateTitle} />} ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
