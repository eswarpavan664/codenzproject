import React,{useState,useEffect} from 'react';
 
import {
  useNavigate ,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Loading from './Loading';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import AdminLogin from './AdminLogin';
import ProfilePage from './ProfilePage';
 


function MainRouting() {
 

  return (
    <BrowserRouter>
    <Routes>
      

 
          
          <Route path="/" element={<Loading />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/DashBoard" element={<Dashboard />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Profile" element={<ProfilePage />} />
    </Routes>
    
  </BrowserRouter>
  );
}

export default MainRouting;
