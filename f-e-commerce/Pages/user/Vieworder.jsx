import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import UserContext from "../../src/context/user/UserContex";
import { useParams } from "react-router-dom";
const Vieworder = () => {
 const {myorders}= useContext(UserContext);
  const [data,setData]=useState({})
  gsap.registerPlugin(useGSAP);
  const container = useRef();
   const {id} = useParams()
  useGSAP(
    () => {
      gsap.from(".box", {
        y: 360,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.from(".left", {
        scale:.2,
        opacity:0,
        duration: 0.8,
        ease: "power3.in",
      });
    },
    { scope: container }
  );
  
 useEffect(()=>{
  const order = myorders.filter((obj)=> obj._id === id )[0]
   setData(order);
  //  console.log(order);
 },[])
  return (
    <div ref={container} className="bg-gray-600 text-white min-h-svh">
      <div className="w-screen flex justify-center overflow-hidden h-[10vh] bg-gray-800">
        <h1 className="box text-center text-[2.5vw] w-fit uppercase font-bold mt-2">
          awsome '{data?.productId?.pName}'
        </h1>
      </div>
      <div className="w-full h-full flex px-10 py-5">
      <div className="right w-1/2 h-full ">
        <div className=" mt-5">
          <h2 className="text-[1.5vw] uppercase">product details</h2>
          <h3>name : {data?.productId?.pName}</h3>
          <h3>quentity : {data?.quantity}</h3>
          <h3>description : {data?.productId?.pDescription}</h3>
          <h3>price :{data?.productId?.pPrice}</h3>
          <h3>receiver address: {data?.address}</h3>
          <h3>status : {data?.status}</h3>
        </div>
      </div>
      <div className="left w-1/2 h-[80vh] bg-red-700 overflow-hidden rounded-lg">
         <img className="w-full h-full object-cover" src={data?.productId?.image} alt="product image" /> 
      </div>
      </div>
      
    </div>
  );
};

export default Vieworder;
