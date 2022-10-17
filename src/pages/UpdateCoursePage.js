/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import Header from './../components/Header';
import { useLocation,useNavigate } from 'react-router-dom';
import { Ip } from './../constants/Ip';

import { getDatabase, set ,push,child,onValue} from "firebase/database";
import { storage ,databaseref,app,auth,database} from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function UpdateCoursePage(props) {

    const token =localStorage.getItem('token');
    const role=localStorage.getItem('Role');
  
  
    
  
    const navigate = useNavigate();
    const location = useLocation()
    const {Data} = location.state;



    
const [Coursename,setCoursename] =useState( Data.CourseName);
const [Courseduration,setCourseduration] =useState( Data.CourseDuration);
const [Courseprice,setCourseprice] =useState( Data.CoursePrice);
const [Coursediscription,setCoursediscription] =useState( Data.CourseDiscription);
 
const [Coursephoto,setCourseCoursephoto] =useState( Data.CoursePhoto);


const [imgUrl, setImgUrl] = useState(null);
const [progresspercent, setProgresspercent] = useState(0);


var p = null;
const handleSubmit = (e) => {
  e.preventDefault()
  const file = e.target[0]?.files[0]
  if (file){  
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
          UpdateCourse(p);
          
        });
      }
    );
   } 
   else{
    UpdateCourse(Coursephoto);
   }

 
   
}


const UpdateCourse=(k)=>{
  fetch(Ip+"/UpdateCourseDetails",{
    method:"PUT",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
      
      "Id":Data._id,
      "CourseName":Coursename,
      "CoursePhoto":k,
      "CourseDuration":Courseduration,
      "CoursePrice":Courseprice,
      "CourseDiscription":Coursediscription
   })
  })
  .then(res=>{alert("Updated.")
  navigate('/Dashboard')
   })
}



  return (
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
    <img src={Data.CoursePhoto} className="image-fluid" width={"300px"} height={"500px"}/>
       
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
               
                <div class="row mt-2">
                    <div class="col-md-12"><label class="labels">Course Name</label><input type="text" class="form-control" placeholder="Course Name"  value={Coursename} onChange={(e)=>setCoursename(e.target.value)}/></div>
                       </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Course Price</label><input type="text" class="form-control" placeholder="enter Course Price"  value={Courseprice} onChange={(e)=>setCourseprice(e.target.value) } /></div>
                    <div class="col-md-12"><label class="labels">Course Duration</label><input type="text" class="form-control" placeholder="Course Duration"     value={Courseduration} onChange={(e)=>setCourseduration(e.target.value) }  /></div>
                    <div class="col-md-12"><label class="labels">College Description</label><textarea type="text" class="form-control" placeholder="College Description"   value={Coursediscription} onChange={(e)=>setCoursediscription(e.target.value)} /></div>
                      </div>
                


                      <form onSubmit={handleSubmit} className='form'>
                            <div class="mb-3">
                                 <label>Course Image</label>
                                     <input type='file' />
                                     </div>
       
                                     <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit"  >Update Course</button></div>
                    </form>
                 
            </div>
        </div>
        
    </div>
 
</div>
  )
}

export default UpdateCoursePage