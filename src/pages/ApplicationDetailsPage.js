import React from 'react'

import Header from './../components/Header';
import { useLocation,useNavigate } from 'react-router-dom';
function ApplicationDetailsPage(props) {
    const token =localStorage.getItem('token');
  const role=localStorage.getItem('Role');


  

  const navigate = useNavigate();
  const location = useLocation()
  const {Data} = location.state;
  if(props.Data){
    return (
        <>
               <Header role={role}/>
                <div>
                    <h1>Student Details</h1>
                    <p>{props.Data.StudentName}</p>
                    <p>{props.Data.CollegeId}</p>
                    <p>{props.Data.StudentEmailId}</p>
                    <p>{props.Data.CollegeName}</p>
                    <p>{props.Data.CourseName}</p>
                    <p>{props.Data.TransactionId}</p>
                    <p>{props.Data.CourseStartDate}</p>
                    <p>{props.Data.ContactNumber}</p>
    
                    <p>{props.Data.StudentName}</p>
    
                </div>
     
        </>
      )
  }
  else{
    return(
        <h1>Please Wait</h1>
    )
  }
   
}

export default ApplicationDetailsPage;