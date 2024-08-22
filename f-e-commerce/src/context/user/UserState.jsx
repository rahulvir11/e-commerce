import React, { useState } from "react";
import UserContext from "./UserContex";
  const API= import.meta.env.VITE_APP_URL_API;

const userState = ({ children }) => {
  console.log(API);
  const [authToken, setToken] = useState(localStorage.getItem("rswsit"));
  const [User, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [allProduct,setAllproduct]=useState([]);
  const [allUsers,setAlluser]=useState([]);
  const [trans,setTrans]=useState([]);
  const [buymultiple,setBuymultiple]=useState([]);
  const [isDisabled, setisDisabled] = useState(false);//state for select multiple product to buy
  const [showOrderPage,setShowOrderPage]=useState(false);
  const [myorders,setMyorder]=useState({});
 
    // get all product from database
    const getAllproduct = async ()=>{
      try {
        const response = await fetch(`${API}/api/v1/admin/allproducts`,{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
        });
  
        const data = await response.json();
        if(response.ok){
          return data
  
        }else{
          console.log('invalid credential')
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    const getAlltransaction = async ()=>{
      try {
        const response = await fetch(`${API}/api/v1/admin/alltransaction`,{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
        });
  
        const data = await response.json();
        if(response.ok){
          return data
  
        }else{
          console.log('invalid credential')
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    const getAlluser = async ()=>{
      try {
        const response = await fetch(`${API}/api/v1/admin/alluser`,{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
        });
  
        const data = await response.json();
        console.log(await data);
        if(response.ok){
          return data;
  
        }else{
          console.log('invalid credential')
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    // get login user 
    const getUser = async () => {
      try {
        // console.log(authToken);
        if (authToken !== null) {
          const response = await fetch(`${API}/api/v1/getuser`, {
            method: "GET",
            headers: {
              "Content-Type":"application/json",
              AuthToken: authToken,
            },
          });
    
          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
    
          const data = await response.json();
          
          if (response.ok) {
            // console.log(data);
            setUser(data);
            setCart(data.addCart);
            getMyOrder();
            // console.log(data);
          } else {
            console.log("Response data is empty or not in expected format");
          }
        } else {
          setUser({_id: null, role: null});
          console.log("AuthToken is null");
        }
      } catch (error) {
        console.log("Error occurred:", error.message);
      }
    };
    const getMyOrder = async () => {
      try {
        if (authToken !== null) {
          const response = await fetch(`${API}/api/v1/myorders`, {
            method: "GET",
            headers: {
              "Content-Type":"application/json",
              AuthToken: authToken,
            },
          });
    
          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
    
          const data = await response.json();
          
          if (response.ok) {
            setMyorder(data);
            // console.log(data);
          } else {
            console.log("Response data is empty or not in expected format");
          }
        } else {
          console.log("AuthToken is null");
        }
      } catch (error) {
        console.log("Error occurred:", error.message);
      }
    };
    
    // logout
    const logoutUser = async () => {
      try {
        const response = await fetch(`${API}/api/v1/logout`, {
          method: "POST",
          headers: {
            AuthToken: authToken,
          },
        });
     
        if (response.ok) {
          setToken("");
          localStorage.removeItem("rswsit");
        } else {
          console.log(response);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    // add product to cart
    const addItem = async (id)=>{
      try {
        
        const response = await fetch(`${API}/api/v1/addcart`, {
          method: "PUT",
          headers: {
            "Content-Type":"application/json",
            AuthToken: authToken,
          },
          body:JSON.stringify({id})
        });
        const data = await response.json();
        alert(data.message);
        if (data.Success) {
          const pro = allProduct.find(obj => obj._id === id);
          cart.push(pro);
        }
      } catch (error) {
        console.error(error);
      }
  }
 // create order and save order details in database
    const orderandsave = async (address)=>{
      try {
        // console.log(buymultiple);
        const response = await fetch(`${API}/api/v1/createorder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                AuthToken: authToken,
            },
            body: JSON.stringify({buymultiple,address}),
        });
        const data = await response.json();
        if (response.ok) {
            const options = {
                key: "rzp_test_b5INSO4ZdK6x1H",
                amount: parseInt(data.amount),
                currency: "INR",
                name: "rahul shopping web",
                description: "Pay & Checkout this item, Upgrade yourself",
                image: "https://plus.unsplash.com/premium_photo-1708271598114-5e6e8892a2ad?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%",
                order_id: data.id,
                handler: async function (response) {
                    
                    alert("This step of Payment Succeeded");
                    // Save transaction and product info in the database
                    try {
                        const saveResponse = await fetch(`${API}/api/v1/savetransaction`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                AuthToken: authToken,
                            },
                            body: JSON.stringify({
                                transactionDetails: response,
                                productInfo: buymultiple,
                                order:data,
                                address
                            }),
                        });
                        const saveData = await saveResponse.json();
                        if (saveResponse.ok) {
                          setShowOrderPage(true);
                          getMyOrder();
                        } else {
                          setShowOrderPage(false);
                        }
                    } catch (error) {
                        console.log("Error saving transaction and product info:", error);
                    }
                },
                prefill: {
                    contact: "",
                    name: "",
                    email: "",
                },
                notes: {
                    description: "Best Course for SDE placements",
                    language: "Available in 4 major Languages JAVA, C/C++, Python, Javascript",
                    access: "This course has Lifetime Access",
                },
                theme: {
                    color: "#2300a3",
                },
            };

            const razorpayObject = new Razorpay(options);
            razorpayObject.open();
        } else {
            console.log(data);
        }
    } catch (error) {
        console.log("Internal server error", error);
    }
    }
    const deleteUser =(id)=>{
      console.log(id);
    }
    return (
        <UserContext.Provider
          value={{
            setToken,
            allProduct,//state
            setAllproduct,//state function
            getAllproduct,//function
            addItem,//function
            getUser,//get single user function
            User,//state
            setUser,//state
            logoutUser,//function
            cart,//function
            setCart,//state function
            authToken,//state
            buymultiple,//state
            setBuymultiple,//state function
            isDisabled, //state for select multiple product to buy
            setisDisabled,//state for select multiple product to buy
            orderandsave,//function for create order in razorpay and save transaction in database
            showOrderPage,// if transaction is successful navigate to order page
            setShowOrderPage,//state function
            myorders,//single user order details for adime
            getMyOrder,// function for user
            getAlluser,//function for adime
            getAlltransaction,//function for adime
            trans,setTrans,//state function
            allUsers,//state for adime
            setAlluser, //state function
            deleteUser,
          }}
        >
          {children}
        </UserContext.Provider>
      );
}

export default userState
