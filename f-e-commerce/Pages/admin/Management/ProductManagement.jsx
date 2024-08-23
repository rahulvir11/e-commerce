import React, { useEffect, useState, useContext } from "react";
import AdminSidebar from "../../../Components/admin/AdminSidebar";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../../src/context/user/UserContex";
const API= import.meta.env.VITE_APP_URL_API;
const ProductManagement = () => {
  const { allProduct, setAllproduct, getAllproduct } = useContext(UserContext);
  useEffect(() => {
    if (allProduct.length === 0) {
      getAllproduct()
        .then((data) => {
          setAllproduct(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setdata] = useState(allProduct.find((obj) => obj._id === id));
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "image") {
      handleInputimg();
    }
    if (name === "pStock" || name === "pPrice") {
      value = parseInt(value);
    }
    setdata({
      ...data,
      
      [name]: value,
    });
  };
  {
  }
  const [validImageUrl, setvalidImageUrl] = useState(true);
  async function isValidImageUrl(url) {
    try {
      const response = await fetch(url, { method: "HEAD" });
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.startsWith("image")) {
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error("Error checking image URL:", error);
      return false;
    }
  }

  const handleInputimg = () => {
    isValidImageUrl(data.image)
      .then((valid) => {
        console.log(valid);
        setvalidImageUrl(valid);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/v1/admin/product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const res = await response.json();
      if (response.ok) {
        alert(res.message);
        const indexToUpdate = allProduct.findIndex((obj) => obj._id === id);
        if (indexToUpdate !== -1) {
          allProduct[indexToUpdate] = {
            ...allProduct[indexToUpdate],
            ...data,
          };
          navigate("/admin/product");
        } else {
          console.log("Object not found in array.");
        }
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log("internal server error", error);
    }
  };
  const options = ['Electronics', 'Clothing', 'Books', 'Furniture', 'Toys','mobiles','fashion','leptop'];
  return (
    <>
      <div className="relative w-screen h-screen bg-zinc-200 flex">
        <AdminSidebar />
        <main className="flex items-center justify-center gap-5 w-[85%] px-2">
          <div className="w-[30%] h-[90vh]  bg-white p-5 rounded-lg">
            <p className="w-full h-5 text-right text-green-500">
              {data?.pStock} Available
            </p>
            <p className="mt-5 mb-2">ID - {data?._id}</p>
            <form className=" w-full h-[80%] flex items-center justify-center flex-col">
              {/* image box */}
              <div
                className="w-[80%] h-[80%] bg-black overflow-hidden rounded-md"
                style={{
                  background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
                  boxShadow: "21px 21px 41px #f0f0f0,-21px -21px 41px #ffffff",
                }}
              >
                <img className="w-full h-full " src={data?.image} alt="" />
              </div>
              {/* product name */}
              <h2 className="text-lg p-3 uppercase">{data?.pName}</h2>
              {/* product price */}
              <h1 className="text-xl font-bold">${data?.pPrice}</h1>
            </form>
          </div>
          <div className="w-[30%] h-[90vh] bg-white p-5 rounded-lg">
            <form className="flex items-center justify-center flex-col">
              <h1 className="font-semibold">MANAGE</h1>
              <div className="w-full flex items-center justify-center mt-5">
                <div className="relative w-full">
                  <input
                    id="pName"
                    name="pName"
                    type="text"
                    className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit font-semibold text-zinc-600"
                    onChange={handleInput}
                    value={data?.pName}
                  />
                  <label
                    htmlFor="pName"
                    className={`absolute left-0  cursor-text ${
                      data?.pName === ""
                        ? "peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        : "text-xs -top-[12px] transition-all text-blue-700"
                    }`}
                  >
                    Product Name
                  </label>
                </div>
              </div>

              <div className="w-full flex items-center justify-center mt-5">
                <div className="relative w-full">
                  <input
                    id="pPrice"
                    name="pPrice"
                    type="number"
                    className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit font-semibold text-zinc-600"
                    onChange={handleInput}
                    value={data?.pPrice}
                  />
                  <label
                    htmlFor="pPrice"
                    className={`absolute left-0  cursor-text ${
                      data?.pPrice === ""
                        ? "peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        : "text-xs -top-[12px] transition-all text-blue-700"
                    }`}
                  >
                    Product Price
                  </label>
                </div>
              </div>

              <div className="w-full flex items-center justify-center mt-5">
                <div className="relative w-full">
                  <input
                    id="pStock"
                    name="pStock"
                    type="number"
                    className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit font-semibold text-zinc-600"
                    onChange={handleInput}
                    value={data?.pStock}
                  />
                  <label
                    htmlFor="pStock"
                    className={`absolute left-0  cursor-text ${
                      data?.pStock === ""
                        ? "peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        : "text-xs -top-[12px] transition-all text-blue-700"
                    }`}
                  >
                    Product Stock
                  </label>
                </div>
              </div>
              {/* catgories */}
              <select
                onChange={handleInput}
                id="pCatgories"
                name="pCategories"
                value={data?.pCategories} // Set the value prop to manage the selected option
                className="my-2 py-1 w-full border-b-[1px] border-zinc-700 outline-none"
              >
                <option value="">Please choose one category</option>
                {options.map((option, index) => {
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>

              {/* image input */}
              <div className="w-full flex items-center justify-center mt-5">
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
                        : "text-xs -top-[12px] transition-all text-blue-700"
                    }
                    `}
                  >
                    {data.image === ""
                      ? "enter product image url"
                      : validImageUrl
                      ? "product image url valid"
                      : "product image url not valid"}
                  </label>
                </div>
              </div>
              {/* image box */}

              {/* submit boutton */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-yellow-950 mt-5 text-zinc-100 border border-amber-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-zinc-400 shadow-zinc-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Update Product
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductManagement;
