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
    <div className="text-center py-8 shadow-lg inline-block w-full  space-y-3 " >
      <h1 className="text-2xl font-bold">UseEffect Clean Up Function -- Task 1 -- Counter </h1>
      <button onClick={handleCount} className="bg-slate-800 text-white rounded-md cursor-pointer py-2 px-4">click me</button>
    </div>
  );
};

export default Counter;
