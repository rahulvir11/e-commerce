import React from "react";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { BarChart, DoughnutChart } from "../../Components/admin/Chart";
import Table from "../../Components/admin/Table";
import { Data ,transaction} from "../../Components/admin/Data";
const Dashboard = () => {
  const columns = [
    {
      Header: "Id",
      accessor: "_id",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Quantity",
      accessor: "item",
    },
    {
      Header: "Discount",
      accessor: "discount",
    },
    {
      Header: "Status",
      accessor: "status",
    },
  ];

  return (
    <>
      <div className="relative w-screen bg-zinc-200 flex box-border ">
        <AdminSidebar />
        <main className="w-[85%] h-[100vh] border-2  overflow-y-scroll">
          <nav className="w-full h-[6%] flex py-5 items-center justify-between border-b-[1px] border-zinc-900">
            <div className="w-fit flex items-center">
              <BsSearch className="mx-2" />
              <input
                type="text"
                placeholder="Search for data, users, docs "
                className="border-none outline-none w-[15vw] bg-transparent "
              />
            </div>
            <div className="w-fit flex items-center">
              <FaRegBell />
              <div className="relative size-6 rounded-md overflow-hidden bg-slate-600 mx-3  ">
                <img
                  className="w-full  object-cover"
                  src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1706871902~exp=1706872502~hmac=70912a955862e2db10781df67cbdd39134411be0b37e5699a03a68ea7c74d231"
                  alt=""
                />
              </div>
            </div>
          </nav>

          <section className=" w-full h-[16%] px-2 mt-4  flex items-center justify-between ">
            {Data.infoo.map((info, index) => {
              return (
                <div
                  key={index}
                  className="cart w-[20%] h-full bg-white rounded-lg overflow-hidden flex"
                >
                  <div className="info w-1/2 h-full p-2">
                    <h3 className="text-sm">{info.heading}</h3>
                    <h2 className="font-bold">${info.amount}</h2>
                    <p
                      className={`flex items-center ${
                        info.percent > 0 ? `text-green-500` : `text-red-500`
                      }`}
                    >
                      {info.percent > 0 ? <HiTrendingUp /> : <HiTrendingDown />}{" "}
                      <span className="ml-1">
                        {info.percent > 0 ? "+" + info.percent : info.percent}%
                      </span>
                    </p>
                  </div>
                  <div className="chart w-1/2 h-full  flex justify-center items-center">
                    <div
                      className="circle size-20 rounded-[50%] p-[6px] "
                      style={{
                        background: `conic-gradient(${
                          info.percent > 0 ? "#27f027" : "#fa2323"
                        } ${
                          (Math.abs(info.percent) / 100) * 360
                        }deg ,rgb(255,255,255) 0)`,
                      }}
                    >
                      <div className="bg-white w-full h-full rounded-[50%] flex justify-center items-center">
                        <span>
                          {info.percent > 0 ? "+" + info.percent : info.percent}
                          %
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          <section className="w-full h-[75%] p-2 flex">
            <BarChart
              className="w-[75%] h-[75%]"
              data_1={[33, 56, 90, 90, 57, 77, 32, 77, 77, 27, 71]}
              data_2={[33, 56, 90, 57, 77, 32, 77, 32, 33, 56, 33]}
              title_1={"investment"}
              title_2={"profit"}
              bg_1="rgb(238, 176, 77)"
              bg_2="rgb(244, 54, 228)"
            />
            <div className="w-[25%] h-full p-1 text-black overflow-auto hidescroll">
              <h1 className="text-lg">Inventory</h1>
              {Data.categories.map((info, index) => {
                return (
                  <div className="w-full bg-white rounded-lg mb-2" key={index}>
                    <h3 className="w-fit p-1 ">{info.heading}</h3>
                    <div className="item_quantity w-full  flex items-center justify-center">
                      <div className="relative w-[75%] h-[10px] bg-gray-300 rounded-lg overflow-hidden m-1">
                        <div
                          className={`absolute left-0 h-[100%] rounded-lg`}
                          style={{
                            width: `${info.value}%`,
                            backgroundColor: `hsl(${info.value * 2}, ${
                              info.value
                            }%, ${info.value - 10}%)`,
                          }}
                        ></div>
                      </div>
                      <p className="w-[15%] pb-1">{info.value}%</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="w-[100%] h-[60%] flex items-center justify-between p-2">
            <div className="relative w-[24%] rounded-lg h-full flex items-center bg-white cursor-pointer">
              <DoughnutChart
                label={"total employee 670"}
                data={[230, 120]}
                labels={["female", "male"]}
                backgroundColor={['rgb(244, 130, 154)','rgb(201, 41, 246)']}
                legends={true}
              />
              <div className="absolute left-1/2 top-[55%] -translate-x-[50%] -translate-y-[50%] ">
                <BiMaleFemale size={"1.5rem"} />
              </div>
            </div>
            <div className="w-[74%] h-full bg-zinc-200">
              
                <Table columns={columns} data={transaction} item={8} />
            
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
