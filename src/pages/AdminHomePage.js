import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from './../components/Header';
import { Ip } from './../constants/Ip';
import { getDatabase, set ,push,child,onValue} from "firebase/database";
import { storage ,databaseref,app,auth,database} from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Lottie from 'react-lottie-player'

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
   console.log("Applications  =",data)
       
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
   console.log("Applications  =",data)
       
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
   console.log("Applications  =",data)
       
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
export default AdminHomePage;