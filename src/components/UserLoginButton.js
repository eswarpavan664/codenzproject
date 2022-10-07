import React,{useState} from 'react'

function UserLoginButton() {
  return (
    <div>
        <p className='fw-bold'>User Login</p>
        <p>Find the best answer to your technical question, help others answer theirs</p>
        <Userloginform />
    </div>
  )
}

function Userloginform(){
  const [tgle,settgle] = useState(true);
  const [name,setName] = useState("");
  const [mail,setMail] = useState("");
  const [otp,setOtp] = useState(0);
  return(
    <>
<button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Signup/Login
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Signin/Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label>Name: </label> <input type={"text"} className="rounded" onChange={(e)=>setName(e.target.value)} /><br /><br />
        <label>Email: </label> <input type={"email"} className="rounded" onChange={(e)=>setMail(e.target.value)} /><br /><br />
        {tgle?<div className='btn btn-outline-primary text-right' onClick={()=>settgle(false)}>
          Request OTP
        </div>:
        <div>
          <label>OTP: </label> <input type={"number"} className="rounded" onChange={(e)=>setOtp(e.target.value``)} /><br /><br />
          <div className='btn btn-outline-primary text-right' onClick={()=>settgle(false)}>
          Resend OTP
        </div>
        </div>}
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-info">Submit</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default UserLoginButton;