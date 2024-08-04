import React from 'react'
import { useState } from 'react'
export default function Form(props) {

  const [text, usetext] = useState('write text here');

  const clickbtn = (event) => {
    // usetext(event);
    usetext(event.target.value);
    console.log("here");
  }
  const convert = () => {
    let textd = text.toUpperCase();
    // props.showAlert("Successfully upper Case","success");
    usetext(textd)
  }

  const copt_text = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <div className="container" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} onChange={clickbtn} id="exampleFormControlTextarea1" rows="5"></textarea>
          <button className='btn btn-primary my-2' style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={convert}>convert to upper case</button>
          <button className='btn btn-primary my-2 mx-2' style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={copt_text}>Copy Text</button><br />
          <lable className="form-lable" >The length of string is : {text.length}</lable><br />
          <button className='btn btn-info' onClick={() => props.buttonClickHandler()}>Go To News</button>
        </div>
      </div>
    </>
  )
}
