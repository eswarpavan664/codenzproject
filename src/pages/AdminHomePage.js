import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from './../components/Header';

function AdminHomePage() {

  const token =localStorage.getItem('token');
    const navigate =useNavigate();
    const  logout =()=>{
        localStorage.removeItem("token") 
         navigate('/Login')
       
     }
     //console.log("sdsadas =" ,token)
  return (
    <>
    <Header/>
        <div> 
    <h1>Admin DashBoard</h1>
    <p>  Admin Home Under construction </p>
    <p>email id:- {token}</p>
    <button onClick={logout}>Logout</button>
  
  </div>
    </>
  )
}

export default AdminHomePage;