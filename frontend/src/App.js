import React, { useState, CSSProperties  } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Signin from "./components/Signin";
import './App.css';
import Home from "./components/Home";

import ClipLoader from "react-spinners/ClipLoader";
import News from "./components/News";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import ViewTable from "./components/ViewTable";
function App() {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  let [loading, setLoading] = useState(true);
  
  let [color, setColor] = useState("#ffffff");

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

  return (
    <BrowserRouter>
      <div className="App">
        <Alert alert={errorMessage} />
        {/* NavbarWrapper will conditionally render Navbar based on the route */}
        <NavbarWrapper
          mode={mode}
          alert={alert}
          showAlert={showAlert}
          toggleMode={toggleMode}
        />
        {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        <Routes>
          <Route path="/" element={<Signin showError={showAlert} updateTitle={updateTitle} />} />
          <Route path="/homeGo" element={<Home showAlert={showAlert} mode={mode} setLoading={setLoading}/>} />
          <Route path="/viewNews" element={<News showError={updateErrorMessage} updateTitle={updateTitle} setLoading={setLoading} />} />
          <Route path="/viewTable" element={<ViewTable showAlert={showAlert} mode={mode} showError={updateErrorMessage} updateTitle={updateTitle} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NavbarWrapper({ mode, alert, showAlert, toggleMode }) {
  const location = useLocation();
  return location.pathname !== '/' ? (
    <Navbar
      title="textutils"
      alert={alert}
      mode={mode}
      showAlert={showAlert}
      toggleMode={toggleMode}
    />
  ) : null;
}

export default App;
