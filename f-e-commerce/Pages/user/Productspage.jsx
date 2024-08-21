import React, { useContext, useEffect, useState } from 'react'
import Products from "../../Components/users/Products"
import UserContext from "../../src/context/user/UserContex";
import { useLocation, useNavigate } from "react-router-dom";
import Pagenation from "../../Components/users/Pagenation"
import Navbar from '../../Components/users/Navbar';
import Footer from '../../Components/users/Footer';
const Productspage = () => {
    const navigator = useNavigate();
    const location = useLocation();
    
    const {
      setAllproduct,
      getAllproduct,
      allProduct,
      addItem,
      getUser,
      getMyOrder,
    } = useContext(UserContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const itemsPerPage = 12;

    useEffect(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentData(allProduct.slice(startIndex, endIndex));
    }, [currentPage, allProduct]);

    useEffect(() => {
      if (allProduct.length === 0) {
        getAllproduct()
          .then((data) => {
            // console.log(data);
            if (data === undefined) {
              navigator("/error");
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
  return (
    <div className='mb-10'>
        <Navbar/>
    <Products currentdata={currentData} allproduct={allProduct} setcurrentpage={setCurrentPage} currentpage={currentPage} additem={addItem} itemsperpage={itemsPerPage}/>
    <div className="bg-transparent h-16 w-full flex items-center justify-center">
            <Pagenation
              currentPage={currentPage}
              totalPages={Math.ceil(allProduct.length / itemsPerPage)}
              onPageChange={setCurrentPage}
            />
          </div>
          <Footer/>
    </div>
  )
}

export default Productspage
