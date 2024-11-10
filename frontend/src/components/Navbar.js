import React from 'react'
// import PropTypes  from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
export default function Navbar(props) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log('Button clicked, navigating to /card');
    navigate('/card'); // Navigate to the new path
  };
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" aria-current="page" to="/Home-Page">
              Home
            </Link>
              <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/viewNews">
            News
            </Link>
              </li>
              <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/viewTable">
              Tables
            </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode=='light' ?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckChecked"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
        </div>
            
          </div>
        </div>
      </nav>
      
    </>
  )
}
