import React,{useEffect,useState} from 'react'
import Lottie from 'react-lottie-player'
import Animation from '../lottiefiles/36609-man-working-at-the-computer.json'
import Navbar from '../components/Navbar'
 
import { getAuth, signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {auth,provider} from '../firebase.js'
import { NavLink, useLocation } from 'react-router-dom';
import { Ip } from './../constants/Ip';
import Header from './../components/Header';


function LoginPage(props) {

    let navigate = useNavigate();

    const detectLogin= async ()=>{
      const token =   localStorage.getItem('token')
       
          if(token){
            navigate('/DashBoard');
          }
          else{
            setScreen(0);
          }
          
          
    }
    useEffect(()=>{
    
      detectLogin();
  },[])
  
  
  
    const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')
  
  const [Screen,setScreen] = useState(1);


  const sendCred = async (em,name,photo,number)=>{

    var id = Math.floor(1000 + Math.random() * 900000);
    const Email =em;
  fetch(Ip+"/StudentUserSignupOrSignin",{
    method:"POST",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
    
    "email":Email,
    "Role":"Student",
    "UserId":id,
    "Name":name,
    "PhoneNumber":number,
    "CollegeId":"",
    "CollegeName":"",
    "Photo":photo
   })
  })
  .then(res=>res.json())
  .then(async (data)=>{
         try {
            localStorage.setItem('token',Email)
            localStorage.setItem('Role',"Student")
            
            navigate('/Profile');
         } catch (e) {
           console.log("error hai",e)
            
         }
  })
  }



  const signInWithGoogle = ()=> {
    signInWithPopup(auth, provider)
    .then((result)=>{
      sendCred(result.user.email,result.user.displayName,result.user.photoURL,result.user.phoneNumber);
    }).catch((error) => {
      console.log(error)
    }); 
  }; 



 
  
  return (
    <>
    <Header/>
         <div className='body'>
         

         <div className='container'>
             <div className='row home_row'>
                 <div className='col-md-5 p-md-5 text-center p-5 student_login'>
                     <h1>Student Login</h1>
                     <p>Here the students have to login, so he/ she can view the cources and enroll into it. He/ she can learn the courses in their dashboard. Happy learning!!</p>
                     <button className='btn btn-outline-dark' onClick={signInWithGoogle}>Continue with google</button>
                 </div>
                 <div className='col-md-5 offset-md-1 p-md-5 text-center p-5 admin_login'>
                     <h1>Admin Login</h1>
                     <p>Here the admins have to login, so the admin can post the courses and he can see the number of students he got and also he can message to his students.</p>
                     
                     <NavLink to="/AdminLogin">
                         <button class="btn btn-outline-dark">Continue as Admin</button>
                     </NavLink>
 
                 </div>
             </div>
         </div>
     </div>
    </>
    

    
  )
}

export default LoginPage;