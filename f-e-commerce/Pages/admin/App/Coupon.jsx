import React from 'react'
import AdminSidebar from '../../../Components/admin/AdminSidebar'
const Coupon = () => {
  return (
    <>
    <div className="relative w-screen bg-zinc-200 flex box-border ">
      <AdminSidebar />
      <main className="w-[85%] h-[100vh] border-2  overflow-y-scroll"></main>
    </div>
  </>
  )
}

export default Coupon
