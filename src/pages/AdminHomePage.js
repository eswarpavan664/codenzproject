import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AdminHomePage() {

    const navigate =useNavigate();
    const  logout =()=>{
        localStorage.removeItem("token") 
         navigate('/Login')
       
     }
  return (
    <>
    <Navbar/>
        <div> 
    <h1>Admin DashBoard</h1>
    <p>  Admin Home Under construction </p>
    <button onClick={logout}>Logout</button>
  
  </div>
    </>
  )
}

export default AdminHomePage;