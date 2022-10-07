import React from 'react';
import User from '../images/user.png';
import { Input, Space } from 'antd';
import {
 NavLink
} from "react-router-dom";
function Header(props) {
  const { Search } = Input;
  const onSearch = value => console.log(value);
  return (
    <div className='nav_head'>
        <div  className='navbar_brand container'>
          <div>
            <h4>CS CODENZ</h4>
          </div>
          
          {props.rol==="Student" || props.rol==="Admin"?
          <>

         {/* <Search placeholder="search course" onSearch={onSearch} enterButton className='search_bar' />*/}
        
          <NavLink to={{
              pathname:"/Student_Dashboard",
              details:{proimg:"image"}
            }}><img className='img-fluid ' src={User} width='50'/></NavLink> 
          </>
          :null
          }
 
        </div>
    </div>
    
   
  )
}
export default Header;