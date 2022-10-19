import React,{useState,useEffect} from 'react'
 
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import Header from './../components/Header';
import '../css/Payment.css'
import { Ip } from './../constants/Ip';
import qrCode from '../images/WhatsApp Image 2022-10-15 at 7.09.21 PM.jpeg'
import EnrollLoading from './../components/EnrollLoading';
function PaymentPage(props) {


  const navigate = useNavigate();
  const location = useLocation()
  const {CourseData} = location.state;
//console.log(CourseData)

  const [transactionid,settransactionid] =useState("");
  const token =localStorage.getItem('token');
  const [Data,setData] =useState();

  const UserDetails=()=>{
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

  useEffect(()=>{
    UserDetails();
  })


  const CheckAndPlace=()=>{
    var id = Math.floor(1000 + Math.random() * 900000);
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    if(transactionid===""){
      alert("Transaction Id Is Mandatory")
    }
    else if(Data){

        if(Data.CollegeId!=="" && Data.CollegeName !=="" && Data.PhoneNumber!==""){

     

      fetch(Ip+"/EnrollCourses",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
       },
       body:JSON.stringify({
        "StudentName":Data?Data.Name:"",
        "ContactNumber":Data?Data.PhoneNumber:"",
        "StudentId":Data?Data.UserId:"",
        "CourseName":CourseData.CourseName,
        "CoursePhoto":CourseData.CoursePhoto,
        "CourseDuration":CourseData.CourseDuration,
        "CoursePrice":CourseData.CoursePrice,
        "CourseId":CourseData.CourseId,
        "TransactionId":transactionid,
        "CourseStatus":"Under Review",
        "StudentEmailId":token,
        "CourseStartDate":date+"-"+month+"-"+year,
        "EnrollmentId":id,
        "CollegeName":Data?Data.CollegeName:"",
        "CollegeId": Data?Data.CollegeId:"",
        "CourseEndDate":""
       })
      })
      .then(res=>res.json())
      .then(data=>{ 
      
        if(data.Status==="No"){
          alert("Please Check the Transaction Id It is Already in Use")
        }
        else{
          alert("Course Enrolled Successfully And Your Application Under Review")
          SendOrderToAdmin(); 
          setLod(1);

           navigate('/MyCourses');
        }
           
         
      }
      )
    }
    else{
      alert("Please Update your Profile ")
      navigate('/Profile');
    }
    }
  }


  const SendOrderToAdmin=()=>{


    fetch(Ip+'/sendOrderAsSms?CustomerName='+Data?Data.Name:null+"&PhoneNumber="+Data?Data.PhoneNumber:null+"&OrderId="+transactionid,{
      headers:new Headers({
        Authorization:"Bearer " 
      })
      }).then(res=>res.json())
      
      .then(data=>{ 
      
        console.log("done");
       
      }
      )

  }


//PlaceEnrollment
const [lod,setLod] = useState(0);
  return (
    <body>

  
    {lod===0?
<div class="row">
  <div class="col-75">
    <div class="container" style={{backgroundColor: '#f2f2f2',padding:'5px 20px 15px 20px',border:'1px solid lightgrey',borderRadius:'3px'}}>
      <form  >
      
        <div class="row">
          

          <div  >
            <h3>Payment</h3>
          
              <div className='row'>
                 <div className='col-6'>
                    <p>Course Name:-{CourseData.CourseName}</p>
                    <p>Course Price:- ₹{CourseData.CoursePrice}</p>
                    <p>Course Duration:- {CourseData.CourseDuration}</p>
                  </div>

                 <div className='col-6'>
                    <img src={qrCode} width="180px" height="180px"/>
                    <h6 className='ml-5'>Contact No : 90594 05924</h6>
                 </div>

              </div>
            <div class="row mt-4">
               
              <div class="col-50">
                <label for="cvv">Transaction Id</label>
                <input type="text" id="cvv" name="transaction" placeholder="Transaction Id" value={transactionid}  onChange={(e)=>settransactionid(e.target.value)}/>
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr" /> Just Enter Your Transaction Id and checkout
        </label>
       
      </form>
      <div className='row'>
          <button className='btn btn-success col-8 offset-2' onClick={CheckAndPlace}>Place Order</button>
        </div>
        
    </div>
  </div>
 
</div>:null

    }

</body>
  )
}

export default PaymentPage;