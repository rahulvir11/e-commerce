import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className="footer flex items-center justify-between px-10 fixed bottom-0 left-0 w-full py-2 bg-slate-300">
            <div className="flex gap-10">
             <NavLink to={"/"}> <i className="text-xl text-[#69628a] ri-home-2-fill"></i></NavLink>
                <i className="text-xl opacity-20 ri-heart-fill"></i>
            </div>
            <NavLink to={"/order"} >
            <i
                className="text-xl absolute shader top-0 left-1/2 -translate-y-1/4 -translate-x-1/2 flex items-center justify-center rounded-full shadow-xl shadow-black/30 w-[3rem] h-[3rem] ri-shopping-bag-fill text-yellow-400"></i>
            </NavLink>
            
            <div className="flex gap-10">
                <i className="text-xl opacity-20 ri-settings-fill"></i>
               <NavLink to={"/card"} ><i className="ri-shopping-cart-2-line"></i></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Footer
