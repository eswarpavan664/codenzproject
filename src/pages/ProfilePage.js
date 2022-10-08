import React from 'react'
import Footer from '../components/Footer';
import Header from './../components/Header';

function ProfilePage(props) {
    const token =localStorage.getItem('token');
  return (
     <>
     <Header/>
     <div>
            <h1>ProfilePage</h1> 
            <p>Logged Email id:- {token}</p>
     
     </div>
   
     </>
  )
}

export default ProfilePage;