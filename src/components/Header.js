import React from 'react';
import User from '../images/user.png';
import { Input, Space } from 'antd';
import {
 NavLink
} from "react-router-dom";

import logo from '../images/logo.webp'
import {useNavigate} from 'react-router-dom'
import Applications from './../pages/Applications';
 
function Header(props) {
  const { Search } = Input;
  const onSearch = value => console.log(value);
  console.log(props.role)
  return (
    <NavBar role={props.role}/>
    
   
  )
}

function NavBar(props){

  const navigate =useNavigate();
  const  logout =()=>{
      localStorage.removeItem("token") 
       navigate('/Login')
     
   }


if(props.role==="Admin"){
  return(
    <header>
    <nav class="navbar navbar-expand-lg navbar-light" style={{borderBottom:"2px solid blue"}}>
<div class="container">
    <NavLink to="/DashBoard" style={{textDecoration:'none'}}>
    
    
    <img src={logo} width="35px" height={"35px"}/>
    <a class="navbar-brand text-dark"  >CS CODENZ</a></NavLink> 
<button class="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
 {window.location.pathname!=="/Login"?<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
     
     
    
    <NavLink to="/Profile">
    <li class="nav-item ms-md-2 mt-md-0 mt-2" style={{cursor:"pointer"}}>
      <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' width={"40"} />
    </li>
    </NavLink>
    <li class="nav-item ms-md-2 mt-md-0 mt-2" style={{cursor:"pointer"}}>
    <a onClick={logout} class="nav-link active text-dark"  >Logout</a>
    </li>
    <li class="nav-item ms-md-2 mt-md-0 mt-2" style={{cursor:"pointer"}}>
   <NavLink to="/AboutUs" style={{textDecoration:'none'}}>  <a  class="nav-link active text-dark"  >About us</a></NavLink>
    </li>
     
    <li class="nav-item dropdown ms-md-2 mt-md-0 mt-2" style={{cursor:"pointer"}}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Applications
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
            <li> <NavLink to="/Applications" state={{Type:"Under Review"}} style={{textDecoration:'none'}}>  <a  class="nav-link active text-dark"  >Under Review</a></NavLink></li>
            <li> <NavLink to="/Applications" state={{Type:"Accepted"}} style={{textDecoration:'none'}}>  <a  class="nav-link active text-dark"  >Accepted</a></NavLink></li>
            <li> <NavLink to="/Applications" state={{Type:"Completed"}} style={{textDecoration:'none'}}>  <a  class="nav-link active text-dark"  >Completed</a></NavLink></li>
          </ul>
        </li>
    
    <li class="nav-item ms-md-2 mt-md-0 mt-2" style={{cursor:"pointer"}}>
   <NavLink to="/AddCourse" style={{textDecoration:'none'}}>  <a  class="nav-link active text-dark"  >Add Course</a></NavLink>
    </li>

  </ul>
  
</div>:

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
    <li class="nav-item">
      <a class="nav-link active text-dark" href="#">Signin/Signup</a>
    </li>
     
    
    
  </ul>
  
</div>

 }
</div>
</nav>
    </header>
  )
}
else{


  return(
    <header>
    <nav class="navbar navbar-expand-lg navbar-light" style={{borderBottom:"2px solid blue"}}>
<div class="container">
    <NavLink to="/DashBoard" style={{textDecoration:'none'}}>
    
    
    <img src={logo} width="35px" height={"35px"}/>
    <a class="navbar-brand text-dark"  >CS CODENZ</a></NavLink> 
<button class="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
 {window.location.pathname!=="/Login"?<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
     
     
    
    <NavLink to="/Profile">
    <li class="nav-item ms-md-2 mt-md-0 mt-2" style={{cursor:"pointer"}}>
      <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' width={"40"} />
    </li>
    </NavLink>
    <li class="nav-item ms-md-2 mt-md-0 mt-2" style={{cursor:"pointer"}}>
    <a onClick={logout} class="nav-link active text-dark"  >Logout</a>
    </li>
    <li class="nav-item ms-md-2 mt-md-0 mt-2" style={{cursor:"pointer"}}>
   <NavLink to="/AboutUs" style={{textDecoration:'none'}}>  <a  class="nav-link active text-dark"  >About Us</a></NavLink>
    </li>

    <li class="nav-item ms-md-2 mt-md-0 mt-2" style={{cursor:"pointer"}}>
   <NavLink to="/MyCourses" style={{textDecoration:'none'}}>  <a  class="nav-link active text-dark"  >My Courses</a></NavLink>
    </li>
  </ul>
  
</div>:

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
    <li class="nav-item">
      <a class="nav-link active text-dark" href="#">Signin/Signup</a>
    </li>
     
    
    
  </ul>
  
</div>

 }
</div>
</nav>
    </header>
  )

}
   
}
export default Header;

/*
window.location.pathname==="/MyOrders"

          <NavLink to={{
              pathname:"/Student_Dashboard",
              details:{proimg:"image"}
            }}><img className='img-fluid ' src={User} width='50'/></NavLink> 
          </>
          :null
          }
*/