import React from 'react'
import { useNavigate } from 'react-router-dom';
import AdminHomePage from './AdminHomePage';
import StudentHomePage from './StudentHomePage';

function Dashboard(props) {

  const navigate =useNavigate();

  const role =localStorage.getItem('Role');

  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/Login')
   
 }
   
//console.log(role)

 if(role==="Student"){
  return (
     <StudentHomePage ro={role}/>
  )
 }
if(role==="Admin"){
  return(
    <AdminHomePage ro={role}/>
  )
 }
 else{
  return(
    <h1>Login First </h1>
  )
 }
  
}

export default Dashboard;