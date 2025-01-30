import React, { useEffect, useState } from "react";

const OnlineStatusChecker = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("online", handleOffline);
    return () => {  //return cleanup function
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("online", handleOffline);
    };
  }, []);

  return (
    <div>
      <p>{isOnline? "Online" : "Offline"}</p>
    </div>
  );
};

export default OnlineStatusChecker;
