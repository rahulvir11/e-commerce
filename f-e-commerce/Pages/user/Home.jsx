import React, { useEffect, useContext, useState } from "react";
import Navbar from "../../Components/users/Navbar";
import Footer from "../../Components/users/Footer";
import UserContext from "../../src/context/user/UserContex";
import { useNavigate } from "react-router-dom";
import Announcemenspage from "../../Components/users/Announcemenspage";
import Products from "../../Components/users/Products";

const Home = () => {
  const navigator = useNavigate();
  const {
    setAllproduct,
    getAllproduct,
    allProduct,
    addItem,
    getUser,
    getMyOrder,
  } = useContext(UserContext);
  useEffect(() => {
    if (allProduct.length === 0) {
      getAllproduct()
        .then((data) => {
          // console.log(data);
          if (data === undefined) {
            setAllproduct([]);
          } else {
            setAllproduct(data);
            getUser();
            getMyOrder();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const itemsPerPage = 8;
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(allProduct.slice(startIndex, endIndex));
  }, [currentPage, allProduct]);
  return (
    <>
      <Navbar />
      <Announcemenspage/>
       <Products currentdata={currentData}  additem={addItem}/>
     <Footer />
    </>
  );
};

export default Home;
