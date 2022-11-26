import React from 'react'
// import "../index.css"
export default function Header() {
    const Refresh=()=>{
window.location.reload();
    }
  return (
    <div>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    <div >
        <nav className="navbar navbar-expand-md mt-2 bg-dark text-light" style={{"fontSize":"18px"}}>
            <ul className='collapse navbar-collapse' style={{"listStyle":"none"}}>
                <li className='nav-item'> Home Page </li> &nbsp; &nbsp;
                <li  className='nav-item'> History </li> &nbsp;&nbsp;
                <li  className='nav-item'> About us </li> &nbsp;&nbsp;
        
            </ul>
            <li className='nav-item btn btn-outline-success float-right'  onClick={Refresh}>Refresh</li>
        </nav>
        
    </div>
    </div>
  )
}
