import React, { useState, useEffect } from "react";
import AdminSidebar from "../../../Components/admin/AdminSidebar";
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  return (
    <>
      <div className="relative w-screen bg-zinc-200 flex box-border ">
        <AdminSidebar />
        <main className="w-[85%] h-[100vh] border-2  overflow-y-scroll">
          <div className="w-full max-w-xs mx-auto mt-40 p-4 bg-gray-100 rounded-lg">
            <h1 className="text-3xl text-center font-semibold mb-4">
              Stopwatch
            </h1>
            <p className="text-4xl text-center mb-4">{formatTime(time)}</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleStartStop}
                className={`px-4 py-2 rounded-md ${
                  isRunning
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                } text-white focus:outline-none`}
              >
                {isRunning ? "Stop" : "Start"}
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white focus:outline-none"
              >
                Reset
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default StopWatch;
