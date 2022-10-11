/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import Header from './../components/Header';
import { Ip } from './../constants/Ip';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import underreviewlogo from '../images/clockwise.png'


function MyCourses(props) {
    const [Data,setData] =useState();
    const token =localStorage.getItem('token');

    const role =localStorage.getItem('Role');
    const GetCourses=()=>{
        fetch(Ip+'/GetCoursesByUser?id='+token,{
            headers:new Headers({
              Authorization:"Bearer " 
            })
            }).then(res=>res.json())
            .then(data=>{ 
            
              console.log(data)
             setData(data);
                if(data.length>0){
                    setse(1)
                }  
                else if(data.length===0){
                    setse(2)
                }
            }
        )

    }

    const [se,setse]=useState(0);
    useEffect(()=>{
        GetCourses();
    })

  return (
    <>
    <Header/>
        {se===0?<h1>Loading</h1>:null

        }

        <>
            {se===1?
                    <>
                    {Data.map((da,i)=>(

                        <Card data={da}/>
                        ))

                        }
                    </>:null

            }
        </>  

        {se===2?<h1>No Cources</h1>:null

        }
    </>
  )
}


function Card(props){
    return(
        
        <div>
        <div className='container-fluid'>
            <div className='container my-5'>
                <div className='row align-items-center' style={{borderRadius:"15px",border:"1px solid gray"}} >
                    <div className='col-md-3 text-center '>
                        <img className='img-fluid' src={props.data.CoursePhoto} style={{minHeight:"230px",maxHeight:"230px"}} />
                    </div>
                    <div className='col-6 mt-3'>
                        <h5 style={{fontWeight:'bold'}}>{props.data.CourseName}</h5>
                        <h5><span>Course Duration :-</span>   </h5>
                        <h5 className='text-secondary ms-3'><span> {props.data.CourseDuration}</span>   </h5>
                        <h5><span>Course Price :-</span>   </h5>
                        <h5 className='text-secondary ms-3'><span> {props.data.CoursePrice}</span>   </h5>
                        <h5><span>Enrolled Date :-</span>   </h5>
                        <h5 className='text-secondary ms-3'><span> {props.data.Date}</span>   </h5>
                    </div>
                    <div className='col-md-3 col-6 text-center'>
                            {props.data.CourseStatus==="Under Review"?
                                    <div>
                                     <img  src={underreviewlogo}    style={{width:'60px',height:'60px' }}/>

                                        <p className='m-0 mt-3'>{props.data.CourseStatus}</p>
                                    </div>:null

                            }

                            {props.data.CourseStatus==="Accepted"?
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" style={{color:"gold"}} fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                            </svg>
                                        <p className='m-0 mt-3'>{props.data.CourseStatus}</p>
                                    </div>:null

                            }

                            
                            {props.data.CourseStatus==="Completed"?
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"  style={{color:"gold"}} fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg>
                                        <p className='m-0 mt-3'>{props.data.CourseStatus}</p>
                                    </div>:null

                            }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MyCourses;