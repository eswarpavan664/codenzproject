import React,{useEffect,useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from './../components/Header';
import { Ip } from './../constants/Ip';
import { getDatabase, set ,push,child,onValue} from "firebase/database";
import { storage ,databaseref,app,auth,database} from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Lottie from 'react-lottie-player'
import { DownloadTableExcel } from 'react-export-table-to-excel';

import animation from '../lottiefiles/lf30_editor_dhwjzrvz.json'
import { NavLink } from 'react-router-dom';
 

function AdminHomePage(props) {

  const token =localStorage.getItem('token');
  const role=localStorage.getItem('Role');
    const navigate =useNavigate();
    const  logout =()=>{
        localStorage.removeItem("token") 
         navigate('/Login')
       
     }
     //console.log("sdsadas =" ,token)
     


     const [Cources,setCourcse] =useState( []);

     const [se,setse] =useState(0);
     
     const GetCourses=()=>{
       fetch(Ip+'/GetCourses',{
         headers:new Headers({
           Authorization:"Bearer " 
         })
         }).then(res=>res.json())
         .then(data=>{ 
         
          
           setCourcse(data.reverse());
           
            if(data.length>0){
             setse(1);
             
             
             
             //console.log("items=",Items)
            }
            if(data.length===0){
             setse(2);
            }
        
            
         }
         )
     }
   
     useEffect(()=>{
       GetCourses();
     })
   
  return (
    <>
    <Header role={role}/>
    <section className=''>
            <div className='container'>
            <h2>Courses</h2>
               {se===0?<div class="row row-cols-3 row-cols-md-4 g-4"><Lode/> </div>:null}

               {se===1?  <div class="row">
                    {Cources.map((co,i)=>(

                      <CourseCard data={co}/>
                    ))

                    }
                     
                    
                </div>:null
               }

               {se===2?<h1>No Courses</h1>:null

               }
            </div>

          
  </section>
  
   </>
  )
}


function CourseCard(props){

  const DeleteItem=()=>{
    fetch(Ip+'/deleteCourse?id='+props.data._id,{
        headers:new Headers({
          Authorization:"Bearer " 
        })
        }).then(res=>res.json())
        .then(data=>{ 
        
         
          alert("deleted Succesfully");
          
       
        }
        )
}




 




const [Coursename,setCoursename] =useState(props.data.CourseName);
const [Courseduration,setCourseduration] =useState(props.data.CourseDuration);
const [Courseprice,setCourseprice] =useState(props.data.CoursePrice);
const [Coursediscription,setCoursediscription] =useState(props.data.CourseDiscription);
 
const [Coursephoto,setCourseCoursephoto] =useState(props.data.CoursePhoto);



 

const [Count1,setCount1] =useState(0);
const [Count2,setCount2] =useState(0);
const [Count3,setCount3] =useState(0);
const GetEnrollCount1=()=>{

  fetch(Ip+'/GetEnrollsForAnalysis?id='+props.data.CourseId+"&status="+"Under Review",{
    headers:new Headers({
      Authorization:"Bearer " 
    })
    }).then(res=>res.json())
    .then(data=>{ 
    
     
      setCount1(data.length);
  // console.log("Applications  =",data)
       
    }
    )
}


const GetEnrollCount2=()=>{

  fetch(Ip+'/GetEnrollsForAnalysis?id='+props.data.CourseId+"&status="+"Accepted",{
    headers:new Headers({
      Authorization:"Bearer " 
    })
    }).then(res=>res.json())
    .then(data=>{ 
    
     
      setCount2(data.length);
  // console.log("Applications  =",data)
       
    }
    )
}
const GetEnrollCount3=()=>{

  fetch(Ip+'/GetEnrollsForAnalysis?id='+props.data.CourseId+"&status="+"Completed",{
    headers:new Headers({
      Authorization:"Bearer " 
    })
    }).then(res=>res.json())
    .then(data=>{ 
    
     
      setCount3(data.length);
  // console.log("Applications  =",data)
       
    }
    )
}
useEffect(()=>{
  if(props.data.CourseId){
    GetEnrollCount1();
    GetEnrollCount2();
    GetEnrollCount3();
  }
   
})

  return(
   <div className='col-md-6 pb-3' style={{boxShadow:"0 0 10px gray" }}>
                    <div className='row  align-items-center'>
                        <div className='col-md-3 col-6 '>
                            <img src={props.data.CoursePhoto} className='img-fluid' />
                            <p className='m-0 p-0 text-center fw-bold'>{props.data.CourseName}</p>
                        </div>
                        <div className='col-md-9 col-6'>
                            <div className='row'>
                                <div className='col-md-6 text-center '>
                                    <p className='m-0 p-0'>Under Review</p>
                                    <p className='m-0 p-0'>{Count1}</p>
                                </div>
                                <div className='col-md-6 text-center '>
                                    <p className='m-0 p-0'>accepted</p>
                                    <p className='m-0 p-0'>{Count2}</p>
                                </div>
                                <div className='col-md-6 text-center '>
                                    <p className='m-0 p-0'>Completed</p>
                                    <p className='m-0 p-0'>{Count3}</p>
                                </div>
                                <div className='col-md-6 text-center '>
                                    <p className='m-0 p-0'>Total</p>
                                    <p className='m-0 p-0'>{Count1+Count2+Count3}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='row align-items-center text-center justify-content-space-evenly'>
                           <p className='text-danger m-0 p-0 col-2'>₹{props.data.CoursePrice}</p>
                          <button className='col-4  btn btn-outline-danger'  onClick={DeleteItem}>
                    
                               Delete
                           </button>
                            <NavLink to="/UpdateCoursePage"
                            state={{
                              Data:props.data
                            }}
                            className='col-4 btn btn-outline-primary'
                            style={{textDecoration:'none',color:'black'}}
                            >
                      
                       
                          Edit
                          
                      
                      </NavLink>

                      <div className='col-2'> <FormatToExcel data={props.data}/></div>
                    </div>
                    
                </div>
  )
}


/*

 <div class="col" >
    <div class="card"  style={{minHeight:"300px",boxShadow:"0 0 8px gray",maxHeight:"350px"}}>
      <img src={props.data.CoursePhoto} class="card-img-top" alt="..." style={{minHeight:'150px',maxHeight:'150px'}} />
      <hr style={{borderColor:'black' }}></hr>
      <div class="card-body" style={{minHeight:'130px',maxHeight:'130px'}}>
        <p class="card-title m-0 fw-bold" style={{fontSize:"14px"}} >{props.data.CourseName}</p>
        
        <p class="card-title text-danger">₹{props.data.CoursePrice}</p>
       
             <p className='mb-4'> {Count1}-{Count2}-{Count3}</p> 
          
         <div className='row row-cols-12'>
          <button className='btn btn-success' style={{position:"absolute",bottom:"0"}}  onClick={DeleteItem}>Delete</button>
          
        </div>
       
      </div>
    </div>

   
  </div>

  */

function Lode(){
  return(
    <>
       <Lottie
                          loop
                          animationData={animation}
                          play
                          style={{ width: 400, height: 400 }}
                          className={"ing-fluid"}
              />

        <Lottie
                          loop
                          animationData={animation}
                          play
                          style={{ width: 400, height: 400 }}
                          className={"ing-fluid"}
              />
                              

                <Lottie
                          loop
                          animationData={animation}
                          play
                          style={{ width: 400, height: 400 }}
                          className={"ing-fluid"}
              />

       
                               

    </>
  )
}



function FormatToExcel(props){
  const [Data,setData] =useState([]);
  const tableRef = useRef(null);


  const GetEnrollsByCourse=()=>{

    fetch(Ip+'/GetAllEnrollsByCourse?id='+props.data.CourseId,{
      headers:new Headers({
        Authorization:"Bearer " 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
       
        setData(data);
    console.log("Table data  =",data)
         
      }
      )
  }


  useEffect(()=>{
    GetEnrollsByCourse();
  })

  return(
    <>

<DownloadTableExcel
                    filename={props.data.CourseName}
                    sheet="Responses"
                    currentTableRef={tableRef.current}
                >
                            <div  className='btn btn-outline-danger'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
                            </div>
                </DownloadTableExcel>
   
    <table ref={tableRef} class="visually-hidden">
    <tbody>
      <tr>
      <th>Student Id</th>
        <th>Student Name</th>
        <th>Student College Id</th>
        <th>Contact No</th>
        <th>College Name</th>
        <th>Email Id</th>

        <th>course Name</th>
        <th>Course Price</th>
        <th>Course Duration</th>
        <th>Transaction Id</th>
        <th>Course Id</th>
        <th>Course Start Date</th>
        <th>Course End Date</th>
        <th>Enrollment Id</th>
        <th>Course Status</th>
        
         
      </tr>
      {Data.map((da,i)=>(
        <tr>
          <td>{da.StudentId}</td>
          <td>{da.StudentName}</td>
          <td>{da.CollegeId}</td>
          <td>{da.ContactNumber}</td>
          <td>{da.CollegeName}</td>
          <td>{da.StudentEmailId}</td>
         
          <td>{da.CourseName}</td>
          <td>{da.CoursePrice}</td>
          <td>{da.CourseDuration}</td>
          <td>{da.TransactionId}</td>
          <td>{da.CourseId}</td>
          <td>{da.CourseStartDate}</td>

          <td>{da.CourseEndDate}</td>
          <td>{da.EnrollmentId}</td>
          <td>{da.CourseStatus}</td>
        </tr>
      ))

      }
      </tbody>
    </table>
    </>
  )
}
export default AdminHomePage;