import React, { useState } from "react";
import AdminSidebar from "../../../Components/admin/AdminSidebar"
import {motion} from "framer-motion"

const Toss = () => {
  
    const [result, setResult] = useState("");
    const [roate ,setRoate] = useState('')
    const handleToss = () => {
      const randomNumber = Math.random();
      setRoate(roate != "360deg" ? "360deg" : "-360deg");
      setResult(randomNumber < 0.5 ? "Heads" : "Tails");
    };
   
  return (
    <div>
       <div className=" w-screen bg-zinc-200 flex box-border ">
        <AdminSidebar />
        <main className="w-[85%] h-[100vh] border-2  overflow-y-scroll">

          <div className="relative w-[30%] h-[50%] flex flex-col items-center mt-40 mx-auto bg-slate-50">
            <h1 className="text-3xl font-semibold mb-4">Coin Toss Game</h1>
            {(result && 
            <motion.div className=" mt-4 size-24 bg-red-500 overflow-hidden rounded-full"
            initial={{roateX:0 ,opacity:0}}
            animate={{rotateX:roate,opacity:1}}
            transition={{
              duration: 2,
              type: "spring",
            }}
            >
             <img
                  src={`${
                       result === "Heads" ? "images/head.jpg" : "images/Tell.jpg"
                  }.jpg`}
                     alt={result}
                    className="size-24 "
                /> 
              </motion.div>
             )}
              <p className="absolute bottom-20 text-xl font-semibold">Result: {result}</p>
              <button
              onClick={handleToss}
              className="absolute bottom-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold focus:outline-none"
            >
              Toss the Coin
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Toss
