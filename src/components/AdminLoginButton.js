import React, { useState,useEffect } from 'react'

function AdminLoginButton() {
  return (
    <div>
        <p className='fw-bold'>Admin Login</p>
        <p>I alone cannot change the world, but I can cast a stone across the waters to create many ripples.</p>
        <Adminloginform />
    </div>
  )
}

function Adminloginform(){
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  
  return( 
    <>
<button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#staticBackdropadmin">
Signup/Login
</button>

<div class="modal fade" id="staticBackdropadmin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Signin/Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label>Email: </label> <input type={"text"} className="rounded" onChange={(e)=>setEmail(e.target.value)}  /><br /><br />
        <label>Password: </label> <input type={"password"} className="rounded" onChange={(e)=>setPassword(e.target.value)}  /><br /><br />
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-info">Submit</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default AdminLoginButton;