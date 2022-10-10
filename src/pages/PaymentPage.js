import React,{useState,useEffect} from 'react'
 
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import Header from './../components/Header';
import '../css/Payment.css'
import { Ip } from './../constants/Ip';

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
    if(Data){
      fetch(Ip+"/PlaceEnrollment",{
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
        "CourseStatus":"Under Review"
       })
      })
      .then(res=>res.json())
      .then(data=>{ 
      
        console.log(data)
           
         
      }
      )
    }
  }


//PlaceEnrollment

  return (
    <body>

  
 
<div class="row">
  <div class="col-75">
    <div class="container" style={{backgroundColor: '#f2f2f2',padding:'5px 20px 15px 20px',border:'1px solid lightgrey',borderRadius:'3px'}}>
      <form  >
      
        <div class="row">
          

          <div class="col-50">
            <h3>Payment</h3>
          
              <div>
                <p>Course Name:-{CourseData.CourseName}</p>
                <p>Course Price:- ₹{CourseData.CoursePrice}</p>
                <p>Course Duration:- {CourseData.CourseDuration}</p>

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
       <button class="btn" onClick={CheckAndPlace}>Place Order</button>
    </div>
  </div>
 
</div>

</body>
  )
}

export default PaymentPage;