import React, { useEffect,useState } from 'react';
import {ACCESS_TOKEN_NAME} from '../constants/apiConstants';
import { useNavigate } from 'react-router-dom';
import useCheckToken  from './useCheckToken';
import Navbar from './Navbar';
import Form from './Form';
export default function Home(props) {
  let navigate = useNavigate();
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
  // debugger;
  useCheckToken();
  const handleLogout = () => {
    localStorage.setItem(ACCESS_TOKEN_NAME, '');
    navigate('/');
  }

  const newsbtn = ()=>{
    navigate('/viewNews');
  }
  
  return (
    <>
    <Navbar title="textutils" alert={alert} mode={mode} showAlert={showAlert} buttonClickHandler={handleButtonClick} toggleMode={toggleMode} />
    <button type="submit" className="btn btn-warning mx-3 my-3 mb-3" onClick={handleLogout}>Logout</button>
    <button type="submit" className="btn btn-warning mx-3 my-3 mb-3" onClick={newsbtn}>GO To News</button>
    <Form heading="hello nahid" buttonClickHandler={handleButtonClick}  mode={mode} showAlert={showAlert} toggleMode={toggleMode} />
 </>
  )
}
