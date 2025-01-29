import React, { useEffect, useState } from "react";

const OnlineStatusChecker = () => {
  const [checkStatus, setCheckStatus] = useState(true);
  const [message, setMessage] = useState("");
  useEffect(() => {
if(checkStatus){
    setCheckStatus(false)
}
else{
    setCheckStatus(true)
}
  }, []);

  const handleChangeStatus = ()=>{
    if (checkStatus) {
        setMessage("Online Status");
      } else {
        setMessage("Offline Status");
      }
  }
  return <div>
    <button onClick={handleChangeStatus}>Change Statu</button>
    {message && <p>{message}</p> }
    
  </div>;
};

export default OnlineStatusChecker;
