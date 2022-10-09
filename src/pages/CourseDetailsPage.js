import React,{useState,useEffect} from 'react'
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import Header from './../components/Header';
import Cources from './../components/Cources';
import Footer from './../components/Footer';

function CourseDetailsPage(props) {

    const navigate = useNavigate();
    const location = useLocation()
    const {CourseData} = location.state;

    const topics =CourseData.CourseTopics.split('-');
 
    return (
     <>
     <Header/>
         <div className='container mt-3'>
                <div  class="row row-cols-2 row-cols-md-4 g-4">
                    <div class="col" >
                        <div class="card"  style={{minHeight:"350px",boxShadow:"0 0 8px gray",maxHeight:"500px"}}>
                        <img src={CourseData.CoursePhoto} class="card-img-top" alt="..." width={"150px"} height={"150px"}/>
                        <hr style={{borderColor:'black' }}></hr>
                        <div class="card-body">
                            <h5 class="card-title">{CourseData.CourseName}</h5>
                            
                           
             
                            
                        </div>
                        </div>
                    </div>
                        
                     <div class="col mt-5"  >
                         <p>{CourseData.CourseDiscription}</p>
                         <h5 class="card-title">₹{CourseData.CoursePrice}</h5>
                                <NavLink to="/Payment"
                                
                                    state={{

                                        CourseData:CourseData
                                        

                                        }}
                                    
                                style={{textDecoration:'none'}}>
                                <div className='row row-cols-12'>
                                <button className='btn' style={{backgroundColor:'green',color:'white'}}>Enroll</button>
                                </div>
                                </NavLink>
                    </div>
                          
                </div>
         </div>
         <hr></hr>
        
         <div className='container'>
         <h2>Topics Covered In this Course</h2>
            <ol>
                {topics.map((to,i)=>(
                    <li>{to}</li>
                ))

                }
            </ol>                         

         </div>

         <Footer/>
     </>
  )
}

export default CourseDetailsPage;