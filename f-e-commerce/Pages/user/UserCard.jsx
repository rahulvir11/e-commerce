import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/users/Navbar";
import Footer from "../../Components/users/Footer";
import UserContext from "../../src/context/user/UserContex";
import Quentity from "../../Components/users/Quentity";
import { useNavigate } from "react-router-dom";
const UserCard = () => {
  const { cart, getUser, User, setBuymultiple, isDisabled } =
    useContext(UserContext);
  const navigator = useNavigate();
  useEffect(() => {
    setBuymultiple([]);
    const isEmpty = (obj) => Object.keys(obj).length === 0;
    if (isEmpty(User)) {
      getUser();
    }
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <h1 className="text-lg font-semibold w-full pl-5">
          {cart.length > 0 ? "your selected products" : "please add item in cart"}
        </h1>
        <div className="w-screen  flex flex-col md:flex-row md:px-[2%] ">
          {/* items */}
          <div className="w-full h-full overflow-y-scroll hidescroll px-3 pb-[15%] ">
            {cart.map((obj) => {
              return (
                <div
                  key={obj._id}
                  className="w-full flex items-start  flex-col lg:flex-row lg:gap-5 mt-5  "
                >
                  {/* item details */}
                  <div className=" shadow-md shadow-black/20 md:p-2 rounded-2xl flex items-start gap-4 w-full flex-shrink-0 lg:w-[30%] ">
                    <div className="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white  overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={obj.image}
                        alt=""
                      />
                    </div>
                    <div className="data py-2 w-full">
                      <h1 className="leading-none font-semibold">
                        {obj.pName}
                      </h1>
                      <h4 className="leading-none mt-2 text-sm font-semibold opacity-20 ">
                        {obj.pDescription}
                      </h4>
                      <h4 className="mt-3 font-semibold text-zinc-500">
                        ₹{obj.pPrice}
                      </h4>
                    </div>
                  </div>
                  {/* quentity increment- decrement */}
                  <Quentity
                    stock={obj.pStock}
                    id={obj._id}
                    price={obj.pPrice}
                    name={obj.pName}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => navigator("/shipping")}
          className="fixed bottom-14 right-5 flex items-center justify-center gap-5 text-white bg-[#1e40af] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring--300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          style={isDisabled ? { opacity: 1 } : { opacity: 0 }}
        >
          {" "}
          buy now
        </button>
        <Footer />
      </div>
    </>
  );
};

export default UserCard;
