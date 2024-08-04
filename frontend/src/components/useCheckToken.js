import React, { useEffect } from 'react';
import {ACCESS_TOKEN_NAME} from '../constants/apiConstants';
import { useNavigate } from 'react-router-dom';
const useCheckToken=()=> {
    let navigate = useNavigate();

  const redirectToHome=()=>{
    navigate('/');
  }

  const checkToken=()=>{
    var token = localStorage.getItem(ACCESS_TOKEN_NAME);
    if(token =='' || token ==null){
      redirectToHome();
    }
  }
  useEffect(() => {
    checkToken();
  }, []); // Empty dependency array means this effect runs once when the component mounts


}

export default useCheckToken;
