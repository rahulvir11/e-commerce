import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const Protected = ({ children }) => {
  // console.log(!!localStorage.getItem("rswsit"));
  if (!!localStorage.getItem("rswsit")) {
     return children? children:<Outlet />;
  }
  // console.log(isAuthenticated);
  return <Navigate to={"/login"}/>
};

export default Protected;
