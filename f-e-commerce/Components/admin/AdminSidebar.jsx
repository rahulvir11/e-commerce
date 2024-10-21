import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { RiProductHuntLine, RiCoupon3Fill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";
import UserContext from "../../src/context/user/UserContex";
const AdminSidebar = () => {
  const {
    getAlluser,
    getAlltransaction,
    trans,setTrans,
    allUsers,
    setAlluser,
  } = useContext(UserContext);
  useEffect(() => {
   
    if (trans.length === 0) {
      getAlltransaction()
        .then((data) => {
          if (data === undefined) {
            navigator("/error");
          } else {
            // console.log(data);
            setTrans(data);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    if (allUsers.length === 0) {
      getAlluser()
        .then((data) => {
          // console.log(data);
          if (data === undefined) {
            navigator("/error");
          } else {
            setAlluser(data);
            // console.log(data);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);
  return (
    <>
      <div className="bg-white w-[15%] h-[100vh] p-2">
        <ul className="mt-4">
          <h1 className="pl-2">DASHBOARD</h1>
          <li
            className={`w-full flex items-center justify-start pl-5 my-1 rounded-md ${
              location.pathname.toString() === "/admin/dashboard" &&
              "bg-blue-500/90 text-zinc-200"
            }`}
          >
            <RxDashboard size=".9rem" />
            <NavLink className="pl-2 pb-1" to={"/admin/dashboard"}>
              deshboard{" "}
            </NavLink>
          </li>
          <li
            className={`w-full flex items-center justify-start pl-5 my-1 rounded-md ${
              location.pathname.toString() === "/admin/product" &&
              "bg-blue-500/90 text-zinc-200"
            }`}
          >
            <RiProductHuntLine size=".9rem" />
            <NavLink className="pl-2 pb-1" to={"/admin/product"}>
              {" "}
              products
            </NavLink>
          </li>
          <li
            className={`w-full flex items-center justify-start pl-5 my-1 rounded-md ${
              location.pathname.toString() === "/admin/transaction" &&
              "bg-blue-500/90 text-zinc-200"
            }`}
          >
            <GrTransaction size=".9rem" />
            <NavLink className="pl-2 pb-1" to={"/admin/transaction"}>
              transactions
            </NavLink>
          </li>
          <li
            className={`w-full flex items-center justify-start pl-5 my-1 rounded-md ${
              location.pathname.toString() === "/admin/customer" &&
              "bg-blue-500/90 text-zinc-200"
            }`}
          >
            <FaUsers size=".9rem" />
            <NavLink className="pl-2 pb-1" to={"/admin/customer"}>
              customers
            </NavLink>
          </li>
        </ul>
        <ul className="mt-4">
          <h1 className="pl-2">CHARTS</h1>
          <li
            className={`w-full flex items-center justify-start pl-5 my-1 rounded-md ${
              location.pathname.toString() === "/admin/chart/bar" &&
              "bg-blue-500/90 text-zinc-200"
            }`}
          >
            <FaChartBar size=".9rem" />
            <NavLink className="pl-2 pb-1" to={"/admin/chart/bar"}>
              Bar
            </NavLink>
          </li>
          <li
            className={`w-full flex items-center justify-start pl-5 my-1 rounded-md ${
              location.pathname.toString() === "/admin/chart/pie" &&
              "bg-blue-500/90 text-zinc-200"
            }`}
          >
            <FaChartPie size=".9rem" />
            <NavLink className="pl-2 pb-1" to={"/admin/chart/pie"}>
              Pie
            </NavLink>
          </li>
          <li
            className={`w-full flex items-center justify-start pl-5 my-1 rounded-md ${
              location.pathname.toString() === "/admin/chart/line" &&
              "bg-blue-500/90 text-zinc-200"
            }`}
          >
            <FaChartLine size=".9rem" />
            <NavLink className="pl-2 pb-1" to={"/admin/chart/line"}>
              Line
            </NavLink>
          </li>
        </ul>
        <ul className="mt-4">
          <h1 className="pl-2">APPS</h1>
          <li
            className={`w-full flex items-center justify-start pl-5 my-1 rounded-md ${
              location.pathname.toString() === "/admin/app/toss" &&
              "bg-blue-500/90 text-zinc-200"
            }`}
          >
            <FaGamepad size=".9rem" />
            <NavLink className="pl-2 pb-1" to={"/admin/app/toss"}>
              Toss
            </NavLink>
          </li>
          <li
            className={`w-full flex items-center justify-start pl-5 my-1 rounded-md ${
              location.pathname.toString() === "/admin/app/coupon" &&
              "bg-blue-500/90 text-zinc-200"
            }`}
          >
            <RiCoupon3Fill size=".9rem" />
            <NavLink className="pl-2 pb-1" to={"/profile"}>
              profile
            </NavLink>
          </li>
          <li
            className={`w-full flex items-center justify-start pl-5 my-1 rounded-md ${
              location.pathname.toString() === "/admin/app/stopwatch" &&
              "bg-blue-500/90 text-zinc-200"
            }`}
          >
            <FaStopwatch size=".9rem" />
            <NavLink className="pl-2 pb-1" to={"/admin/app/stopwatch"}>
              StopWatch
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
