import React, { useState } from 'react';
import axios from 'axios';
import {ACCESS_TOKEN_NAME} from '../constants/apiConstants';
import { useNavigate } from "react-router-dom";
export default function Signin(props) {
  let navigate = useNavigate();
  const style = {
    background: 'linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))',
    height: '100vh',
    color: 'white',
    // overflow: 'hidden'
  };

  const cardStyle = {
    borderRadius: '1rem',
  };

  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    successMessage: null
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      props.showError(null);
      const payload = {
        "email": state.email,
        "password": state.password,
        "name": state.userName
      }
      console.log(payload);
      axios.post('http://localhost:8000/user/register', payload)
          .then(function (response) {
              if(response.status === 200){
                  setState(prevState => ({
                      ...prevState,
                      'successMessage' : 'Registration successful. Redirecting to home page..'
                  }))
                  localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                  redirectToHome();
                  props.showError(null)
              } else{
                  props.showError("Some error ocurred");
              }
          })
          .catch(function (error) {
              console.log(error);
          });    
    } else {
      props.showError('Please enter valid username and password')
    }

  }
  const redirectToHome = () => {
    props.updateTitle('Home')
    // this.props.history.push('/homeGo');
    navigate("/homeGo");
}

  const handleSubmitClick = (e) => {
    e.preventDefault();
    // debugger;
    if( state.email == '' || state.password == '' || state.confirmPassword == ''){
      
      props.showError('Error','PLease Fill All Required Fields');
    }else{
      if (state.password === state.confirmPassword) {
        sendDetailsToServer()
      } else {
        props.showError('Passwords do not match');
      }
    }
  }
  return (
    <section className="vh-50 gradient-custom" style={style}>
      <div className="container py-5 h-50">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={cardStyle}>
              <div className="card-body p-3 text-center">
                <div className="mb-md-5 mt-md-4 pb-2">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={state.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="text"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={state.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="text"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      value={state.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>

                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" onClick={handleSubmitClick} type="submit">Login</button>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
