import React from 'react';
import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';
import { useNavigate } from 'react-router-dom';
import useCheckToken from './useCheckToken';
import Clock from 'react-live-clock';
import Form from './Form';
import { motion } from 'framer-motion';

export default function Home(props) {
  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/viewNews');
  };

  useCheckToken();

  const handleLogout = () => {
    localStorage.setItem(ACCESS_TOKEN_NAME, '');
    navigate('/');
  };

  const newsbtn = () => {
    navigate('/viewNews');
  };

  const mailValid = () => {
    // Your email validation logic
  };

  const viewTable = () => {
    navigate('/viewTable');
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <button type="submit" className="btn btn-warning mx-3 my-3 mb-3" onClick={handleLogout}>Logout</button>
            <button type="submit" className="btn btn-warning mx-3 my-3 mb-3" onClick={newsbtn}>GO To News</button>
            <button type="submit" className="btn btn-primary mx-3 my-3 mb-3" onClick={mailValid}>Validate Email</button>
            <button type="submit" className="btn btn-primary mx-3 my-3 mb-3" onClick={viewTable}>View Table</button>
          </div>

          <div className="col-md-4">
            <div className="d-flex justify-content-start">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  borderColor: '#808080', // Grey border on hover
                  color: '#000000', // Change text color on hover
                  backgroundcolor: props.mode // Change text color on hover
                }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                style={{
                  border: '2px solid #ff5722', // Border color and width
                  borderRadius: '10px', // Rounded corners (optional)
                  padding: '10px', // Padding inside the border (optional)
                  backgroundColor: props.mode, // Background color
                }}
              >
                <Clock format={'hh:mm:ss A'} ticking={true} timezone={'Asia/Kolkata'} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Form heading="hello nahid" buttonClickHandler={handleButtonClick} mode={props.mode} showAlert={props.showAlert} toggleMode={props.toggleMode} />
    </>
  );
}
