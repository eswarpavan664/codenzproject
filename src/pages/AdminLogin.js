import React,{useState,useEffect} from 'react';
 
import '../css/style.css';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth,provider} from '../../src/firebase'
import Dashboard from './Dashboard';

import { useNavigate } from 'react-router-dom';
import { Ip } from './../constants/Ip';

function AdminLogin() {

const navigate =useNavigate();

  const [Form,setForm] = useState(true);

  const [email,setemail] = useState("");
  const [password,setpassword] =useState("");

  




 const sendCred = async (props)=>{
  fetch(Ip+"/AdminSignin",{
    method:"POST",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
     "email":email,
     "password":password
   })
  })
  .then(res=>res.json())
  .then(async (data)=>{
         try {
            localStorage.setItem('token',data.token)
            localStorage.setItem('Role',"Admin")
             
            navigate('/Dashboard');
         } catch (e) {
           console.log("error hai",e)
            
         }
  })
  }

  return (
    <div className='admin_'>
       

        <div>
            <div className='container admin_con_1'>

               
                <div>
                  <form className='admin_login_form'>
                    <h3 className='text-center'>Admin Login</h3>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setemail(e.target.value)}/>
                      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                    <div className='text-center'>
                        
                    </div>
                </form>
                <button type="submit" class="btn btn-outline-success" onClick={sendCred}>Login</button><hr/>
                     
                </div>
                
                
              
               
                
                </div>
                
                
                
          

            </div>
        </div>
   
  )
}



  

export default AdminLogin;