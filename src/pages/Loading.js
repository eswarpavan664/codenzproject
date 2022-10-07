import React,{useState,useEffect} from 'react'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {useNavigate} from "react-router-dom";

import Lodi from '../lottiefiles/103879-leaf-loading-animation.json'
 
 
function Loading() {

    let navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('Login');
        }, 9000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
    
               <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>


               <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '380px', width: '380px' }}
                >
                   
                </Player>

                <h3>Result Management System</h3>

               </div>


    </>
  )
}

export default Loading;