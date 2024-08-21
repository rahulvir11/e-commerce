import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import Pagenation from './Pagenation';

const Products = ({currentdata=[],additem}) => {
  const navigator = useNavigate();
  const location = useLocation();
 const handleroute =()=>{
  // console.log(location.pathname);
    if (location.pathname === "/products") {
      // alert("yes");
      return;
    }
    navigator("/products");
 }
  return (
    <div>
       <div
        className=" font-['gilroy']  pb-10"
        style={{
          backgroundColor: "#B5FFFC",
          backgroundImage: "linear-gradient(0deg, #B5FFFC 0%, #D2D0D1 100%)",
        }}
      >
        {/* products container*/}
        <div className=" flex flex-wrap lg:justify-evenly justify-center bg-transparent ">
          {currentdata.map((i) => {
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
                      <h4 className="font-semibold lg:mt-1">
                        {" "}
                        price : ${i.pPrice}
                      </h4>
                    </div>
                  </div>
                </div>
                <button
                  className="absolute bottom-5 right-5 w-10 h-10 rounded-full shader text-yellow-400 group-hover:scale-[1.2] ease-in duration-300"
                  onClick={() => additem(i._id)}
                >
                  <i className="ri-add-line"></i>
                </button>
              </div>
            );
          })}
      </div>
      {location.pathname === "/products" ? 
      "":<div className="bg-transparent h-16 w-full flex items-center justify-center">
            <button onClick={handleroute} className='text-gray-500 text-lg hover:text-blue-500 hover:scale-105'>view all..</button>
          </div>}
        </div>
    </div>
  )
}

export default Products
