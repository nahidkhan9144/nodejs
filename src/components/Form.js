import React from 'react'
import { useState } from 'react'

export default function Form(props) {
  const[text,usetext] = useState('write text here');
  const clickbtn = (event)=>{
    // usetext(event);
    usetext(event.target.value);
    console.log("here");
  }
  const convert=()=>{
    let textd = text.toUpperCase();
    usetext(textd)
  }
  return (
    <>
    <div className="mb-3">
      <div>{props.heading}</div>
        <textarea className="form-control" value={text} onChange={clickbtn} id="exampleFormControlTextarea1" rows="5"></textarea>
        <button className='btn btn-primray' onClick={convert}>convert to upper case</button>
      </div>
    </>
  )
}
