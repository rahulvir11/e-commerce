import React, { useEffect, useContext } from "react";
import Navbar from "../../Components/users/Navbar";
import Footer from "../../Components/users/Footer";
import UserContext from "../../src/context/user/UserContex";
import { useNavigate } from "react-router-dom";
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
  return (
    <div className="w-full min-h-screen  font-['gilroy'] pb-10 overflow-hidden"
    style={{'backgroundColor': '#FFDEE9',
      'backgroundImage': 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)'
      }}>
      <Navbar  />
      <div className="populardiv pb-5 relative px-8 w-full h-fit ">
        <h3 className="text-2xl pl-5 font-semibold text-blue-900 uppercase">Popular</h3>
      </div>
      <div className="products flex overflow-y-auto px-5 gap-2 flex-wrap justify-evenly">
        {allProduct.map((i) => {
          return (
            <div
              key={i._id}
              className="product w-fit h-fit rounded-xl p-2 bg-white group"
            >
              <div className="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img
                  src={i.image}
                  alt="img"
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="data w-full px-2 py-5">
                <h1 className="font-semibold text-xl leading-none tracking-tight w-[13rem] text-wrap">
                  {i.pName}
                </h1>
                <div className="flex justify-between w-full items-center mt-2">
                  <div className="w-1/2">
                    <h3 className="font-semibold opacity-50 w-[10rem] text-wrap">
                      {i.pDescription}
                    </h3>
                    <h4 className="font-semibold mt-2">${i.pPrice}</h4>
                  </div>
                  <button className="w-10 h-10 rounded-full shader text-yellow-400 group-hover:scale-[1.2] ease-in duration-300" onClick={()=>addItem(i._id)}>
                    <i className="ri-add-line"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
