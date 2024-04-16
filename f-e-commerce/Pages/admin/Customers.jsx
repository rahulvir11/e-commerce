import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../Components/admin/AdminSidebar'
import Table from '../../Components/admin/Table';
import UserContext from '../../src/context/user/UserContex';

const Customers = () => {
  const {allUsers} = useContext(UserContext);
  const data = [
    {
  
      image:
      "https://plus.unsplash.com/premium_photo-1675448891119-bda089d46450?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "rahul",
      gender:"male",
      email:"rahul@gmail.com",
      roll:"user",
      action: "/admin/delete",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1686050416689-1b1f64fd5000?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "rahul",
        gender:"female",
        email:"rahulkumar@gmail.com",
        roll:"user",
      action: "/admin/delete/ioei",
    },
   
  ];

  const columns = [
    {
      Header: "Avatar",
      accessor: "image",
      // Cell:({cell})=>{
      //   <img src={cell.row.original.photo} alt="Image"/>
      // }
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header:"Roll",
      accessor:"isAdmin"
    },
    {
      Header: "Delete",
      accessor: "_id",
    },
  ];
  return (
    <>
      <div className="relative w-screen h-screen bg-zinc-200 flex">
        <AdminSidebar />
        <main className="w-[85%] px-2">
          <Table columns={columns} data={allUsers} item={6} typeOfTable='user'/>
        </main>
      </div>
    </>
  )
}

export default Customers
