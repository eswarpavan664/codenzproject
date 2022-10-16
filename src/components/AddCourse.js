import React,{useState,useEffect} from 'react'
import Footer from './Footer';
import Header from './Header';
import { Ip } from './../constants/Ip';

import { getDatabase, set ,push,child,onValue} from "firebase/database";
import { storage ,databaseref,app,auth,database} from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
function AddCourse(props) {
    const role =localStorage.getItem('Role');
  
  
  const [CourseName,setCourseName]=useState("");
  const [CoursePhoto,setCoursePhoto]=useState("");
  const [CourseDate,setCourseDate]=useState("");
  const [CourseTime,setCourseTime]=useState("");
  const [CourseDuration,setCourseDuration]=useState("");
  const [CoursePrice,setCoursePrice]=useState("");
  const [CourseDiscription,setCourseDiscription]=useState("");
  const [CourseTopics,setCourseTopics]=useState("");
  



  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);


  var p = null;
  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
          p = downloadURL;
          console.log(p);
          AddCourse(p);
        });
      }
    );

   
     
  }



  const AddCourse=(p)=>{
    var id = Math.floor(1000 + Math.random() * 900000);
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();


    var time = new Date();
    
    var t=time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      fetch(Ip+"/AddCourses",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
       },
       body:JSON.stringify({
        "CourseName":CourseName,
        "CoursePhoto":p,
        "CourseDate":date+"-"+month+"-"+year,
        "CourseTime": t,
        "CourseDuration":CourseDuration,
        "CoursePrice":CoursePrice,
        "CourseId":id,
        "CourseDiscription":CourseDiscription,
        "CourseTopics":CourseTopics
       })
      })
      .then(res=>res.json())
      .then(data=>{ 
      
        alert("done")
        setCourseName("");
         
      }
      )
  
  }

 

    return (
    <>
    <Header role={role}/>
        <h1>Add New Course</h1>
        <div class="container">
        
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center ">
                    
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Course Name</label><input onChange={(e)=>setCourseName(e.target.value)} value={ CourseName}  type="text" class="form-control" placeholder="Course Name"  /></div>
                       </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Course Duration</label><input      onChange={(e)=>setCourseDuration(e.target.value)} value={CourseDuration}  type="text" class="form-control" placeholder="Course Duration"    /></div>
                    <div class="col-md-12"><label class="labels">Course Price</label><input         onChange={(e)=>setCoursePrice(e.target.value)} value={CoursePrice}  type="text" class="form-control" placeholder="Course Priced"                /></div>
                    <div class="col-md-12"><label class="labels">Course Descriptions</label><input  onChange={(e)=>setCourseDiscription(e.target.value)} value={CourseDiscription}  type="text" class="form-control" placeholder="Course Descriptions"   /></div>
                      
                    <div class="col-md-12"><label class="labels">Course Topics(topic1-topic2..)</label><input  onChange={(e)=>setCourseTopics(e.target.value)} value={CourseTopics}  type="text" class="form-control" placeholder="Course Descriptions"   /></div>
                   
                      
                      </div>
                
              
            </div>
            <form onSubmit={handleSubmit} className='form'>
      <div class="mb-3">
                <label>Course Image</label>
                <input type='file' />
              </div>
       
        <button type='submit' class="btn btn-outline-primary text-center" >Add</button>
      </form>
        </div> 
        
    </div>
     
   
    </>
  )
}

export default AddCourse;