import React,{useState,useEffect} from 'react'
import { Ip } from './../constants/Ip';
import { NavLink, useNavigate } from 'react-router-dom';

import Lottie from 'react-lottie-player'
import underreviewlogo from '../images/clockwise.png'
import animation from '../lottiefiles/lf30_editor_dhwjzrvz.json'
import Header from './../components/Header';

function Applications(props) {
    
    const [Data,setData] =useState();

const role = localStorage.getItem('Role');
const [se,setse]=useState(0);

const [Status,setstatus] =useState("Under Review")
const [TransacId,setTransacId]=useState("");
    const GetApplications=()=>{

        fetch(Ip+'/GetEnrollsForAdmin?status='+Status+"&Tran="+TransacId,{
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


 


    useEffect(()=>{
        GetApplications();
    },[Status,TransacId])
 

  return (
    <>
    <Header role={role}/>

    <div class="d-flex justify-content-around">

<div class="mt-5 text-center"><button class="btn  profile-button"  style={{backgroundColor:Status==="Under Review"?'green':'violet' }}  type="button" onClick={()=>setstatus("Under Review")}>Under Review</button></div>
<div class="mt-5 text-center"><button class="btn   profile-button" style={{backgroundColor:Status==="Accepted"? 'green':'violet'  }}    type="button" onClick={()=>setstatus("Accepted")}>Accepted</button></div>
<div class="mt-5 text-center"><button class="btn   profile-button" style={{backgroundColor:Status==="Completed"?'green':'violet'}}    type="button" onClick={()=>setstatus("Completed")}>Completed</button></div>        

</div>


<div class="input-group mb-3 col-12 text-center mt-3 d-flex justify-content-center" >
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Transaction Id</span>
                  </div>
                 <div>
                 <input type="text" value={TransacId} onChange={(e)=>setTransacId(e.target.value)}   class="form-control col-6" placeholder="Transaction Id" aria-label="Username" aria-describedby="basic-addon1" />
                 </div>
            </div>
    {se===0?<div class="row row-cols-3 row-cols-md-4 g-4"><Lode/> </div>:null}


    
        <>
            {se===1?
                    <>
                     
                    {Data.map((da,i)=>(
                            <>
                           

                            <Application data={da} Status={Status} setstatus={setstatus}/>
                            </>
                        
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


function Application(props){


    const [UpdateStatus,setUpdateStatus]=useState("");

    const UpdateDetails=(sts)=>{
       
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        
        if(sts==="Completed"){
            fetch(Ip+"/UpdateApplicationStatus",{
                method:"PUT",
                headers: {
                 'Content-Type': 'application/json'
               },
               body:JSON.stringify({
                  "Status":sts,
                  "Id":props.data._id,
                  "CourseEndDate":date+"-"+month+"-"+year
               })
              })
              .then(res=>{alert("Updated.")
              props.setstatus(sts)})
        }
        else{
            fetch(Ip+"/UpdateApplicationStatus",{
                method:"PUT",
                headers: {
                 'Content-Type': 'application/json'
               },
               body:JSON.stringify({
                  "Status":sts,
                  "Id":props.data._id,
                  "CourseEndDate":""
               })
              })
              .then(res=>{alert("Updated.")
              props.setstatus(sts)
            })
        }
         

        
      }


      useEffect(()=>{
            console.log("updated")
      },[UpdateStatus])


 
    return(
        <div>

        
        <div className='container-fluid'>
            <NavLink to="/ApplicationDetailsPage"  state={{Data:props.data}}  style={{textDecoration:'none',color:'black'}}>


            <div className='container my-5'>
                <div className='row align-items-center' style={{borderRadius:"15px",border:"1px solid gray"}} >
                    <div className='col-md-3 text-center '>
                        <img className='img-fluid' src={props.data.CoursePhoto} style={{minHeight:"230px",maxHeight:"230px"}} />
                    </div>
                    <div className='col-6 mt-3'>
                        
                        
                        <h6>Name:- {props.data.StudentName}</h6>
                        <h6>Contact:- {props.data.ContactNumber}</h6>
                        <h5 style={{fontWeight:'bold'}}>{props.data.CourseName}</h5>
                         
                        <h5><span>Course Duration</span>   </h5>
                        <h5 className='text-secondary ms-3'><span> {props.data.CourseDuration}</span>   </h5>
                        <h5><span>Course Price</span>   </h5>
                        <h5 className='text-secondary ms-3'><span> {props.data.CoursePrice}</span>   </h5>
                        <h5><span>Enrolled Date</span>   </h5>
                        <h5 className='text-secondary ms-3'><span> {props.data.CourseStartDate}</span>   </h5>
                    </div>
                    <div className='col-md-3 col-6 text-center'>
                            {props.data.CourseStatus==="Under Review"?
                                    <div>
                                     <img  src={underreviewlogo}    style={{width:'60px',height:'60px' }}/>

                                        <p className='m-0 mt-3'>{props.data.CourseStatus}</p>
                                        <p className='m-0 mt-3'> Tran-Id-{props.data.TransactionId}</p>
                                        <div class="mt-2 text-center"><button class="btn btn-primary profile-button" type="button" onClick={()=>UpdateDetails("Accepted")}>Accepted</button></div>

                                        <div class="mt-2 text-center"><button class="btn btn-danger profile-button" type="button" onClick={()=>UpdateDetails("Rejected")}>Rejected</button></div>


                                
                                    </div>:null

                            }

                            {props.data.CourseStatus==="Accepted"?
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" style={{color:"gold"}} fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                            </svg>
                                        <p className='m-0 mt-3'>{props.data.CourseStatus}</p>
                                        <p className='m-0 mt-3'> Tran-Id-{props.data.TransactionId}</p>
                                        <div class="mt-2 text-center"><button class="btn btn-primary profile-button" type="button" onClick={()=>UpdateDetails("Completed")}>Make As Completed</button></div>
                                    </div>:null

                            }

                            
                            {props.data.CourseStatus==="Completed"?
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"  style={{color:"gold"}} fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                        </svg>
                                        <p className='m-0 mt-3'>{props.data.CourseStatus}</p>
                                        <p className='m-0 mt-3'> Tran-Id-{props.data.TransactionId}</p>
                                        
                                    </div>:null

                            }
                    </div>
                </div>
            </div>
            </NavLink>
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


export default Applications;