/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer';
import Header from './../components/Header';
import { Ip } from './../constants/Ip';
import { useNavigate } from 'react-router-dom';

function ProfilePage(props) {
    const token =localStorage.getItem('token');

    const role =localStorage.getItem('Role');

    console.log("jkdkbfds = ",token)



    const [Data,setData] =useState();


    const GetUser=()=>{
         if(role==="Admin"){
            fetch(Ip+'/GetAdmin?email='+token,{
                headers:new Headers({
                  Authorization:"Bearer " 
                })
                }).then(res=>res.json())
                .then(data=>{ 
                
                  //console.log(data)
                    setData(data[0]);
                   
                }
                )
         }
         else{
            fetch(Ip+'/GetStudent?email='+token,{
                headers:new Headers({
                  Authorization:"Bearer " 
                })
                }).then(res=>res.json())
                .then(data=>{ 
                
                  //console.log(data)
                    setData(data[0]);
                   
                }
                )
         }
    } 
    useEffect(()=>{
        GetUser();
    })   



  return (
     <>

     <Header  role={role}/>
     
        {Data?role==="Admin"?<AdminProfile Data={Data}/>:<Profile Data={Data}/>:null}
     </>
  )
}







function Profile(props){



  const [Name,setName] =useState(props.Data.Name);
  const [email,setemail] =useState(props.Data.email);
  const [PhoneNumber,setPhoneNumber] =useState(props.Data.PhoneNumber);
  const [CollegeId,setCollegeId] =useState(props.Data.CollegeId);
  const [CollegeName,setCollegeName] =useState(props.Data.CollegeName);

  const UpdateDetails=()=>{
    fetch(Ip+"/UpdateUserDetails",{
      method:"PUT",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
      "email":props.Data.email,
      "Name":Name,
       "PhoneNumber":PhoneNumber,
       "CollegeId":CollegeId,
       "CollegeName":CollegeName,
      "Id":props.Data._id
     })
    })
    .then(res=>alert("Updated."))
  }
 
 

  const navigate =useNavigate();
  const  logout =()=>{
      localStorage.removeItem("token") 
       navigate('/Login')
     
   }
   console.log(props.Data.Photo)

  return(
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img class="rounded-circle mt-5" width="150px" src={props.Data.Photo?props.Data.Photo:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"} /><span class="font-weight-bold">{props.Data.Name}</span><span class="text-black-50">{props.Data.email}</span><span> </span></div>
        
            <div class="text-center" style={{width:80,borderRadius:15,marginLeft:'40%'}}><button class="btn btn-primary profile-button" type="button" onClick={logout}>Logout</button></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value={Name} onChange={(e)=>setName(e.target.value)}/></div>
                       </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/></div>
                    <div class="col-md-12"><label class="labels">College Id</label><input type="text" class="form-control" placeholder="enter College Id" value={CollegeId} onChange={(e)=>setCollegeId(e.target.value)}/></div>
                    <div class="col-md-12"><label class="labels">College Name</label><input type="text" class="form-control" placeholder="enter College Name" value={CollegeName} onChange={(e)=>setCollegeName(e.target.value)} /></div>
                      </div>
                
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={UpdateDetails}>Update Profile</button></div>
            </div>
        </div>
        
    </div>
</div>
 
 
  )
}



function AdminProfile(props){

 
 
 
  console.log(props.data)
  const navigate =useNavigate();
  const  logout =()=>{
      localStorage.removeItem("token") 
       navigate('/Login')
     
   }

  return(
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <h1 className='text-center'>Admin Profile</h1>
    <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img class="rounded-circle mt-5" width="150px" src={props.Data.Photo?props.Data.Photo:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"} /><span class="font-weight-bold">{props.Data.Name}</span><span class="text-black-50">{props.Data.email}</span><span> </span></div>
        
            <div class="text-center" style={{width:80,borderRadius:15,marginLeft:'40%'}}><button class="btn btn-primary profile-button" type="button" onClick={logout}>Logout</button></div>
        </div>
                 
    </div>
</div>
 
 
  )
}

export default ProfilePage;