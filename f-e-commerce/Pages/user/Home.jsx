import React, { useEffect, useContext, useState } from "react";
import Navbar from "../../Components/users/Navbar";
import Footer from "../../Components/users/Footer";
import UserContext from "../../src/context/user/UserContex";
import { useNavigate } from "react-router-dom";
import Pagenation from "../../Components/users/Pagenation";
const Home = () => {
  const navigator = useNavigate()
  const { setAllproduct, getAllproduct, allProduct,addItem,getUser,getMyOrder} = useContext(UserContext);
  useEffect(() => {
  
    if (allProduct.length === 0) {
      getAllproduct()
        .then((data) => {
          // console.log(data);
          if (data === undefined) {
           navigator("/error")
          }else{
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
  const itemsPerPage=8;
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentData(allProduct.slice(startIndex, endIndex));
    }, [currentPage, allProduct]);
  return (
    <div className="w-full min-h-screen  font-['gilroy'] overflow-hidden pb-10"
    style={{'backgroundColor': '#FFDEE9',
      'backgroundImage': 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)'
      }}>
      <Navbar  />
      <div className="populardiv pb-5 relative px-8 w-full h-fit ">
        <h3 className="text-2xl pl-5 font-semibold text-blue-900 uppercase">Popular</h3>
      </div>
       {/* products container*/}
      <div className=" flex flex-wrap lg:justify-evenly justify-center bg-transparent">
      {currentData.map((i) => {
          return (
            <div
              key={i._id}
              className="product mx-2 lg:mx-6 my-4 h-fit  lg:h-[60vh] w-[38vw] md:w-[25vw] lg:w-[20vw] rounded-xl p-1 bg-white group relative"
            >
              <div className="image w-full h-1/2  bg-white rounded-xl overflow-hidden">
                <img
                  src={i.image}
                  alt="img"
                  className="w-full h-full  object-contain  "
                />
              </div>
              <div className="data w-full px-2 py-5">
                <h1 className="font-semibold text-sm lg:text-xl leading-none tracking-tight w-full text-wrap">
                  {i.pName}
                </h1>
                <div className="  flex flex-col lg:flex-row justify-between w-full items-center mt-2">
                  <div className="w-full">
                    <h3 className="font-semibold opacity-50 max-h-[13vh] overflow-hidden text-wrap">
                      {i.pDescription}
                    </h3>
                    <h4 className="font-semibold lg:mt-1"> price : ${i.pPrice}</h4>
                  </div>
                  
                </div>
              </div>
              <button className="absolute bottom-5 right-5 w-10 h-10 rounded-full shader text-yellow-400 group-hover:scale-[1.2] ease-in duration-300" onClick={()=>addItem(i._id)}>
                    <i className="ri-add-line"></i>
                  </button> 
            </div>
          );
        })}
      </div>
     <div className="bg-transparent h-16 w-full flex items-center justify-center">
     <Pagenation 
                currentPage={currentPage} 
                totalPages={Math.ceil(allProduct.length / itemsPerPage)} 
                onPageChange={setCurrentPage} 
            />
     </div>
     <Footer />
    </div>
  );
};

export default Home;
