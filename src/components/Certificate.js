/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import qr from '../images/WhatsApp Image 2022-10-15 at 7.50.57 PM.jpeg'
import sign from '../images/WhatsApp Image 2022-10-15 at 7.50.57 PM (1).jpeg'
import ReactToPdf from 'react-to-pdf'
import '../css/certificate.css'
function Certificate(props) {

    const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'px',
    format: [744,355]
};



  return (
    <>
    <div  class="visually-hidden">
        <div className='certificate' style={{width:"1650px",height:"1675px"}} ref = {ref}>
            <div className='certificate-header' style={{background:"#790252",margin:"0",padding:"0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px"}}>
                <div className='certificate-header-left' style={{display:"flex",alignItems:"center"}}>
                    <img src='https://static.wixstatic.com/media/7ecd54_045923b0da9048e0b11755447a16ceac~mv2.png/v1/fill/w_89,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png' />
                    <h1 style={{margin:"0",padding:"0",color:"white"}}>CS CODENZ</h1>
                </div>
                <div className='certificate-header-right'>
                    <h4 style={{margin:"0",padding:"0",color:"white"}}>www.cscodenz.com</h4>
                </div>
            </div>
            <div className='certificate-body' style={{textAlign:"center",marginBottom:'5%'}}>
                <h1 style={{margin:"40px",color:"red"}}>Certificate of Completion</h1>
                <h4 style={{marginBottom:"40px",padding:"0"}}>This is to certify that</h4>
                <h3 style={{marginBottom:"40px"}}>pavaneswar</h3>
                <h4>has successfully completed Course</h4>
                <h4>{props.CourseName}</h4>
                <h4>from xx-xx-xxxx to xx-xx-xxxx with <span style={{color:"red"}}>xx%</span></h4>
            </div>
            <div className='certificate-body-signs' style={{display:"flex",justifyContent:"space-evenly",alignItems:"center" }}>
                <div className='certificate-left-qrCode' style={{textAlign:"center"}}>
                    <img src={qr} className='img-fluid' width={"100"} />
                    <p  style={{margin:"0",padding:"0",color:"lightgray"}}>For Verification of this Certificate Scan the QR Code</p>
                </div>
                <div className='certificate-middle-stamp'>
                    <img src={qr} className="img-fluid" width={"120"} />
                </div>
                <div className='certificate-right-sign' style={{textAlign:"center"}}>
                    <img src={sign} style={{borderBottom:"2px solid red"}} />
                    <p style={{margin:"0",padding:"0",color:"green",fontWeight:"bolder",fontSize:"24px"}}>Er. Y V D Chandra Sekhar <span style={{color:"brown"}}>(B.Tech Hons.)</span></p>
                    <p style={{margin:"0",padding:"0",color:"blue",fontWeight:"bolder"}}>Founder & CEO, CS CONDENZ,</p>
                    <p style={{margin:"0",padding:"0",color:"blue",fontWeight:"bolder"}}>Data Analyst at CONIODO, USA</p>
                </div>
            </div>
            <div className='certificate-footer' style={{background:"#790252",color:"white",display:'flex',justifyContent:"space-between",padding:"0 20px"}}>
                <div className='certificate-footer-left'>
                    <p style={{margin:"0",padding:"0",fontSize:"16px"}}>CS CODENZ Educational Society</p>
                    <p style={{margin:"0",padding:"0",fontSize:"16px"}}>(Regd by Govt.A.P-124/2021)</p>
                    <p style={{margin:"0",padding:"0",fontSize:"16px"}}>Estd. 2021</p>
                    <p style={{margin:"0",padding:"0",fontSize:"16px"}}>www.cscodenz.org</p>
                </div>
                <div className='certificate-footer-left'>
                    <p style={{margin:"0",padding:"0",fontSize:"16px"}}>Contact Information:</p>
                    <p style={{margin:"0",padding:"0",fontSize:"16px"}}>7036579353, 7032779317</p>
                    <p style={{margin:"0",padding:"0",fontSize:"16px"}}>Er. Y V D Chandra Sekhar</p>
                    <p style={{margin:"0",padding:"0",fontSize:"16px"}}>Founder & CEO, CS CODENZ</p>
                </div>
            </div>
        </div>
        <div>
 
    
</div>
     
    </div>

    <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
        {({toPdf}) => (
            <button onClick={toPdf} class="btn btn-primary profile-button">Download Certificate</button>
        )}
    </ReactToPdf>
    
    </>
  )
}

export default Certificate;

 