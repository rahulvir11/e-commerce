import React from 'react'
import AdminSidebar from '../../../Components/admin/AdminSidebar'
import{Piechart,DoughnutChart} from "../../../Components/admin/Chart"
import {Data} from "../../../Components/admin/Data" 
const PieCharts = () => {
  return (
    <>
    <div className="relative w-screen bg-zinc-200 flex box-border ">
      <AdminSidebar />
      <main className="w-[85%] h-[100vh] border-2 p-5 overflow-y-scroll flex flex-col gap-5">
      <h1 className='w-[90%] text-center font-semibold text-2xl'>Pie & Doughnut Charts</h1>
            {/* order fulfilment ratio */}
           <h2 className= "w-[90%] mt-2 font-semibold text-center text-lg uppercase">order fulfilment ratio</h2>
            <section className="w-[40%] h-[50%] mx-auto mt-1 ">
            <Piechart
             labels={["Processing","Shipped","Delivered"]}
             data={[12,9,13]}
             backgroundColor={[
              'hsl(110,80%,80%)',
              'hsl(110,80%,50%)',
              'hsl(110,40%,50%)',
            ]}
            offset={[0,0,30]}
            />
            </section>
            {/* Product Categories Ratio */}
           <h2 className= "w-[90%] mt-10 font-semibold text-center text-lg uppercase">Product Categories Ratio</h2>
            <section className="w-[40%] h-[50%] mx-auto">
            <DoughnutChart
             labels={Data.categories.map((i)=> i.heading)}
             data={Data.categories.map((i)=> i.value)}
             backgroundColor={Data.categories.map((i)=> `hsl(${i.value*4},${i.value}%,50%)`)
              }
              offset={Data.categories.map(()=> 15)}
              borderColor={Data.categories.map((i)=> `hsl(${i.value*2},${i.value}%,50%)`)}
            />
            </section>
            {/* Stock availlity */}
           <h2 className= "w-[90%] mt-10 font-semibold text-center  text-lg uppercase">Stock availlity</h2>
            <section className="w-[40%] h-[50%] mx-auto">
            <DoughnutChart
             labels={["In Stock","Out Of Stock"]}
             data={[89,45]}
             backgroundColor={['hsl(269,80%,40%)','rgb(53,162,255)']}
              offset={[0,30]}
              borderColor={[  'hsl(110,80%,50%)',
              'hsl(110,40%,50%)',]}
            />
            </section>
              {/*revenue distribution */}
           <h2 className= "w-[90%] font-semibold text-center text-lg uppercase mt-10">revenue distribution</h2>
            <section className="w-[40%] h-[50%] mx-auto">
            <DoughnutChart
             labels={["Marketing Cost","Discount","Burnt","Production Cost","Net Margin"]}
             data={[32,19,23,98,34]}
             backgroundColor={['hsl(219,80%,40%)','rgb(53,162,255)','hsl(300,80%,80%)',
             'hsl(110,80%,50%)','hsl(190,80%,30%)',
             'hsl(300,80%,50%)']}
              offset={[10,10,30,10,10]}
              borderColor={[  'hsl(110,80%,20%)',
              'hsl(230,40%,50%)','hsl(190,80%,30%)',
              'hsl(300,80%,50%)','hsl(219,80%,40%)','rgb(53,162,255)']}
            />
          </section>
              {/* users age group */}
           <h2 className= "w-[90%] mt-10 font-semibold text-center text-lg uppercase">users age group</h2>
          <section className="w-[40%] h-[50%] mx-auto">
            <Piechart
             labels={["Teenager(Below 20)","Adult(20-40)","Older(Above 40)"]}
             data={[23,89,46]}
             backgroundColor={[ 'hsl(110,80%,50%)','hsl(290,80%,30%)',
             'hsl(230,50%,50%)']}
              offset={[10,30,10]}
              borderColor={['hsl(230,70%,40%)','hsl(190,80%,50%)',]}
            />
          </section>
              {/* Admin , Customers */}
          <section className="w-[40%] h-[60%] text-center mx-auto">
            <DoughnutChart
             labels={["Admin","Customers"]}
             data={[23,98]}
             backgroundColor={['hsl(219,80%,80%)','hsl(230,40%,80%)',
             ]}
              offset={[10,30]}
              borderColor={[  'hsl(110,80%,20%)',
              'hsl(230,40%,50%)']}
              legends={true}
              cutout={90}
            />
          </section>
      </main>
    </div>
  </>
  )
}

export default PieCharts
