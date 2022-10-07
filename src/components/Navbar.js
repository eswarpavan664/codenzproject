/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../images/exam.png'
import UserPic from '../images/user.png'
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark m-0">
      <div class="container-fluid">
        <img className='img-fluid me-md-5 me-4' src={logo} width={"45"} />
        <a class="navbar-brand" href="#">Result Management System</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            {window.location.pathname==="/Login"? <li class="nav-item">
              <a class="nav-link active" href="#">Login/ Signup</a>
            </li>:<li className='mt-md-0 mt-3'>
              <img src={UserPic} className="img-fluid" width={"40"} />
              </li>}
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;