import React,{useEffect,useState} from 'react'


import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {useNavigate} from "react-router-dom";
import Lodi from '../lottiefiles/94217-check-right.json'
 
function EnrollLoading(props) {
   
    let navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('/Profile');
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
    <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}> 
               <div  >


               <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '490px', width: '490px' }}
                >
                   
                </Player>

                 
               </div>

</div>
    </>
  )
}
 

export default  EnrollLoading;