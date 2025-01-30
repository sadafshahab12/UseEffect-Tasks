import React, { useEffect, useState } from "react";
import { FaDotCircle } from "react-icons/fa";

const OnlineStatusChecker = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("online", handleOffline);
    return () => {
      //return cleanup function
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("online", handleOffline);
    };
  }, []);
  const toggleOnlineStatus = () => {
    setIsOnline((prevStatus) => !prevStatus);
  };
  return (
    <div className="text-center sm:py-8 py-4 p-5 shadow-lg inline-block w-full space-y-4 border ">
      <h1 className="sm:text-2xl text-lg font-bold text-center py-5">
        UseEffect Clean Up Function -- Task 7 -- Online Status Checker{" "}
      </h1>
      <button
        className="bg-slate-800 text-white rounded-md cursor-pointer py-2 px-4"
        onClick={toggleOnlineStatus}
      >
        toggle Status
      </button>
      <p
        className={`${
          isOnline ? "text-green-400" : "text-red-400"
        } flex justify-center items-center gap-4`}
      >
        <FaDotCircle /> {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default OnlineStatusChecker;
