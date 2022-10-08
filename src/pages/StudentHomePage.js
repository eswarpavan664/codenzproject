import React from 'react'
import Navbar from './../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Header from './../components/Header';
import Lottie from 'react-lottie-player'

import animation from '../lottiefiles/28893-book-loading.json'
import Cources from '../components/Cources';
import Footer from './../components/Footer';

function StudentHomePage(props) {
const navigate =useNavigate();
    const  logout =()=>{
        localStorage.removeItem("token") 
         navigate('/Login')
       
     }
  return (
     <>
        <Temp/>
     </>
  )
}


function Temp(){
   return(
      <>
      <Header/>
         <section className=' container-fluid' style={{backgroundImage:"linear-gradient(#D2DAFF,white )"}}>
            <div className='container'>
            <div className='row align-items-center container' style={{height:"93vh"}}>
        <div className='col-md-6 text-center m-0 p-0'>
            <h5 className='m-0 p-0' style={{letterSpacing:"2px",lineHeight:"24px"}}>“The most profound words will remain unread unless you can keep the learner engaged. You can’t see their eyes to know if they got it so … say it, show it, write it, demo it and link it to an activity.” — James Bates</h5>
        </div>
        <div className='col-md-6 d-none d-md-block'>
        <Lottie
                          loop
                          animationData={animation}
                          play
                          style={{ width: 500, height: 500 }}
                          className={"ing-fluid"}
              />
        </div>
    </div>
            </div>
        </section>
        {/*<section style={{height:"80vh",backgroundImage:"linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",backgroundRepeat:"no-repeat",backgroundSize:"cover",alignItems:"center",textAlign:"center",display:"flex",justifyContent:"center"}}>
            <h1 className='text-light'>Learning Managment System</h1>
        </section>*/}
         <Cources/>

         <Footer/>
      </>
   )
}

export default StudentHomePage;