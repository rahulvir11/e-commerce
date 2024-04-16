import React from "react";
import AdminSidebar from "../../../Components/admin/AdminSidebar";
import {BarChart} from "../../../Components/admin/Chart"
const BarCharts = () => {
  return (
    <>
      <div className="relative w-screen h-screen bg-zinc-200 flex box-border ">
        <AdminSidebar />
        <main className="w-[90%] p-5 h-full border-2 overflow-y-scroll">
            <h1>Bar Charts</h1>
            <section className="w-full mx-auto mt-2">
                <BarChart 
                horizontal={false}
                data_1={[200,444,343,556,778,455,900]} 
                data_2={[300,244,433,655,237,755,190]}
                title_1={"Products"}
                title_2={"Users"}
                bg_1={"hsl(260,50%,30%)"}
                bg_2={"hsl(360,90%,90%)"}
                />
                <h2 className= "w-full text-center font-semibold mt-3 uppercase">top selling products & top customers</h2>
            </section>
            <section className="w-full mx-auto mt-10">
                <BarChart 
                horizontal={true}
                data_1={[200,444,343,556,778,455,900,233,840,565,222]} 
                data_2={''}
                title_1={"Products"}
                title_2={''}
                bg_1={"hsl(180,50%,50%)"}
                bg_2={''}
                />
                <h2 className= "w-full text-center uppercase font-semibold mt-3">top selling products & top customers</h2>
            </section>
        </main>
      </div>
    </>
  );
};

export default BarCharts;
