import React,{useState,useEffect} from 'react'
 
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import Header from './../components/Header';
import '../css/Payment.css'
function PaymentPage(props) {


  const navigate = useNavigate();
  const location = useLocation()
  const {CourseData} = location.state;
console.log(CourseData)

  const [transactionid,settransactionid] =useState("");



  const CheckAndPlace=()=>{
    alert("Under Construction....")
  }

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
                <input type="text" id="cvv" name="transaction" placeholder="Transaction Id" />
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