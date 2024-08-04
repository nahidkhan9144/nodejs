import React, { useEffect } from 'react';
import {ACCESS_TOKEN_NAME} from '../constants/apiConstants';
import { useNavigate } from 'react-router-dom';
import useCheckToken  from './useCheckToken';
export default function Home() {
  let navigate = useNavigate();
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
    <div>Home</div>
    <button type="submit" className="btn btn-warning" onClick={handleLogout}>Logout</button>
    <button type="submit" className="btn btn-warning" onClick={newsbtn}>News</button>
 </>
  )
}
