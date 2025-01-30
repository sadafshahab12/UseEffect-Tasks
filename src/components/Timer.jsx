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
    <div className="p-5 border text-center space-y-4">
      <h1 className="sm:text-2xl text-lg font-bold text-center py-5">
        UseEffect Clean Up Function -- Task 4 -- Timer{" "}
      </h1>
      <h1 className="text-xl font-bold">Time : {time}</h1>
      <div className="gap-4 flex sm:flex-row flex-col justify-center items-center">
        <button
          onClick={handleStart}
          className="bg-gray-600 text-white py-2 px-4 rounded-md text-sm active:scale-95 transition-all ease-in duration-100 sm:w-auto w-full"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-gray-600 text-white py-2 px-4 rounded-md text-sm active:scale-95 transition-all ease-in duration-100 sm:w-auto w-full"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-600 text-white py-2 px-4 rounded-md text-sm active:scale-95 transition-all ease-in duration-100 sm:w-auto w-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
