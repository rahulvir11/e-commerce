import React, {useContext, useEffect, useState}from "react";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import Table from "../../Components/admin/Table";
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import UserContext from "../../src/context/user/UserContex";
const Products = () => {

  const {allProduct,setAllproduct,getAllproduct} =  useContext(UserContext);
  useEffect(()=>{
    if (allProduct.length === 0) {
       getAllproduct().then((data)=>{
        setAllproduct(data)
       }).catch((error)=>{
        console.log(error);
       })
    }
     
},[])
  const columns = [
    {
      Header: "Photo",
      accessor: "image",
      // Cell:({cell})=>{
      //   <img src={cell.row.original.photo} alt="Image"/>
      // }
    },
    {
      Header: "Name",
      accessor: "pName",
    },
    {
      Header: "Price",
      accessor: "pPrice",
    },
    {
      Header: "Stock",
      accessor: "pStock",
    },
    {
      Header: "Manage",
      accessor: "_id",
    },
  ];
  return (
    <>
      <div className="relative w-screen h-screen bg-zinc-200 flex">
        <AdminSidebar />
        <main className="w-[85%] px-2 bg-transparent">
          <NavLink className='fixed size-10 shader rounded-lg  text-yellow-400  flex items-center justify-center right-10 bottom-10' to={'/admin/product/new'}><IoMdAdd size={'3rem'} ></IoMdAdd></NavLink>
          <Table columns={columns} data={allProduct} item={6}/>
        </main>
      </div>
    </>
  );
};

export default Products;
