import React from 'react'
import Navbar from './../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Header from './../components/Header';

function StudentHomePage(props) {
const navigate =useNavigate();
    const  logout =()=>{
        localStorage.removeItem("token") 
         navigate('/Login')
       
     }
  return (
     <>
        <Header  rol={props.ro}/>
        <div> 
        <h1>Student Home Under construction</h1>
        <button onClick={logout}>Logout</button>
        </div>
     </>
  )
}

export default StudentHomePage;