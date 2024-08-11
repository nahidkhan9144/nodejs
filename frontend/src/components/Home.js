import React, { useEffect,useState } from 'react';
import {ACCESS_TOKEN_NAME} from '../constants/apiConstants';
import { useNavigate } from 'react-router-dom';
import useCheckToken  from './useCheckToken';
import Navbar from './Navbar';
import Form from './Form';
export default function Home(props) {
  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/viewNews');
  };
  // debugger;
  // useCheckToken();
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
    <button type="submit" className="btn btn-warning mx-3 my-3 mb-3" onClick={handleLogout}>Logout</button>
    <button type="submit" className="btn btn-warning mx-3 my-3 mb-3" onClick={newsbtn}>GO To News</button>
    <Form heading="hello nahid" buttonClickHandler={handleButtonClick}  mode={props.mode} showAlert={props.showAlert} toggleMode={props.toggleMode} />
 </>
  )
}
