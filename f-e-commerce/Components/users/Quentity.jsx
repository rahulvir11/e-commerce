import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../src/context/user/UserContex";
import { IoIosAdd } from "react-icons/io";
import { MdDownloadDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const quantity = ({ stock, id, price, name}) => {
  const navigator=useNavigate();
  const { cart, setCart, authToken ,buymultiple,setBuymultiple,isDisabled, setisDisabled} = useContext(UserContext);
  const [quantity, setquantity] = useState(1);
  const [localisDisabled, setlocalisDisabled] = useState(false);

  const increment = () => {
    setquantity(quantity < stock ? quantity + 1 : stock);
  };

  const decrement = () => {
    setquantity(quantity > 1 ? quantity - 1 : 1);
  };
  const removeItem = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/cartremove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          AuthToken: authToken,
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        const newItems = cart.filter((obj) => obj._id !== id);
        setCart(newItems);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const checkout = ()=>{
    setlocalisDisabled(!localisDisabled);
    const obj ={
        "id":id,
        "quantity":quantity,
        "price":price*quantity,
        "name":name,
        "discount":parseInt(((price * quantity) / 100) * 0.5),
        "tax":parseInt(((price * quantity) / 100) * 0.3),
    }
    if (!localisDisabled) {
      setBuymultiple(buymultiple.concat(obj));
    }else{
      setBuymultiple(buymultiple.filter((o)=>o.id!==id));
    }
  }
  useEffect(()=>{
    if (buymultiple.length === 0) {
      setisDisabled(false);
    }else if(buymultiple.length > 0){
      setisDisabled(true);
    }
  },[buymultiple])
  const buy = ()=>{
      const obj ={
        "id":id,
        "quantity":quantity,
        "price":price*quantity,
        "name":name,
        "discount":parseInt(((price * quantity) / 100) * 0.5),
        "tax":parseInt(((price * quantity) / 100) * 0.3),
      }
      setBuymultiple(buymultiple.concat(obj));
      navigator("/shipping");
  }
  return (
    <>
      <div className="w-full flex items-start md:gap-7 flex-col md:flex-row overflow-hidden">
        <div className="flex gap-5 md:gap-5 mt-5">
          <div
            className="icon relative rounded-xl shadow-md shadow-black/20 px-3 py-2 hover:bg-zinc-700 hover:text-amber-300 cursor-pointer"
            onClick={decrement}
          >
            <i className="ri-subtract-line"></i>
          </div>
          <div className="icon relative rounded-xl shadow-md shadow-black/20 px-3 py-2 hover:bg-zinc-700 hover:text-amber-300 cursor-pointer">
            {quantity}
          </div>
          <div
            className="icon relative rounded-xl shadow-md shadow-black/20 px-3 py-2 hover:bg-zinc-700 hover:text-amber-300 cursor-pointer"
            onClick={increment}
          >
            <i className="ri-add-line"></i>
          </div>
          <div
            className="relative rounded-xl shadow-md shadow-black/20 px-3 py-2 hover:bg-zinc-700 hover:text-amber-300 cursor-pointer"
            onClick={() => removeItem(id)}
          >
            remove
          </div>
        </div>
        <div className=" flex items-start justify-start   flex-col">
          <h1 className="font-bold text-lg mt-2 md:mt-5 whitespace-nowrap">
            Amount Info
          </h1>
          <p>subtotal : ₹{price * quantity} </p>
          <p>Shipping Charges : free</p>
          <p>Tax : ₹{parseInt(((price * quantity) / 100) * 0.3)}</p>
          <p>Discount : ₹{parseInt(((price * quantity) / 100) * 0.5)}</p>
          <p>
            Total : ₹
            {parseInt(
              price * quantity +
              (((price * quantity) / 100) * 0.2) -
              (((price * quantity) / 100) * 10)
            )}
          </p>
        </div>
        <div className="flex  md:mt-28 mt-1 gap-4">
          <button
            disabled={isDisabled}
            className="flex items-center justify-center gap-5 text-white bg-[#1e40af] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring--300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            style={isDisabled ? {opacity:.4, pointerEvents:"none"}:{}}
           value={"submit"}
           onClick={buy}
          >
            buy now
          </button>
          <button 
          
          className="flex items-center justify-center gap-5 border-2 border-[#1d4ed8] hover:bg-[#1d4ed8] font-medium rounded-lg  px-2 py-1 text-center text-2xl hover:text-white"
          onClick={checkout}
          >
           {localisDisabled ? <MdDownloadDone/>:<IoIosAdd />} 
          </button>
        </div>
        
      </div>
    </>
  );
};

export default quantity;
