import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="text-center my-4" >
      <button onClick={handleCount} className="bg-slate-800 text-white rounded-md cursor-pointer py-2 px-4">click me</button>
    </div>
  );
};

export default Counter;
