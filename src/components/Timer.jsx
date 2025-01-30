import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(60);
  };
  return (
    <div className="p-5 border m-5 text-center space-y-4">
      <h1 className="text-xl font-bold">Time : {time}</h1>
      <div className="space-x-4">

      <button onClick={handleStart} className="bg-gray-600 text-white py-2 px-4 rounded-md text-sm active:scale-95 transition-all ease-in duration-100">Start</button>
      <button onClick={handleStop} className="bg-gray-600 text-white py-2 px-4 rounded-md text-sm active:scale-95 transition-all ease-in duration-100">Stop</button>
      <button onClick={handleReset} className="bg-gray-600 text-white py-2 px-4 rounded-md text-sm active:scale-95 transition-all ease-in duration-100">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
