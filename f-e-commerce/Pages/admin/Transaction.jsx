import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../Components/admin/AdminSidebar'
import Table from '../../Components/admin/Table';
import {transaction} from '../../Components/admin/Data'
import UserContext from "../../src/context/user/UserContex";
const Transaction = () => {
  const {trans,setTrans} = useContext(UserContext);
 
  const columns = [
    {
      Header: "User ID",
      accessor:"userId",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Discount",
      accessor: "orderProductIds[0].discount",
    },
    {
      Header: "Quantity",
      accessor: "orderProductIds[0].quantity",
    },
    {
      Header: "Status",
      accessor: "orderProductIds[0].status",
    },
    {
    Header: "Manage",
    accessor: "orderProductIds[0]._id",
    }
  ];
  
  return (
    <>
    <div className="relative w-screen h-screen bg-zinc-200 flex">
        <AdminSidebar />
        <main className="  w-[85%] px-2">
          <Table columns={columns} data={trans} item={6}/>
        </main>
      </div>
  </>
  )
}

export default Transaction
