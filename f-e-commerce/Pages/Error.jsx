import React, { useContext, useEffect } from 'react'
import UserContext from '../src/context/user/UserContex'
import { useNavigate } from 'react-router-dom';
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
      server is down
    </div>
  )
}

export default Error
