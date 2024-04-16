import React, { useState, useEffect } from "react";
import AdminSidebar from "../../../Components/admin/AdminSidebar";
import { useParams } from "react-router-dom";
import { products, transaction, user } from "../../../Components/admin/Data";
const TransactionManagement = () => {
  // const { id } = useParams();
  // const [total ,settotal]=useState("");
  // const [transactionData, setTransactionData] = useState(
  //   transaction.filter((v) => v._id === id)[0]
  // );
  // const [productData, setProductData] = useState([]);
  // const [userData , setUserData] = useState(user.filter((v)=> v.id === transactionData.userId)[0])
  // useEffect(() => {
  //   // console.log(transactionData);
  //   const da = [];
  //   transactionData.productId.forEach((obj) => {
  //     da.push(products.filter((obj1) => obj1.id === obj.id)[0]);
  //   });
  //   // console.log(da);
  //   setProductData(da);
   
  // }, []);
  // const subtotal = () => {
  //   let sum = 0;
  //   productData.map((obj, index) => {
  //     sum += obj.productprice * transactionData.productId[index].quantity;
  //   });
  //   settotal(sum);
  // };
  return (
    <>
      <div className="relative w-screen h-screen bg-zinc-200 flex">
        <AdminSidebar />
        {/* <main className="flex items-center justify-center gap-5 w-[85%] px-2 box-border">
          <div className="w-[30%] h-[90vh]  bg-white p-5 rounded-lg ">
            <h1 className="w-full text-center font-semibold">ORDER ITEMS</h1>
            <p className="mt-2 mb-2">ID - {transactionData._id}</p>
            <div className="w-full h-fit flex items-start justify-start flex-col gap-2 ">
              {productData.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex items-start justify-start  text-center gap-2 "
                  >
                    <div
                      className="size-10 bg-black overflow-hidden rounded-md"
                      style={{
                        background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
                        boxShadow:
                          "21px 21px 41px #f0f0f0,-21px -21px 41px #ffffff",
                      }}
                    >
                      <img
                        className="w-full h-full "
                        src={obj.image}
                        alt="image"
                      />
                    </div>
                    <h2 className=" pt-2 uppercase">{obj.productname}</h2>
                    <h1 className="font-semibold pt-2">
                      ${obj.productprice} ×
                      {transactionData.productId[index].quantity} = {obj.productprice *
                        transactionData.productId[index].quantity}
                    </h1>
                  </div>
                );
              })}
            </div>
            <button
               
                onClick={()=>subtotal()}
                className="bg-yellow-950 mt-5 text-zinc-100 border border-amber-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-zinc-400 shadow-zinc-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Total = {total}
              </button>
          </div>
          <div className="w-[30%] h-[90vh] bg-white p-5 rounded-lg">
            <h1 className="w-full font-semibold text-center">ORDER INFO</h1>
            <form className="flex items-start justify-center flex-col">
                <h1 className="font-bold text-lg mt-5">User Info</h1>
                <p>name : {userData.name}</p>
                <p>Email : {userData.email}</p>
                <p>Phone : {userData.phone}</p>
                <p>Address : {userData.address}</p>
                <h1 className="font-bold text-lg mt-5">Amount Info</h1>
                <p>subtotal : {total}</p>
                <p>Shipping Charges : 300 </p>
                <p>Tax : 200</p>
                <p>Discount : {transactionData.discount}</p>
                <p>Total : {total - transactionData.discount +300+200}</p>
                <h1 className="font-bold text-lg mt-5">Status Info</h1>
                <p>Status :</p>
              <button
                type="submit"
                // onClick={handleSubmit}
                className="bg-yellow-950 mt-5 mx-auto text-zinc-100 border border-amber-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-zinc-400 shadow-zinc-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Process Status
              </button>
            </form>
          </div>
        </main> */}
      </div>
    </>
  );
};

export default TransactionManagement;
