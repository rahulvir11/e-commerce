import React ,{ useContext,useEffect }from 'react'
import {  useNavigate } from "react-router-dom";
import UserContext from "../../src/context/user/UserContex";
const Logout = () => {
    const {logoutUser} = useContext(UserContext);
    const nav = useNavigate();
    useEffect(()=>{
        localStorage.removeItem("rswsit");
        logoutUser();
        nav("/login");


    },[])
  return (
    <div>
      
    </div>
  )
}

export default Logout
