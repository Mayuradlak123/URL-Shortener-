import React, { useState } from 'react'

export default function Url_Page() {
    const[paste,setPaste]=useState("www.google.com");
        
    const pasteFunction=()=>{
        document.getElementById('patseHere').addEventListener('click',()=>{
        let myPaste=document.getElementById('link');
        myPaste='';
        navigator.clipboard.readText().then((text)=>{
               setPaste(text)
        }).catch((error)=>{
          console.log("Somthing Went Wrong Please check and Verify");
        })
        })
    }
    const changeHandle=(e)=>{
    setPaste(e.target.value);
    }
    var newURL=()=>{
        document.getElementById('newUrl').innerText="www.google.com"
    }
  return (
    <div> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <div className='container-fluid mt-5'>
       
       <h4>         URL Shortner </h4>  <br />
       <input type="text" name="" value={paste} onChange={changeHandle} className='form-control-lg w-50 ' id="link" placeholder='paste URL here'/> 
        &nbsp; <button className='btn btn-outline-primary' id='patseHere' onClick={pasteFunction}> Paste</button>
      &nbsp;  <button className='btn btn-outline-success' onClick={newURL}> Short-URL</button>
      <br />
      <p id='newUrl' style={{"color":"blue","fontSize":"20px"}}></p> &nbsp; &nbsp; <button className='btn btn-info' id='copyUrl'>Copy</button>
       <div></div>
        </div>

         </div>
  )
}
