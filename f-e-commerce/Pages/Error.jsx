import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../src/context/user/UserContex'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
const Error = () => {
 const navigator = useNavigate();
const {  getAllproduct ,setAllproduct} = useContext(UserContext);

useEffect(() => {
 
  
  const myInterval = setInterval(() => {
    getAllproduct().then((data)=>{
      if (data !== undefined) {
        setAllproduct(data);
        clearInterval(myInterval);
        navigator("/");
      }
    }).catch((error)=>{
      console.error(error);
    })
    
  }, 15000);

}, []);

  return (
    <div>
         <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-600">404</h1>  
      <h2 className="text-3xl font-semibold mt-4">{"Oops! Page not found"}</h2>
      <p className="text-lg mt-2 text-gray-700 text-center">
        The page you're looking for doesn't exist.
      </p>
      <NavLink to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-bold hover:bg-blue-700">
        Go Back Home
      </NavLink>
    </div>
    </div>
  )
}

export default Error
