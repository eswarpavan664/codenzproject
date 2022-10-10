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
         <Temp topics={topics} CourseData={CourseData}/>
         <Footer/>
     </>
  )
}


function Temp(props){



    return(
    <div>
        <header className='mb-5'>
            <div className='container-fluid' style={{background:"linear-gradient(to bottom, #A5C9CA 0%,#A5C9CA 50%,white 50%, white 100%)"}}>
                <div className='container'>
                    <h4>{props.CourseData.CourseName}</h4>
                    <p>Duration: <span>{props.CourseData.CourseDuration}</span></p>
                    <div className='row align-items-center rounded p-1' style={{background:"#7A86B6"}}>
                        <div className='col-md-4 text-center rounded' style={{background:"#F5EFE6"}}>
                            <img className='img-fluid' src={props.CourseData.CoursePhoto} width={"60%"}  />
                        </div>
                        <div className='col-md-8 text-light ' >
                            <h5>Course Description</h5>
                            <p>{props.CourseData.CourseDiscription}</p>
                            <NavLink to="/Payment"
                
                    state={{

                        CourseData:props.CourseData
                        

                        }}>
                            <button className='btn btn-outline-light'>Enroll</button>
                       </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className='container'>
            <hr />
        </div>
        <section className='container-fluid'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-4 text-center'>
                 
                    </div>
                    <div className='col-md-8'>
                        <h5>Topics covered in this course</h5>
                        <ol>
                        {props.topics.map((to,i)=>(
                                <li>{to}</li>
                            ))

                            }
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
}
export default CourseDetailsPage;


 