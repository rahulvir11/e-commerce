import React, { useContext, useState } from "react";
import AdminSidebar from "../../../Components/admin/AdminSidebar";
import UserContext from "../../../src/context/user/UserContex";
const API= import.meta.env.VITE_APP_URL_API;
import {toast} from 'react-toastify'
const NewProduct = () => {
  const { User}=useContext(UserContext);
 
  const [data, setdata] = useState({
    pName: "",
    pPrice: "",
    pStock: "",
    pDescription:"",
    image: "",
    pCategories:""
  });
  const options = ['Electronics', 'Clothing', 'Books', 'Furniture', 'Toys','mobiles','fashion','leptop'];
  const handleInput = (e) => {
    const { name, value } = e.target;
  
    // Check if the input type is number
    const isNumberInput = e.target.type === "number";
  
    // Set the value based on the input type
    const processedValue = isNumberInput ? parseInt(value) : value;
    if (name === "image") {
      handleInputimg();
    }
    setdata({
      ...data,
      [name]: processedValue,
    });
  };
  
  const [validImageUrl, setvalidImageUrl] = useState(true);
  async function isValidImageUrl(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        if (response.ok) {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.startsWith('image')) {
                return true;
            }
        }
        return false;
    } catch (error) {
        console.error('Error checking image URL:', error);
        return false;
    }
}

const handleInputimg = ()=>{
  isValidImageUrl(data.image)
  .then(valid => {
    console.log(valid);
    setvalidImageUrl(valid);
  })
  .catch(error => {
      console.error('Error:', error);

  });
}
const handlesubmit = async (e) => {
  e.preventDefault();
  try {
    if (User.email != 'rahulroy15032004mandal@gmail.com') {
      toast.error('not allow')
      return;
    }
    const response = await fetch(`${API}/api/v1/admin/product/new`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data),
    });

    const res = await response.json();
    // console.log(res);
    // console.log(data);

    if(response.ok){
      alert("add product",res.pName);
      setdata({
        pName: "",
        pPrice: "",
        pStock: "",
        pDescription:"",
        image: "",
      })
    }else{
     toast.info(res.error)
    }
  } catch (error) {
    console.log("internal server error",error);
  }
};
  return (
    <>
      <div className="relative w-screen h-screen bg-zinc-200 flex">
        <AdminSidebar />
        <main className="relative w-[85%] px-2">
          <div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[30%]  bg-white p-5 rounded-lg">
            <form className="flex items-center justify-center flex-col">
              <h1>add items</h1>
              {/* name */}
              <div className="w-full flex items-center justify-center mt-5">
                <div className="relative w-full">
                  <input
                    id="pName"
                    name="pName"
                    type="text"
                    required={true}
                    className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit font-semibold text-zinc-600"
                    onChange={handleInput}
                    value={data.pName}
                  />
                  <label
                    htmlFor="pName"
                    className={`absolute left-0  cursor-text ${
                      data.pName === ""
                        ? "peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        : "text-xs -top-[12px] transition-all text-blue-700"}
                    `}>
                    Product Name
                  </label>
                </div>
              </div>
              {/* description */}
              <div className="w-full flex items-center justify-center mt-5">
                <div className="relative w-full">
                  <input
                    id="pDescription"
                    name="pDescription"
                    type="text"
                    required={true}
                    className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit font-semibold text-zinc-600"
                    onChange={handleInput}
                    value={data.pDescription}
                  />
                  <label
                    htmlFor="pDescription"
                    required={true}
                    className={`absolute left-0  cursor-text ${
                      data.pDescription === ""
                        ? "peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        : "text-xs -top-[12px] transition-all text-blue-700"}
                    `}>
                    Product information
                  </label>
                </div>
              </div>
              {/* price */}
              <div className="w-full flex items-center justify-center mt-5">
                <div className="relative w-full">
                  <input
                    id="pPrice"
                    name="pPrice"
                    type="number"
                    required={true}
                    className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit font-semibold text-zinc-600"
                    onChange={handleInput}
                    value={data.pPrice}
                  />
                  <label
                    htmlFor="pPrice"
                    className={`absolute left-0  cursor-text ${
                      data.pPrice === ""
                        ? "peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        : "text-xs -top-[12px] transition-all text-blue-700"}
                    `}
                  >
                    Product Price
                  </label>
                </div>
              </div>
              {/* stock */}
              <div className="w-full flex items-center justify-center mt-5">
                <div className="relative w-full">
                  <input
                    id="pStock"
                    name="pStock"
                    type="number"
                    required={true}
                    className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit font-semibold text-zinc-600"
                    onChange={handleInput}
                    value={data.pStock}
                  />
                  <label
                    htmlFor="pStock"
                    className={`absolute left-0  cursor-text ${
                      data.pStock === ""
                        ? "peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        : "text-xs -top-[12px] transition-all text-blue-700"}
                    `}
                  >
                    Product Stock
                  </label>
                </div>
              </div>
              {/* catgories */}
              <select onChange={handleInput} id="pCatgories" name="pCategories" className="my-2 py-1 w-full border-b-[1px] border-zinc-700 outline-none ">
                <option >Please choose one catgories</option>
                {options.map((option, index) => {
                    return (
                        <option key={index} className="">
                            {option}
                        </option>
                    );
                })}
            </select>
             {/* image input */}
             <div className="w-full flex items-center justify-center mt-3">
                <div className="relative w-full">
                  <input
                    id="image"
                    name="image"
                    type="url"
                    className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit font-semibold text-zinc-600"
                    onChange={handleInput}
                    value={data.image}
                  />
                  <label
                    htmlFor="image"
                    className={`absolute left-0  cursor-text ${
                      data.image === ""
                        ? "peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        : "text-xs -top-[12px] transition-all text-blue-700"}
                    `}
                  >
                    {data.image === "" ? "enter product image url": validImageUrl ? "product image url valid":"product image url not valid"}
                  </label>
                </div>
              </div>
             
              {/* image box */}
              <div className="size-36 mt-5 overflow-hidden" style={{
                borderRadius: "29px",
                background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
                boxShadow:  '21px 21px 41px #f0f0f0,-21px -21px 41px #ffffff'
           
              }}>
                <img className="w-full h-full " src={data.image} alt="image" />
              </div>
             
            
              {/* submit boutton */}
              <button type="submit" onClick={handlesubmit} className="bg-yellow-950 mt-5 text-zinc-100 border border-amber-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-zinc-400 shadow-zinc-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Add Product
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default NewProduct;

// const imagebase64 = (file) => {
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   const data = new Promise((resolve, reject) => {
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (err) => reject(err);
//   });
//   return data;
// };

// const ImageUpload = async (e) => {
//   const file = e.target.files[0];
//   const img = await imagebase64(file);
//   setImage(img);
// };