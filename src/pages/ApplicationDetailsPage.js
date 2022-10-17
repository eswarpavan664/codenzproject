import React from 'react'

import Header from './../components/Header';
import { useLocation,useNavigate } from 'react-router-dom';
 
function ApplicationDetailsPage(props) {
    const token =localStorage.getItem('token');
  const role=localStorage.getItem('Role');


  

  const navigate = useNavigate();
  const location = useLocation()
  const {Data} = location.state;
  var size = Object.keys(Data).length;
  if(size>0){
    return (
        <>
               <Header role={role}/>
                <div>
                    <h1 className='text-center'>Application Details</h1>
                    <div className='d-flex justify-content-center align-items-center mt-4'>
                    <table  >
                    <h4 className='text-center'>Student Details:- </h4>
             
                        <tr >
                          <td >Student Name:- </td>
                          <td>{Data.StudentName}</td>
 
                        </tr>
                        <tr>
                          <td>Email Id:- </td>
                          <td>{Data.StudentEmailId}</td>
 
                        </tr>
                        <tr>
                          <td>Contact Number:- </td>
                          <td>{Data.ContactNumber}</td>
 
                        </tr>
                        <tr>
                          <td>Reg No:- </td>
                          <td>{Data.CollegeId}</td>
 
                        </tr>
                        <tr>
                          <td>College Name:- </td>
                          <td>{Data.CollegeName}</td>
 
                        </tr>
                        <h4 className='text-center mt-3'>Course Details:- </h4>
                        <tr>
                          <td>Course Name:- </td>
                          <td>{Data.CourseName}</td>
 
                        </tr>
                        <tr>
                          <td>Course Price:- </td>
                          <td>{Data.CoursePrice} ₹</td>
 
                        </tr>
                        <tr>
                          <td>Course Duration:- </td>
                          <td>{Data.CourseDuration}</td>
 
                        </tr>
                        <tr>
                          <td>Course Start Date:- </td>
                          <td>{Data.CourseStartDate}</td>
 
                        </tr>
                        <tr>
                          <td>Course End Date:- </td>
                          <td>{Data.CourseEndDate}</td>
 
                        </tr>
                    </table>
                    </div>
                    <h1 className='text-center'>Transaction Id: -{Data.TransactionId}</h1>
             

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

/*
 
                   
                 
                    <p>{Data?Data.TransactionId:null}</p>
                    <p>{Data?Data.CourseStartDate:null}</p>
                 


                  */  