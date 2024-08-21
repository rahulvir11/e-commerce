import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import UserContext from "../../src/context/user/UserContex";
const Navbar = () => {
  const { User } = useContext(UserContext);

  return (
    <>
      <div className=" w-full h-[10vh] flex items-center justify-between gap-4 px-[2%] py-[2.5%] bg-white "
      style={{'backgroundColor': '#FA8BFF',
        'backgroundImage': 'linear-gradient(243deg, #fff 20%, #2BD2FF 90%, #2BFF88 0%)'
        }}
      >
        <div className="logo font-bold text-2xl">Rahul</div>
        <div className="w-[90%] flex items-center justify-end gap-4">
          <input
            className="font-semibold capitalize px-4 py-3 rounded-lg w-[30%] bg-zinc-100/30 outline-none shadow-md "
            type="text"
            placeholder="search"
          />
          <NavLink to={User._id === null ? "/login" : "/logout"}>
            <div className="icon relative rounded-full shadow-md shadow-black/20 px-4 py-3 hover:bg-zinc-700 hover:text-amber-300 group">
              {User._id === null ? (
                <i className="ri-login-box-line"></i>
              ) : (
                <i className="ri-logout-box-line"></i>
              )}
              <p className="absolute w-fit px-2 invisible  text-sm top-0 -left-4 rounded-full text-amber-300 bg-zinc-700 group-hover:visible">
                {User._id === null ? "login" : "logout"}
              </p>
            </div>
          </NavLink>
          <NavLink
            to={User.isAdmin ? "/admin/dashboard" : "/profile"}
            className={`${User._id === null ? "hidden" : "block"}`}
          >
            <div
              className={`icon relative rounded-full shadow-md shadow-black/20 px-4 py-3 hover:bg-zinc-700 hover:text-amber-300 group `}
            >
              {User.isAdmin ? (
                <i className="ri-admin-line"></i>
              ) : (
                <i className="ri-user-3-line"></i>
              )}
              <p className="absolute w-fit px-2 invisible  text-sm top-0 -left-6 rounded-full text-amber-300 bg-zinc-700 group-hover:visible">
                {User.isAdmin ? "admin" : "profile"}
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
