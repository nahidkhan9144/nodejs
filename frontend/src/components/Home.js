import React, { useEffect, useState } from 'react';
import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';
import { useNavigate } from 'react-router-dom';
import useCheckToken from './useCheckToken';
import Clock from 'react-live-clock';
import Form from './Form';
import {motion} from 'framer-motion';
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
          <motion.div
            whileHover={{
              scale: 1.2,
              borderColor: '#808080', // Grey border on hover
              color: '#000000' // Change text color on hover
            }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            
            style={{
              border: '2px solid #ff5722', // Border color and width
              borderRadius: '10px', // Rounded corners (optional)
              padding: '10px', // Padding inside the border (optional)
              backgroundColor: '#fff', // Background color
            }}
          >
            <Clock format={'hh:mm:ss A'} ticking={true} timezone={'Asia/Kolkata'} />
          </motion.div>
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
