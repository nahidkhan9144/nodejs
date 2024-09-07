import React, { useEffect, useState } from 'react';
import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';
import { useNavigate } from 'react-router-dom';
import useCheckToken from './useCheckToken';
import Clock from 'react-live-clock';
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

  const newsbtn = () => {
    navigate('/viewNews');
  }

  const mailValid = () => {

  }

  const viewTable = () => {
    navigate('/viewTable')
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-5 d-flex justify-content-end">
            <Clock format={'hh :mm :ss A'} ticking={true} timezone={'Asia/Kolkata'} />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-warning mx-3 my-3 mb-3" onClick={handleLogout}>Logout</button>
      <button type="submit" className="btn btn-warning mx-3 my-3 mb-3" onClick={newsbtn}>GO To News</button>
      <button type="submit" className="btn btn-primary mx-3 my-3 mb-3" onClick={mailValid}>Validate Email</button>
      <button type="submit" className="btn btn-primary mx-3 my-3 mb-3" onClick={viewTable}>View Table</button>
      <Form heading="hello nahid" buttonClickHandler={handleButtonClick} mode={props.mode} showAlert={props.showAlert} toggleMode={props.toggleMode} />
    </>
  )
}
