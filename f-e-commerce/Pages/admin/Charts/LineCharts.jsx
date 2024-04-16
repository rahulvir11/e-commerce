import React from 'react'
import AdminSidebar from '../../../Components/admin/AdminSidebar'
import {LineChart} from '../../../Components/admin/Chart'
const LineCharts = () => {
  return (
    <>
    <div className="relative w-screen bg-zinc-100 flex box-border ">
      <AdminSidebar />
      <main className="w-[85%] h-[100vh] border-2 p-5 overflow-y-scroll">
      <h1 className= "w-[90%] mt-2 font-semibold text-center text-lg uppercase">Active Users</h1>
      <section className="w-[90%] h-[90%] mx-auto mt-10 ">
        <LineChart
        label='Users'
        data={[123,172,71,239,292,325,323,909,822,353,363,282]}
        backgroundColor={'rgba(53,162,255,0.5)'}
        borderColor={'rgb(53,162,255)'}
        />
        </section>
      <h1 className= "w-[90%] mt-10 font-semibold text-center text-lg uppercase">total products (sku)</h1>
      <section className="w-[90%] h-[90%] mx-auto mt-10 ">
        <LineChart
        label='product'
        data={[23,112,51,99,42,125,23,49,82,34,23,82]}
        backgroundColor={'hsla(229,80%,40%,0.5)'}
        borderColor={'hsl(229,80%,40%)'}
        />
        </section>
      <h1 className= "w-[90%] mt-10 font-semibold text-center text-lg uppercase">total revenue </h1>
      <section className="w-[90%] h-[90%] mx-auto mt-10 ">
        <LineChart
        label='revenue'
        data={[1223,1722,7761,2339,2092,3225,9323,9049,8223,3534,3623,2982]}
        backgroundColor={'hsla(129,80%,40%,0.5)'}
        borderColor={'hsl(129,80%,40%)'}
        />
        </section>
      <h1 className= "w-[90%] mt-10 font-semibold text-center text-lg uppercase">total discount allotted </h1>
      <section className="w-[90%] h-[90%] mx-auto mt-10 ">
        <LineChart
        label='discount'
        data={[123,422,761,339,92,225,323,49,223,534,623,482]}
        backgroundColor={'hsla(329,80%,40%,0.5)'}
        borderColor={'hsl(329,80%,40%)'}
        />
        </section>
      </main>
    </div>
  </>
  )
}

export default LineCharts
