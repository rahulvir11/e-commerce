import React ,{useContext, useEffect} from "react";
import Navbar from "../../Components/users/Navbar";
import Footer from "../../Components/users/Footer";
import UserContext from "../../src/context/user/UserContex";
import Table from "../../Components/admin/Table";
const UserOrders = () => {
  const {User ,setShowOrderPage,getUser,myorders}= useContext(UserContext);
useEffect(()=>{
  // console.log(myorders);
  setShowOrderPage(false);
  const isEmpty = obj => Object.keys(obj).length === 0;
  if (isEmpty(User)) {
    getUser();
  }
// console.log(myorders);
},[]);	

const columns = [
  {
    Header: "image",
    accessor: "productId.image",
    // Cell:({cell})=>{
    //   <img src={cell.row.original.photo} alt="Image"/>
    // }
  },{
    Header: "transactionsId",
    accessor: "transactionId",
  },{
    Header: "name",
    accessor: "productId.pName",
    // Cell:({cell})=>{
    //   <img src={cell.row.original.photo} alt="Image"/>
    // }
  },
  {
    Header: "quantity",
    accessor: "quantity",
  },
  {
    Header: "discount",
    accessor: "discount",
  },
  {
    Header: "tax",
    accessor: "tax",
  },
  {
    Header: "amount",
    accessor: "subamount",
  },
  {
    Header: "status",
    accessor: "status",
  },
  {
    Header: "view",
    accessor: "_id",
  },
];
  return (
    <>
      <div >
        <Navbar  />
          {/* items */}
          <div className="px-7">
          {myorders.length >0 ? <Table columns={columns} data={myorders} />: <h1>no order</h1>}
          </div>
          
        <Footer />
      </div>
    </>
  );
};

export default UserOrders;
