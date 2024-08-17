import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../../src/context/user/UserContex";
const Shipping = () => {
  const navigate=useNavigate();
  const { buymultiple,orderandsave,showOrderPage} = useContext(UserContext);
  const [shippingInfo, setShippingInfo] = useState({
    homeNo: "",
    subdistrict: "",
    district: "",
    state: "",
    country: "",
    pinCode: "",
  });

  useEffect(()=>{
    if(showOrderPage){
      navigate("/order");
    }
  },[showOrderPage])
  const handleInput = (e) => {
    const { name, value } = e.target;
  
    // Check if the input type is number
    const isNumberInput = e.target.type === "number";
  
    // Set the value based on the input type
    const processedValue = isNumberInput ? parseInt(value) : value;
  
    setShippingInfo({
      ...shippingInfo,
      [name]: processedValue,
    });
  };
  

const handlSubmit = async (e) => {
    e.preventDefault();
    orderandsave(shippingInfo)
};

  return (
    <section className="w-screen md:h-screen bg-gray-50 dark:bg-gray-900 box-border gap-10 p-[4%] flex items-center justify-center overflow-auto flex-col md:flex-row ">
      <div className=" w-[90%] md:w-1/2 xl:w-[35%] bg-white rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-2  space-y-2  sm:p-8 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
            Fill the details
          </h1>
          <form >
            {/* homeNo */}
            <div>
              <label
                htmlFor="homeNo"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your homeNo
              </label>
              <input
                type="number"
                required={true}
                name="homeNo"
                id="homeNo"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter house noumber"
                value={shippingInfo.homeNo}
                onChange={handleInput}
              />
            </div>
            {/* subdistrict */}
            <div>
              <label
                htmlFor="subdistrict"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your subdistrict
              </label>
              <input
                type="text"
                name="subdistrict"
                id="subdistrict"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your subdistrict"
                required
                value={shippingInfo.subdistrict}
                onChange={handleInput}
              />
            </div>
            {/* district */}
            <div>
              <label
                htmlFor="district"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                enter Your district
              </label>
              <input
                type="text"
                name="district"
                id="district"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="enter your district"
                required
                value={shippingInfo.district}
                onChange={handleInput}
              />
            </div>
            {/* state */}
            <div>
              <label
                htmlFor="state"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your state
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your state name"
                required
                value={shippingInfo.state}
                onChange={handleInput}
              />
            </div>
            {/* country */}
            <div>
              <label
                htmlFor="state"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your country
              </label>
              <select
                name="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                defaultValue={shippingInfo.country}
                onChange={handleInput}
              >
                <option value={""}>Choose enter</option>
                <option value="india">india</option>
                <option value="uk">uk</option>
                <option value="chaina">chaina</option>
              </select>
            </div>
            {/* pincode */}
            <div>
              <label
                htmlFor="pinCode"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your pinCode
              </label>
              <input
                type="number"
                name="pinCode"
                id="pinCode"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your pinCode name"
                required
                value={shippingInfo.pinCode}
                onChange={handleInput}
              />
            </div>
          
            {/* submit button */}
            <button
              type="submit"
              className="w-full mt-5 text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={handlSubmit}
            >
              PAY NOW
            </button>
            {/* back button */}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center ">
              <NavLink to={"/card"}>go to back →</NavLink>
            </p>
          </form>
        </div>
      </div>
      <div>
        <table className="w-full text-white text-center" cellPadding="5">
          <thead>
            <tr className="border-b-2 border-gray-500">
              <th className="uppercase font-bold text-lg">name</th>
              <th className=" uppercase font-bold text-lg">price</th>
              <th className=" uppercase font-bold text-lg">quantity</th>
              <th className=" uppercase font-bold text-lg">subtotal</th>
            </tr>
          </thead>
          <tbody>
            {buymultiple.map((obj, index) => (
              <tr key={index} className="border-b-2 text-white border-gray-500">
                <td className=" text-lg">{obj.name}</td>
                <td className=" text-lg">₹{obj.price}</td>
                <td className=" text-lg">{obj.quantity}</td>
                <td className=" text-lg">₹{obj.price * obj.quantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2"></td>
              <th>Total</th>
              <td>
                {/* Calculate total here */}₹
                {buymultiple.reduce(
                  (total, obj) => total + obj.price * obj.quantity,
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default Shipping;
// {

