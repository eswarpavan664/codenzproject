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
import CourseDetailsPage from './CourseDetailsPage';
import PaymentPage from './PaymentPage';
import AboutUsPage from './AboutUsPage';
import MyCourses from './MyCourses';
import Applications from './Applications';
import AddCourse from './../components/AddCourse';
import ApplicationDetailsPage from './ApplicationDetailsPage';
import UpdateCoursePage from './UpdateCoursePage';
 


function MainRouting() {
 

  return (
    <BrowserRouter>
    <Routes>
      

 
          
          <Route path="/" element={<Loading />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/DashBoard" element={<Dashboard />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Courses" element={<CourseDetailsPage />} />
          <Route path="/Payment" element={<PaymentPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/MyCourses" element={<MyCourses />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="/UpdateCoursePage" element={<UpdateCoursePage />} />
          <Route path="/ApplicationDetailsPage" element={<ApplicationDetailsPage />} />
    </Routes>
    
  </BrowserRouter>
  );
}

export default MainRouting;
