import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from './../components/Header';
import { Ip } from './../constants/Ip';

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

               {se===1?  <div class="row row-cols-2 row-cols-md-4 g-4">
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


  return(
    <div class="col" >
    <div class="card"  style={{minHeight:"300px",boxShadow:"0 0 8px gray",maxHeight:"350px"}}>
      <img src={props.data.CoursePhoto} class="card-img-top" alt="..." style={{minHeight:'150px',maxHeight:'150px'}} />
      <hr style={{borderColor:'black' }}></hr>
      <div class="card-body" style={{minHeight:'130px',maxHeight:'130px'}}>
        <p class="card-title m-0 fw-bold" style={{fontSize:"14px"}} >{props.data.CourseName}</p>
        
        <p class="card-title text-danger">₹{props.data.CoursePrice}</p>
       
              
          
         <div className='row row-cols-12'>
          <button className='btn btn-success' style={{position:"absolute",bottom:"0"}}  onClick={DeleteItem}>Delete</button>
          
        </div>
       
      </div>
    </div>

   
  </div>
  )
}




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